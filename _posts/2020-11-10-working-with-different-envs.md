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

These days everyone can imagine a company where they have different environments, development, QA, staging, production, ... One of the hassles and dangers that this brings with itself is that you have to constantally switch between environments to check certain things and even in rare occasions deploy software.

assume zshell
infra as code

Why?

terraform -> different folder per environment
  aws -
  kubeconfig
heroku -> different heroku app per application


check in the file, repull and change needs reapproval -> security
share config with team, lower risks on changes
change look of shell in certain directories to make important envs clearer

Install -> 
Macos brew install other ways can be found here https://direnv.net/docs/installation.html
hook SHELL:
  Used to setup the shell hook

  

***

