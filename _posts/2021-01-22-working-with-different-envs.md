---
layout: post
title: "Working with different environments"
author: gert
tags: environments, devops
excerpt: Having to work with different environments configs on your pc can be a hassle and dangerous. Let's explore an option that will improve your experience with it.
hideLogo: true
spotlight:
  imgDir: /img/posts/environments
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# Working with different environments

Today, most companies have different environments where they deploy and run their software. Everyone knows the typical examples: development, QA, production.

One of the hassles and dangers this causes is that you continually need to switch between environments to check certain things and on rare occasions, modify the environments.
I'm saying rare for modifications because these should preferably happen through some pipeline tested on lower environments before it gets to run against production.

Almost every ITer knows of some story of accidental deletes in environments where it should not happen. Let it be deleting secrets on the wrong [Kubernetes](https://kubernetes.io/) cluster or [Terraform](https://www.Terraform.io/) destroy. Of course, this never happens intentionally, may it be because of a lack of sleep or any distractions.

So with this in mind, and the incentive for continuous improvements, I set out to find a possible solution. In this post, I will describe what I found.

## Direnv

[Direnv](https://direnv.net/) allows you to load and unload environment variables based on what folder you currently are.

This sounds kind of dull right? But it can be quite powerful. Since the industry is pushing towards infrastructure as code more and more this is perfect. If the infrastructure is code, there should also be a git repository for it and a folder that we can use with direnv.

### Use cases

Let's say you are using Terraform you will probably have a directory for every environment.
Whenever you run `terraform apply` in one of these folders, Terraform will take care of applying to the right environment.
However, whenever you want to validate anything if things got applied correctly like a deployment on Kubernetes or an S3 bucket on AWS, you have to target the right environment. Well, remember what I said earlier about loading environment variables per folder. This is where we will use it when you enter the folder, direnv will load the env variables.
You can configure most CLI tools with environment variables, e.g. *KUBECONFIG*, *AWS_PROFILE*, ... we can leverage this to point our tools to the right environment.

You can also leverage direnv to build and deploy applications with [Heroku](https://www.heroku.com/). Since you also need to specify certain environment variables there to check or deploy applications. The token is unique per application so you could easily make direnv work with every Heroku repository by setting `HEROKU_API_KEY`.

Even when you are not using a tool like Terraform or Heroku, it's still possible you have a git repository that contains some config files or scripts for specific environments.

### How

You can find instructions on how to install direnv on their website [here](https://direnv.net/docs/installation.html).

For mac, it is straightforward if you have [homebrew](https://brew.sh/). Just run `brew install direnv` and then add `eval "$(direnv hook zsh)"` to your `~/.zshrc file` or `eval "$(direnv hook bash)"` to your ~/.bashrc file and source it or restart your shell.

Now you're ready to start using it! In the directory where you want direnv to control the environment variables, you need to create a `.envrc` file. Below you can find an example of this file.

```shell
export KUBECONFIG=~/.kube/development_config
export AWS_DEFAULT_REGION=eu-central-1
export AWS_PROFILE=development
```

This file will point `kubectl` to the development cluster and `aws` to the development profile with the eu-central-1 region. Since executing this file could be potentially harmful you need to let direnv know it can run it with `direnv allow` you will have to repeat this every time you make changes to the file in another editor. This is because direnv keeps a hash of the file to see if it has changed.
Another way to change the file contents is with `direnv edit` then you won't need to reallow the file.

Since the direnv will force you to reallow the file if anything has changed, this opens up an exciting opportunity. You could check in the file, so it gets shared with other team members. Then not everyone needs to configure it themselves, and new team members can use it easily. The security implications are low since the file will not be allowed to executed anymore once someone changes it.

Now, whenever you enter the folder, it will print the following:

![entering folder](/img/posts/environments/entering.png)

and when leaving it:

![leaving folder](/img/posts/environments/leaving.png)

After the `.envrc` file unloads, any overridden environment variables will restore themselves.

Now, if the file has changed and it is no longer allowed direnv will print the following if you enter the folder:

![blocked](/img/posts/environments/blocked.png)

## Conclusion

You can use direnv to efficiently couple the *infrastructure as code* folders with their respective environments to make fewer mistakes. It can also easily be shared between team members so everyone can benefit from it.
This way, everyone's config will be similar, and the chance on users' errors will also be lower. In a future blog post, I will elaborate even furth on how you can create some nifty stuff in combination with some other shell features.


