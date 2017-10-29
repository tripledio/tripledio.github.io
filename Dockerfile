FROM starefossen/github-pages:latest

ADD . /usr/src/app/
## override cmd to run with drafts
CMD jekyll serve -d /_site --watch --force_polling -H 0.0.0.0 -P 4000 --drafts
