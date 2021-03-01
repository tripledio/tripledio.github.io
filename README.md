# Tripled Blog

This is the source of the website from Triple D. Here we write our blog posts.

## Render local with docker

You can run the site locally using docker after which you can browse to http://localhost:4000 to visit the generated web site.

### Generate normal site

First run will create and start the container "triple-D-blog"

 ```docker
 docker run --name=triple-D-blog -v "$PWD":/usr/src/app:delegated -v "$PWD"/_site:/_site -p 4000:4000 starefossen/github-pages
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
## Running with the jekyll image instead of github-pages
I got the impression this is running a lot smoother (ie no hypervisor process going nuts on your mac.)
```
docker run --name jekyll --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:3.8 jekyll serve --watch --drafts --incremental
```

## Creating blog posts

### Spotlights

The spotlight is the main image on top of your post. This image will need to be able to resize depending on the resolution and device of the client requesting the blog post. 
Logic for this is included, written down in the default.html file. 
You can just define the header-img variable but this will provide just one image for all the different sizes. 
For an example you can look at the images provided for the static pages under the directory spotlight.

The javascript in default.html will look for variable imgDir to find the spotlight directory. There it will then expect:

if min-width: 1024px

+ spotlight-desktop.jpg    : 1920 - 480px 24bit
+ spotlight-desktop_1x.jpg : 1920 - 480px 24bit
+ spotlight-desktop_2x.jpg : 3840 - 960px 24bit
+ spotlight-desktop_3x.jpg : 5670 - 1440px 24bit

if max-width: 768px

+ spotlight-mobile_1x.jpg : 788  - 480px 24 bit
+ spotlight-mobile_2x.jpg : 1576 - 960px 24 bit
+ spotlight-mobile_3x.jpg : 2364 - 1440px 24 bit

if min-width: 768px

+ spotlight-tablet_1x.jpg : 984  - 480px 24 bit
+ spotlight-tablet_2x.jpg : 1968 - 960px 24 bit
+ spotlight-tablet_3x.jpg : 2952 - 1444px 24 bit

## Sharing public documents

To make a document , accessible from our website. 

+ Add the document to our Public Team Google drive. Preferable in an immutable format like pdf.
+ Add a redirect markdown file to the **_docs** folder
    + The name of the file is the url path on our website
    + The content redirects to the shared file you want. 
