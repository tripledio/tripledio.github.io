# Tripled Blog

This is the source of the website from Triple D. Here we write our blog posts.

## Render local with docker

You can run the site locally using docker after which you can browse to http://localhost:4000 to visit the generated web site.

### Generate normal site

First run will create and start the container "triple-D-blog"

 ```docker
 docker run --name=triple-D-blog -v "$PWD":/usr/src/app -v "$PWD"/_site:/_site -p 4000:4000 starefossen/github-pages
 ```
 
The web site will be generated under the _site folder. That is the folder which is then hosted. 
Afterwards you can simply restart the container with the case sensitive container name
 
```docker
docker start triple-D-blog

``` 
### Generate site with drafts
 
If you like to start writing posts as a draft, avoiding the risk that they are rendered as post before they are finished, you simply start your post in the _drafts folder. 

To let jekyll generate the site with the drafts included, we must specify the drafts option. For this we need to override the docker run command so that the site is generated with drafts.


Create and start *triple-D-blog-with-drafts* container

 ```docker
 docker run --name=triple-D-blog-with-drafts -v "$PWD":/usr/src/app -v "$PWD"/_site:/_site -p 4000:4000 starefossen/github-pages jekyll serve -d /_site --watch --force_polling -H 0.0.0.0 -P 4000 --drafts
 ```
 The web site will be generated under the _site folder. That is the folder which is then hosted. 
 
 Afterwards you can simply restart the container with the case sensitive container name. 
 
## Run gitlab build locally

```docker
docker run gitlab/gitlab-runner:latest
``` 
 
