---
layout: post
title: "k8s: integrating existing components"
author: kris
header-img: "img/k8s-reverse-proxy/k8sbanner.png"
---
# k8s, setting up a reverse proxy

## Context
You might have switched to kubernetes lately, it's the hip thing to do. In order to avoid big bang migrations this can be a usefull technique to integrate your legacy infrastructure into your new k8s cluster. A website is just an example, it's not limited to http and it might as well be your database server, or an existing microservice. In this post I will demonstrate how you can reverse proxy existing services using ingress.

## Setup
K8s has some really nice concepts based on software development. People familiar with uncle Bob (Robert C. Martin) will know: "high level policy, low level details". K8s allows to define high level policy through their api and abstract it away from it's implementation.

### No abstractions: Straightforward proxying in nginx
Just getting down and dirty in this bare nginx exampte, the solution would look like this:

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

This creates a http server, listening on port 80 and routing us to a page with a Triple D and kubernetes logo. This works, but it's tightly coupled to nginx. Also, if you're on k8s you would just like to be able to find "tripled" when using service discovery. So we'Il use the api objects to define these concepts inside the cluster.

## In practice
### Prerequisites
A running kubernetes cluster, for demo purposes I'm using a minikube. This also maximizes reproducability.

`minikube start --cpus 2 --memory 4096`

Run `minikube dashboard` to get to the kubernetes dashboard. It should be empty.

Next, we'Il use helm to install nginx as our ingress implementation:
`helm init`
`helm install stable/nginx-ingress`

After that, it should look something like this:
![Helm installation output](/img/k8s-reverse-proxy/ingress.png)
![Dashboard after installation](/img/k8s-reverse-proxy/dashboard.png)

Browsing to [192.168.99.100](http://192.168.99.100) shows a 404. 
![Browsing to the ip should show a 404](/img/k8s-reverse-proxy/norule.png)

Note that this should theoretically work with any ingress implementation, traefik, caddy, haproxy, they just provide an implementation, we should expect the same behaviour.

### Service
A service is usually backed by a pod. That's the common case where k8s is managing your dockerized application. But it doesn't need to be. It can also be something outside your cluster, like an existing database. But nonetheless it can still be defined inside your cluster.

In thise case we're going to define an external ip as a service inside our cluster. The Magic is in the concept of the externalName, creating a DNS entry on our kubernetes hosts.
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

### Ingress
Ingress is described [here](https://kubernetes.io/docs/concepts/services-networking/ingress/) as:

`Ingress can provide load balancing, SSL termination and name-based virtual hosting.`

So this is what we want,  an incoming route that routes to our service, which is external to our cluster.  This is how it looks:
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

We're using the xip.io service as it's the easiest way to get a dns pointing to the minikube ip.

Now point your browser to: [tripled.192.168.99.100.xip.io](http://tripled.192.168.99.100.xip.io/) and you should see a page with a triple D and kubernetes logo.

![Final result](/img/k8s-reverse-proxy/proxyresult.png)

I hope you find this technique interesting and usefull in your kubernetes migrations.
