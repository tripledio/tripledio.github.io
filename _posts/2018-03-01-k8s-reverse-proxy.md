---
layout: post
title: "Connecting external applications with kubernetes"
author: kris
header-img: "img/k8s-reverse-proxy/k8sbanner.png"
---
# Connecting external applications with kubernetes

## Context
In this blog post I'll demonstrate how to make applications that are external to a [Kubernetes](https://kubernetes.io) (K8s) [^1] cluster available to the applications that are managed by K8s. This is useful for when we have started using Kubernetes to deploy and manage some your applications but not everything is managed at once. 

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

No let me demonstrate how can we achieve this.
  
## A practical example: ingress route to an external service
### Low level proxying using nginx
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

This creates an http server, listens on port 80 and proxies a page with a Triple D and kubernetes logo. This works, but it's tightly coupled to nginx. Also, if you're on k8s you would just like to be able to find "tripled" when using service discovery. So we'Il use the api objects to define these concepts inside the cluster.

### 1. Recreating this using k8s api's
#### Prerequisites
A running kubernetes cluster, for demo purposes I'm using a [minikube](https://github.com/kubernetes/minikube). 

`minikube start --cpus 2 --memory 4096`

Run `minikube dashboard` to get to the kubernetes dashboard. It should be empty.

### 2. Ingress
[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) provides load balancing, SSL termination and name-based virtual hosting. In this step we will install Nginx as our Ingress implementation by using [helm](https://helm.sh/), a package manager.

```
helm init
helm install stable/nginx-ingress
```

The result should look something like this:
![Helm installation output](/img/k8s-reverse-proxy/ingress.png)
![Dashboard after installation](/img/k8s-reverse-proxy/dashboard.png)

Browsing to [192.168.99.100](http://192.168.99.100) shows a 404. 
![Browsing to the ip should show a 404](/img/k8s-reverse-proxy/norule.png)

As Ingress is an API where we can specify a collection of rules that allow inbound connections to reach the cluster services. The solution should work with any ingress implementation like haproxy, traefik, caddy,...

### 3. ExternalName Service declaration
Using the externalName in our service declaration will create a dns entry in the cluster dns service.
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

### 4. Ingress Route: connecting the proxy to the service
We'Il create an incoming ingress that routes to our service, which is external to our cluster. 

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

The yaml snippets can be put in any file, demo.yaml, and then `kubectl apply -f demo.yaml` and it should deploy to your cluster. This will trigger a rewrite and reload of your ingress implementations configuration file.

We're using the xip.io service as it's the easiest way to get a dns pointing to the minikube ip.

Now point your browser to: [tripled.192.168.99.100.xip.io](http://tripled.192.168.99.100.xip.io/) and you should see a page with a triple D and kubernetes logo.

![Final result](/img/k8s-reverse-proxy/proxyresult.png)

I hope you find this technique interesting and useful in your kubernetes migrations. And while this might be a pretty synthetical example, you could easily use something like [fixer.io](http://fixer.io/) and use it as your local currency exchange microservice. Allowing you to easily replace it by your own implementation later on.

_**Footnotes**_

[^1] Kubernetes https://kubernetes.io
