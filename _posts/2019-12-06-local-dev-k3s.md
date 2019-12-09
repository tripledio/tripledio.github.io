---
layout: post
title: "Local development environment with k3s"
author: kris
tags: k3s, development, k8s
excerpt: Local development setups are sometimes hard. Especially if they differ from your production setup. Luckily, because of the k8s api, we are starting to see a ubiquitous language for software deployments that works *everywhere*.
hideLogo: true
spotlight:
  imgDir: /img/posts/k3s
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# Local development environment with k3s

Have you worked on projects where the project was setup using things like confluence pages, readme files, shell scripts (that don't work everywhere), dockers, docker-compose files. This while your production environment was possibly setup in a completely different way? Well, these days there are better options.

## k8s api's everywhere
One of the big strengths of k8s is it's (extensible) api. And the fact that it's pretty consistent, and certified, between clouds and distributions. While k8s is often associated with big heavy clusters, there's a small certified k8s distribution these days called [k3s](https://k3s.io). 

It can run the same workloads as your GKE, EKS or any other cloud managed kubernetes. You can use helm to spin up basically anything: your production database, a message broker or even other services. You might also be interested in getting a quicker feedback cycle for your docker/application builds when running locally.

This is a short demonstration of how quick and painless a local publish of your application can and should be. Hopefully this helps you to reduce accidental technical complexity (like a docker-compose file) and allows you to spend more time modeling and building things that add business value.

[![asciicast](https://asciinema.org/a/NJCPM7g3tFhrqmOsp1Cx0m4Aj.png)](https://asciinema.org/a/NJCPM7g3tFhrqmOsp1Cx0m4Aj)
