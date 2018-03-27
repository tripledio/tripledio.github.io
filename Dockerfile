FROM starefossen/github-pages:latest

EXPOSE 5000

ADD . /usr/src/app/
## override cmd to run with drafts
CMD jekyll serve -d /_site -H 0.0.0.0 -P 5000 --drafts
