---
layout: post
title: "k8s: integrating existing components"
author: kris
header-img: "img/k8s-reverse-proxy/k8sbanner.png"
---
# k8s: integrating existing components

## Context
You might have switched to kubernetes lately, it's the hip thing to do. In order to avoid big bang migrations we'Il discuss a technique to integrate your legacy infrastructure into your k8s cluster. It can be applied to an existing database, or reference a cloud service via cluster service discovery, rather than an absolute url.

K8s has some really nice concepts that map great to other software engineering concepts. People familiar with uncle Bob (Robert C. Martin) will know: "high level policy, low level details". K8s allows to define high level policy through their api and abstract it away from it's implementation.

Because we can define a high level service referencing a lowel level deployment, this is the most common case where the containers are managed by kubernetes. But it might as well be a DaemonSet, or as in this case, just specify an `ExternalName`.

### Mixed infrastructure
![Mixed infrastructure](/img/k8s-reverse-proxy/integration.png)

## A practical example: ingress route to an external service
### Low level proxying using nginx
Our example would look like this if we would just a native nginx configuration file.
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

### Recreating this using k8s api's
#### Prerequisites
A running kubernetes cluster, for demo purposes I'm using a minikube. 

`minikube start --cpus 2 --memory 4096`

Run `minikube dashboard` to get to the kubernetes dashboard. It should be empty.

Next, we'Il use helm, a package manager, to install nginx as our ingress implementation:
```
helm init
helm install stable/nginx-ingress
```

After that, it should look something like this:
![Helm installation output](/img/k8s-reverse-proxy/ingress.png)
![Dashboard after installation](/img/k8s-reverse-proxy/dashboard.png)

Browsing to [192.168.99.100](http://192.168.99.100) shows a 404. 
![Browsing to the ip should show a 404](/img/k8s-reverse-proxy/norule.png)

Note that this should theoretically work with any ingress implementation, traefik, caddy, haproxy, they just provide an implementation, we should expect the same behaviour.

### Service
Using the externalName in our service declaration will create a dns entry.
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

The yaml snippets can be put in any file, demo.yaml, and then `kubectl apply -f demo.yaml` and it should deploy to your cluster.

We're using the xip.io service as it's the easiest way to get a dns pointing to the minikube ip.

Now point your browser to: [tripled.192.168.99.100.xip.io](http://tripled.192.168.99.100.xip.io/) and you should see a page with a triple D and kubernetes logo.

![Final result](/img/k8s-reverse-proxy/proxyresult.png)

I hope you find this technique interesting and useful in your kubernetes migrations. And while this might be a pretty synthetical example, you could easily use something like [fixer.io](http://fixer.io/) and use it as your local currency exchange microservice. Allowing you to easily replace it by your own implementation later on.
