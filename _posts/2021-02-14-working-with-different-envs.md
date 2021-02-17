---
layout: post
title: "Working with different environments"
author: gert
tags: environments, devops
excerpt: Having to work with different environments configs on your pc can be a hassle and dangerous. Let's explore an option that will improve your experience with it.
hideLogo: true
spotlight:
  imgDir: /img/posts/environments
  imgAlt: "Example of Direnv output"
  logoAnimation: false
---

Today, most software engineers will have to work with different environments. These could be environments from separate companies, own testing environments, or the typical examples in one company: development, QA, production.

All these different environments bring some hassles and dangers because we often need to switch between these to check certain things and on rare occasions, modify them.
I'm saying on "rare occasions" because modifications should preferably happen through some pipeline and not from a developer's machine.
As a rule, we want to avoid manual interventions as much as possible. Because almost every ITer knows a story of accidental deletes in environments. 
Let it be deleting secrets on the wrong [Kubernetes](https://kubernetes.io/) cluster or [Terraform](https://www.Terraform.io/) destroy.
Of course, this never happens deliberately, possibly because of a lack of sleep or some distraction.

So with this in mind, and the incentive for continuous improvements, I set out to find a possible solution.
This post will describe what I found to make handling multiple environments easier.

## Direnv

[Direnv](https://Direnv.net/) is a shell extension for Unix like operating systems that allows you to load and unload environment variables based on your current directory.
This functionality sounds kind of dull right? But it can be quite powerful. Since the industry is pushing towards **infrastructure as code**, this is a perfect fit.
If the infrastructure is code, there should also be a git repository containing that code and a folder that we can use together with Direnv.

### Use cases

#### Referencing environments

Let's say you are using Terraform. Then you will probably have a directory for every environment.
Whenever you run `terraform apply` in one of these folders, Terraform will apply its state changes to the correct environment.
However, whenever you want to validate anything, like a deployment on Kubernetes or an S3 bucket on AWS, you still have to target the right environment.
Well, remember what I said earlier about loading environment variables per folder? Here is where Direnv comes into play. W
e will use Direnv so when we enter a folder, Direnv automatically loads the env variables bound to that folder. You can configure most CLI tools with environment variables, e.g. `KUBECONFIG, AWS_PROFILE`, ... Now we can leverage this to point our CLI tools to the right environment automatically.

You can also leverage Direnv to build and deploy applications with [Heroku](https://www.heroku.com/). There you also need to specify certain environment variables to check or deploy applications.
The Heroku token is unique per application, so you could easily make Direnv work with every Heroku repository by setting `HEROKU_API_KEY`.

Even when you are not using a tool like Terraform or Heroku, it's still likely to have a git repository that contains some config files or scripts for specific environments. Or you could make sure that the code repositories developers work in always point to the development environment.

#### Sharing
You can check in the Direnv configuration into source control, so it gets shared with other team members. Then not everyone needs to configure it themselves, and new team members can use it easily. The security implications are low since the file will not be allowed to execute once someone has changed it.

### How

You can find instructions on how to install Direnv on their website [here](https://Direnv.net/docs/installation.html).

For mac, it is straightforward if you have [homebrew](https://brew.sh/). Just run `brew install Direnv` and then add `eval "$(Direnv hook zsh)"` to your `~/.zshrc file` or `eval "$(Direnv hook bash)"` to your ~/.bashrc file and source it or restart your shell.

Now you're ready to start using it! In the directory where you want Direnv to control the environment variables, you need to create a `.envrc` file. Below you can find an example of a `.envrc` file.

```shell
export KUBECONFIG=~/.kube/development_config
export AWS_DEFAULT_REGION=eu-central-1
export AWS_PROFILE=development
```

*example `.envrc` file*

This file will point `kubectl` to the development cluster and `aws` to the development profile together with the `eu-central-1` region.
Since executing this file could be potentially harmful, you need to allow Direnv to run it with `Direnv allow` you will have to repeat this every time you make changes to the file in another editor. The way Direnv knows that a file is changed is because of a hash it keeps.
Another way to change the file contents is with `Direnv edit` then you won't need to reallow the file.

I referenced in the **use-cases** that you could put the configuration file into source control. The fact that you need to reallow the file whenever someone made changes is what makes it secure.

Now, whenever you enter the folder, it will print the following:

![entering folder](/img/posts/environments/entering.png)

and when leaving it:

![leaving folder](/img/posts/environments/leaving.png)

After the `.envrc` file unloads, any overridden environment variables will restore themselves.

Now, if the file has changed and it is no longer allowed, then Direnv will print the following message if you enter the folder:

![blocked](/img/posts/environments/blocked.png)

## Conclusion

You can use Direnv to efficiently couple the **infrastructure as code** folders with their respective environments to make fewer mistakes. Or make sure that your code repositories point to the correct **development environment** with the application's deployment.
It can also easily be shared between team members so everyone can benefit from it. This way, everyone's config will be similar, and the chance of users' errors will be lower.
In a future blog post, I will elaborate on how you can create some nifty stuff in combination with some other shell features.


