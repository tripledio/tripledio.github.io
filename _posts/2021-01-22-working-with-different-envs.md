---
layout: post
title: "Working with different environments"
author: gert
tags: environments, devops
excerpt: Having to work with different environment configurations on your pc can be a hassle and dangerous.
hideLogo: true
spotlight:
  imgDir: /img/posts/environments
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# Working with different environments

These days everyone has known a company where they have different environments: development, QA, staging, production, ... 

One of the hassles and dangers this causes is that you have to constantly switch between environments to check certain things and in rare occasions modify the environments. 
The reason why I'm saying rare for modifications is that these should preferably happen through some sort of pipeline that has been tested on lower environments before it gets to run against production.

Almost every ITer knows of some story of accidental deletes in environments where it should not happen. Let it be deleting secrets on the wrong [Kubernetes](https://kubernetes.io/) cluster or [Terraform](https://www.Terraform.io/) destroy. Of course, this never happens intentionally, may it be because of a lack of sleep or some sort of distraction.

So with this in mind, and the incentive for continuous improvements, I set out to find a possible solution for this. In this post, I will describe what I found.

## Direnv

[Direnv](https://direnv.net/) allows you to load and unload environment variables based on what folder you are in. 

This sounds kind of dull right? But it can be quite powerful. Since the industry is pushing towards infrastructure as code more and more this is perfect. If the infrastructure is code that means that there should also be a git repository for it and thus a folder where we can hook into.

### Use cases

Let's say you are using Terraform you will probably have a directory for every environment.
Whenever you run `terraform apply` in one of these folders Terraform will take care of applying to the correct environment.
However, whenever you want to validate anything if it was correctly created like a deployment on Kubernetes or an S3 bucket on aws you have to make sure you are targeting the correct environment. Well, remember what I said earlier about loading environment variables per folder. This is where we are going to use it when you enter the folder for the environment, direnv will load the env variables.
Since most CLI tools can be configured with environment variables eg. *KUBECONFIG*, *AWS_PROFILE*, ... we can leverage this to point our tools to the correct environment.

As another example, it can also be used for applications that are build and deployed with [Heroku](https://www.heroku.com/). Since you also need to specify certain environment variables there to check or deploy applications. The token is unique per application so you could easily make direnv work with every Heroku repository by setting `HEROKU_API_KEY`.

Even when you are not using a tool like Terraform or Heroku it's still possible you have a git repository that contains some config files or scripts for certain environments.

### How

Instructions on how to install direnv can be found on their website [here](https://direnv.net/docs/installation.html).

For mac, it is really easy if you have [homebrew](https://brew.sh/). Just run `brew install direnv` and then add `eval "$(direnv hook zsh)"` to your `~/.zshrc file` or `eval "$(direnv hook bash)"` to your ~/.bashrc file and source it or restart your shell.

Now you're ready to start using it! In the directory where you want direnv to control your environment variables you just need to create a `.envrc` file. Below you can find an example of this file.

```shell
export KUBECONFIG=~/.kube/development_config
export AWS_DEFAULT_REGION=eu-central-1
export AWS_PROFILE=development
```

This file will point `kubectl` to the development cluster and `aws` to the development profile with the eu-central-1 region. Since executing this file could be potentially harmful you need to let direnv know it can execute it with `direnv allow` you will have to repeat this every time you make changes to the file in another editor. This is because direnv keeps a hash of the file to see if it has changed.
Another way to change the file contents is with `direnv edit` then you won't need to re-allow the file.

Since the direnv will force you to reallow the file if anything has changed this opens up an interesting opportunity. You could check in the file so it gets shared with other team members. Then not everyone needs to configure it themselves and new team members can use it easily. The security implications are low since the file will not be allowed to executed anymore once someone changes it.

Now, whenever you enter the folder it will print the following: 

![entering folder](/img/posts/environments/entering.png)

and when leaving it: 

![leaving folder](/img/posts/environments/leaving.png)

After the `.envrc` file is unloaded any environment variables that were overridden will be restored.

Now, if the file has changed and it is no longer allowed direnv will print the following if you enter the folder:

![blocked](/img/posts/environments/blocked.png)

## Conclusion

You can use direnv to easily couple the infrastructure as code folders with their respective environments so fewer mistakes can be made. It can also easily be shared between team members so everyone can benefit from it.
This way everyone's config will be similar and the change on users errors there will also be lower. In a future blog post, I will elaborate even furth on how you can create some nifty stuff in combination with some other shell features.

