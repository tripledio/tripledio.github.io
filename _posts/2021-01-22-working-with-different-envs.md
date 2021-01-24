---
layout: post
title: "Dealing with different environments"
author: gert
tags: environments, devops
excerpt: Having to deal with different environment configurations on your pc can be a hassle and dangerous.
hideLogo: true
spotlight:
  imgDir: /img/posts/environments
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# Dealing with different environments

https://direnv.net/

These days everyone has known a company where they have different environments: development, QA, staging, production, ... One of the hassles and dangers that causes is that you have to constantly switch between environments to check certain things and in rare occasions modify the environments. The reason why I'm saying rare for modifications is that these should preferably happen through some sort of pipeline that has been tested on lower environments before it gets run against production.
Almost every ITer knows of some story of accidental deletes in environments where it should not happen. Let it be deleting secrets on the wrong kubernetes cluster or dropping the incorrect databases. Of course this never happens intentionally, may it be because of a lack of sleep or some sort of distraction.
In this post I wil describe a method I have discovered recently to help in avoiding all this.

## Dir Env

Dir Env allows you to load and unload environment variables based on what folder you are in. 
This sounds kind of dull right? But really it can be quite powerful. Since the industry is pushing towards infrastructure as code more and more this is perfect. Because if the infrastructure is code that means that there should also be a git repository for it and thus a folder where we can hook into.

### Use cases

Let's say you are using [terraform](https://www.terraform.io/) you will probably have a directory for every environment. Whenever you run `terraform apply` in one of these folders terraform will take care of applying to the correct environment.
However, whenever you want to validate anything if it was correctly created like a deployment on Kubernetes or an S3 bucket on aws you have to make sure you are targeting the correct environment. Well remember what I said earlier about loading env variables per folder. Well this is where we are going to use it, when you enter the folder for the environment, direnv will load the env variables.
Since most cli tools can be configured with environment variables eg. KUBECONFIG, AWS_PROFILE, ... we can leverage this to point our tools to the correct environment.

As another example it can also be used for applications that are build and deployed with heroku. Since you also need to specify certain environment variables there to check or deploy applications. The token is unique per application so you could easily make direnv work with every heroku repository by setting `HEROKU_API_KEY`.

Even when you are not using a tool like terraform or heroku it's still possible you have a git repository that contain some config files or scripts for certain environments.

### How

Instructions on how to install direnv can be found on their website [here](https://direnv.net/docs/installation.html).
For mac it is really easy if you have [homebrew](https://brew.sh/). Just run `brew install direnv` and then add `eval "$(direnv hook zsh)"` to your `~/.zshrc file` or `eval "$(direnv hook bash)"` to your ~/.bashrc file and source it or restart your shell.
Now you're ready to start using it! In the directory where you want direnv to control your env variables you just need to create a `.envrc` file. Below you can find an example of this file. 
```
export KUBECONFIG=~/.kube/development_config
export AWS_DEFAULT_REGION=eu-central-1
export AWS_PROFILE=development
```
This file will point `kubectl` to the development cluster and `aws` to the development profile with the eu-central-1 region. Since executing this file could be potentially harmful you need to let direnv know it can execute it with `direnv allow` you will have to repeat this everytime you make changes to the file in another editor, since direnv keeps a hash of the file to see if it has changed.
Another way to change the file contents is with `direnv edit` then you won't need to re-allow the file.
Since the direnv will force you to reallow the file if anything has changed this opens up an interesting opportunity. You could check in the file so it gets shared with other team members. Then not everyone needs to configure it themselves and new team members can use it easily. The security implications are low since the file will not be allowed to executed anymore once someone changes it.

Now whenever you enter the folder it will print the following: 

```
➜  environments git:(main) ✗ cd development
direnv: loading ~/Development/tripled/infra/environments/development/.envrc
direnv: export +AWS_PROFILE ~AWS_DEFAULT_REGION ~KUBECONFIG
```

and when leaving it: 
```
➜  development git:(main) ✗ cd ..
direnv: unloading
```
Now if the file has changed and it is no longer allowed direnv will print the following if you enter the folder:
```
➜  environments git:(INFRAEU-473) ✗ cd eu-development
direnv: error ~/Development/tripled/infra/environments/development/.envrc is blocked. Run `direnv allow` to approve its content
```

terraform -> different folder per environment
  aws -
  kubeconfig
heroku -> different heroku app per application

## Conclusion

You can use direnv to easily couple the infrastructure as code folders with their respective environments so less mistakes can be made. It can also easily be shared between team members so everyone can benefit from it.
This way everyone config will be really similar and the change on users errors there will also be lower. In a future blog post I will elaborate even furth on how you can create some nifty stuff in combination with some other shell features.

