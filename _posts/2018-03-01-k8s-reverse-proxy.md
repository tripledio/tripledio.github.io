---
layout: post
title: "Bridging legacy and k8s"
author: kris
header-img: "img/k8s-reverse-proxy/k8sbanner.png"
---
# Bridging legacy and k8s

## Context
Recently you may have started using Kubernetes to deploy and manage some your applications. After all, next to being the hip thing to do, it is a great way to abstract away a lot of operational requirements. 

But unless we want to end up with a big *BANG* we typically want to avoid a big bang migration from the old landscape to the new K8s orchestrated landscape. That is why in this post I will demonstrate a possible technique to gradually migrate from the old into the new by allowing the new k8s managed applications to connect with the old non-orchestrated applications.

K8s has some really nice concepts that map great to other software engineering concepts. People familiar with uncle Bob (Robert C. Martin) will know: "high level policy, low level details". K8s allows us to define a high level policy through their api and abstract it away from it's implementation.

It's this service abstraction that we will use to integrate our legacy component. Although a service usually represents a deployment where containers are managed by k8s, we will just use an `ExternalName` to reference an existing component rather than a pod or a daemonset.

### Mixed infrastructure
![Mixed infrastructure](/img/k8s-reverse-proxy/integration.png)

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
