---
layout: post--new
title: "Connecting legacy to kubernetes"
author: kris
tags: Kubernetes, DevOps
hideLogo: true
header-img: "img/k8s-reverse-proxy/k8sbanner.png"
excerpt: How to connected external applications to Kubernetes cluster.
---
# Connecting external applications with kubernetes

## Context
In this blog post I'll demonstrate how to make applications that are external to a [Kubernetes](https://kubernetes.io)  [^1] (K8s) cluster available to the applications that are managed by K8s. This is useful for when we have started using Kubernetes to deploy and manage some your applications but not everything is managed at once. 

Because unless you want to end up with a big *BANG*, you typically want to avoid a big bang. So doing a steady migration from the old landscape to the new K8s orchestrated landscape is often the prudent approach. That is why in this post I will demonstrate a  technique to gradually migrate from the old into the new by allowing the new k8s managed applications to connect with the old non-orchestrated applications.

In this post i'll not delve into what K8s is and how to get it up and running. There is plenty of information about that out there. But you should be able to follow without an in depth K8s knowledge. And who knows, after this post you might want to give it a closer look.

### The goal: Mixed infrastructure

So what we are trying to achieve is a mixed infrastructure. Let K8s managed services use external applications, databases... without the managed services being impacted by this.
 
The reason that all of this is possible with K8s is why we at Triple D think that K8s is a useful technology to have mastered. Besides being the hip thing to do at the moment(2017-2018), it is also a great way to abstract away a lot of operational requirements.

People familiar with uncle Bob (Robert C. Martin) will know his mantra: "high level policy, low level details". K8s allows us to define a high level policy through their api that abstracts away the low level implementation details.

It's precisely this K8s service abstraction capability that i will use to integrate our external 'legacy' application. Although in K8s a service usually represents a deployment where containers are managed by k8s. In K8s i will just use an `ExternalName` to reference an existing unorchestrated external component rather than a K8s pod or daemonset.

 
Below is a simple example of how this will look.

![Mixed infrastructure](/img/k8s-reverse-proxy/integration.png)

Here we have MyFancyService that runs inside our K8s cluster. MyFancyService uses the K8s managed service DBService and CurrencyExchangeService. It has no idea were these two services exists, nor should it. That's K8s job. It just asks for a link the these services. In K8s these two services are registered but they refer to two applications/services outside of the K8s cluster. MyFancyService doesn't need to know about this at all. If somewhere in the future we would decide to bring one of these external applications inside K8s as a managed service we are free to do so with minimal effort. MyFancyService is not impacted by this at all.
  


## The usecase


I will now demonstrate how we can achieve our mixed infrastructure goal. As an example of an external service we will take a simple http server serving a page with the Triple D and kubernetes logo. This external service runs on 81.82.200.36 and we would like to be able to access it as if it was a locally deployed application.

## Non K8s solution

As a non K8s solution we can choose to do a low level proxying of the external service using nginx as the k8s ingress controller. 

### Low level proxying using nginx [^2]


Our example would look like this if we would just use a native nginx configuration file.
```
http {
    upstream tripled {
        server 81.82.200.36;
    }

    server {
        listen 80;

        location / {
            proxy_pass https://tripled;
        }
    }
}
```

This creates an http server, listens on port 80 and proxies a page with a Triple D and Kubernetes logo. We are now able to access an external resource like it was a local resource. However it is a 'solution' that is tightly coupled to nginx. The local proxy doesn't have the advantages that come with K8s. Our k8s managed services are still unable to find the service. You would just like to be able to find "tripled" when using service discovery inside K8s cluster. 

## Connecting the external service to K8s

We will now make the external Http server available to k8s by using the K8s api objects to define these concepts inside the K8s cluster. 

### 1. Setup minikube

For the demo to work we require a running kubernetes cluster. For demo purposes I'm using a [minikube](https://github.com/kubernetes/minikube) [^3] . 

`minikube start --cpus 2 --memory 4096`

Run `minikube dashboard` to get to the kubernetes dashboard. It should be empty.

### 2. Install Ingress implementation

One of the K8s API's is [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) [^4]. It  provides load balancing, SSL termination and name-based virtual hosting. Ingress is an API where we can specify a collection of rules that allow inbound connections to reach the cluster services.  

In this step we will install Nginx as our Ingress implementation. But we could have chosen any one of the ingress implementation like haproxy, traefik, caddy,...

We will install nginx as ingress impl in K8s by by using [helm](https://helm.sh/) [^5] , a K8s package manager.

```
helm init
helm install stable/nginx-ingress
```

The result should look something like this:
![Helm installation output](/img/k8s-reverse-proxy/ingress.png)
![Dashboard after installation](/img/k8s-reverse-proxy/dashboard.png)

Browsing to [192.168.99.100](http://192.168.99.100) shows a 404. 
![Browsing to the ip should show a 404](/img/k8s-reverse-proxy/norule.png)


### 3. Declare Service through ExternalName 

Now we will declare a new service tripled-svc in K8s. K8s will use the externalName in our service declaration to create a dns entry in the cluster dns service.

```
apiVersion: v1
kind: Service
metadata:
  name: tripled-svc
  namespace: default
spec:
  externalName: 81.82.200.36
  type: ExternalName
  ports:
  - name: http
    port: 80
 ```
 
Basically we have defined a new service inside K8s that knows it exists external.

### 4. Connecting the proxy to our K8s service

We'Il create an incoming ingress in K8s that routes to our newly created K8s service, which is external to our cluster. This will make the service available from K8s. Upon which K8s will then redirect it through the proxy to the external service.

We'Il use a hostname `tripled.192.168.99.100.xip.io` that resolves to the ip of our minikube. And then tell it to take us to the `tripled-svc` service.

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: tripled-ing
  namespace: default
spec:
  rules:
  - host: tripled.192.168.99.100.xip.io
    http:
      paths:
      - backend:
          serviceName: tripled-svc
          servicePort: 80
        path: /
```

The yaml snippets can be put in any file, we'll use demo.yaml, and then run 
```kubectl apply -f demo.yaml``` 

which deploys it to your cluster. This will trigger a rewrite and reload of your ingress controller's configuration file.

We're using the [xip.io](http://xip.io) [^6] service to provide us with a DNS entry as it's the easiest way to get a public dns lookup pointing to the minikube ip.

Now point your browser to: [tripled.192.168.99.100.xip.io](http://tripled.192.168.99.100.xip.io/) and you should see a page with a triple D and kubernetes logo.

![Final result](/img/k8s-reverse-proxy/proxyresult.png)

I hope you find this technique interesting and useful in your kubernetes migrations. And while this might be a pretty synthetical example, you could easily use something like [fixer.io](http://fixer.io/) [^7] and use it as your local currency exchange microservice. Allowing you to easily replace it by your own implementation later on.

**References**

[^1]: _[Kubernetes](https://kubernetes.io): an open-source system for automating deployment, scaling, and management of containerized applications_

[^2]: _[NGINX](https://www.nginx.com) is a free, open-source, high-performance HTTP server and reverse proxy_

[^3]: _[minikube](https://github.com/kubernetes/minikube)_  a tool that makes it easy to run Kubernetes locally.

[^4]: _[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)_ is  a K8s API for a collection of rules that allow inbound connections to reach the cluster services. 
 
[^5]: _[helm](https://helm.sh/)_  is a K8s package manager

[^6]: _[xip.io](http://xip.io)_  is a ervice that provides wildcard DNS for any IP address

[^7]: [fixer.io](http://fixer.io/) api for currency exchange
