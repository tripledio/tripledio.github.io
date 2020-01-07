---
layout: post
title: "Local development environment with k3s"
author: kris
tags: k3s, development, k8s
excerpt: Setting up a local development can be complicated. Ideally they don't differ from your production setup. Luckily, thanks to the kubernetes api, we are starting to see a ubiquitous language for software deployments that works *everywhere*.
hideLogo: true
spotlight:
  imgDir: /img/posts/k3s
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# Local development environment with k3s

Have you worked on projects where in order to get the codebase running locally, you needed things like confluence pages, readme files, shell scripts (that don't work everywhere), dockers, docker-compose files. All of this while your production environment had a completely different setup? Well, fortunately for us, today  there are better options...

## K8s api's everywhere

One of the big strengths of [kubernetes](https://kubernetes.io) is it's (extensible) api. And the fact that it's pretty consistent, and certified, between clouds and distributions. While k8s is often associated with big heavy clusters, there's a small certified k8s distribution these days called [k3s](https://k3s.io). Kubernetes Light. 

K3S can run the same workloads as your [GKE](https://cloud.google.com/kubernetes-engine/), [EKS](https://aws.amazon.com/eks/) or any other cloud managed kubernetes. Within K3S you can use [Helm](https://helm.sh) to spin up basically anything: your production database, a message broker, other services... You might also be interested in getting a quicker feedback cycle for your docker/application builds when running locally.

## Demo time

Below you will find a short demonstration of how quick and painless a local publish of your application can and should be. 

[![asciicast](https://asciinema.org/a/NJCPM7g3tFhrqmOsp1Cx0m4Aj.png)](https://asciinema.org/a/NJCPM7g3tFhrqmOsp1Cx0m4Aj)

## Conclusion
Hopefully the above can help you to reduce accidental technical complexity, like a docker-compose file, and allows you to spend more time modeling things out and building things that really add business value.
