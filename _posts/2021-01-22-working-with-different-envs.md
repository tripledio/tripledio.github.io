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

As DevOps, this brings some hassles and dangers for us because we often need to switch frequently between the different environments to check certain things and on rare occasions, modify those environments. I'm saying on "rare occasions" for modifications because modifications should preferably happen through some pipeline that is tested on lower environments before it gets to run against production. As a rule, we want to avoid manual interventions as much as possible.

Almost every ITer knows a story of accidental deletes in environments that should not have happened. Let it be deleting secrets on the wrong [Kubernetes](https://kubernetes.io/) cluster or [Terraform](https://www.Terraform.io/) destroy. Caused by a lack of sleep, a moment of inattentiveness or some distraction. The consequences can be grave.

So with this in mind, and the incentive for continuous improvements, I set out to find a possible solution. In this post, I will describe what I found as a possible solution to make handling multiple environments less error prone.

## Direnv

[Direnv](https://direnv.net/) is a shell extension for unix like operating systems that allows you to load and unload environment variables based on what folder you currently are.

This sounds kind of dull right? But it can be quite powerful. Since the industry is pushing towards **infrastructure as code** more and more this is a perfect fit. If the infrastructure is code, there should also be a git repository containing that code and thus a folder that we can use together with direnv.

### Use cases

Let's say you are using Terraform, then you will probably have a directory for every environment.
Whenever you run `terraform apply` in one of these folders, Terraform will take care of applying it's changes to the correct environment.
However, whenever you want to validate anything, like a deployment on Kubernetes or an S3 bucket on AWS, you have to target the right environment. Well, remember what I said earlier about loading environment variables per folder? This is where Direnv comes into play. We will use Direnv so when we enter a folder, direnv will automatically load the env variables bound to that folder. You can configure most CLI tools with environment variables, e.g. *KUBECONFIG*, *AWS_PROFILE*, ... Now we can leverage this to point our tools automatically to the right environment.

You can also leverage direnv to build and deploy applications with [Heroku](https://www.heroku.com/). There you also need to specify certain environment variables to check or deploy applications. The Heroku token is unique per application, so you could easily make direnv work with every Heroku repository by setting `HEROKU_API_KEY`.

Even when you are not using a tool like Terraform or Heroku, it's still likely to have a git repository that contains some config files or scripts for specific environments.

### How

You can find instructions on how to install direnv on their website [here](https://direnv.net/docs/installation.html).

For mac, it is straightforward if you have [homebrew](https://brew.sh/). Just run `brew install direnv` and then add `eval "$(direnv hook zsh)"` to your `~/.zshrc file` or `eval "$(direnv hook bash)"` to your ~/.bashrc file and source it or restart your shell.

Now you're ready to start using it! In the directory where you want direnv to control the environment variables, you need to create a `.envrc` file. Below you can find an example of an `.envrc` file.

```shell
export KUBECONFIG=~/.kube/development_config
export AWS_DEFAULT_REGION=eu-central-1
export AWS_PROFILE=development
```

*example `.envrc` file*

This file will point `kubectl` to the development cluster and `aws` to the development profile with the eu-central-1 region. Since executing this file could be potentially harmful you need to let direnv know it can run it with `direnv allow` you will have to repeat this every time you make changes to the file in another editor. This is because direnv keeps a hash of the file to see if it has changed.
Another way to change the file contents is with `direnv edit` then you won't need to reallow the file.

Since the direnv will force you to reallow the file if anything has changed, this opens up an exciting opportunity. You could check in the file, so it gets shared with other team members. Then not everyone needs to configure it themselves, and new team members can use it easily. The security implications are low since the file will not be allowed to execute anymore once someone has changed it.

Now, whenever you enter the folder, it will print the following:

![entering folder](/img/posts/environments/entering.png)

and when leaving it:

![leaving folder](/img/posts/environments/leaving.png)

After the `.envrc` file unloads, any overridden environment variables will restore themselves.

Now, if the file has changed and it is no longer allowed, then direnv will print the following message if you enter the folder:

![blocked](/img/posts/environments/blocked.png)

## Conclusion

You can use direnv to efficiently couple the *infrastructure as code* folders with their respective environments to make fewer mistakes. It can also easily be shared between team members so everyone can benefit from it.
This way, everyone's config will be similar, and the chance on users' errors will also be lower. In a future blog post, I will elaborate even further on how you can create some nifty stuff in combination with some other shell features.


