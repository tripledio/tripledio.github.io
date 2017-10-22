# Tripled Blog

Run locally with :

 ```
 docker run -v "$PWD":/usr/src/app -p 4000:4000 starefossen/github-pages
 ```
 
Override the run command so that the site is generated with drafts
 
 ```
 docker run -v "$PWD":/usr/src/app -p 4000:4000 starefossen/github-pages jekyll serve -d /_site --watch --force_polling -H 0.0.0.0 -P 4000 --drafts
 ```
 
Then browse to  http://localhost:4000 to visit the generated web site.