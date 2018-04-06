---
layout: post--new
title: "Example of a draft"
author: guido
header-img: "img/about-bg.jpg"
tags: java, software
excerpt: This is just an example of a draft post.
---
# Working with drafts

Drafts are posts without a date. They’re posts you’re still working on and don’t want to publish yet. To get up and running with drafts, create a _drafts folder in your site’s root (as described in the site structure section) and create your first draft:

To preview your site with drafts, simply run jekyll serve or jekyll build with the --drafts switch. Each will be assigned the value modification time of the draft file for its date, and thus you will see currently edited drafts as the latest posts.


https://jekyllrb.com/docs/drafts/

## Make up, layout examples

| We don't want to be a big company We want to be a _professional_ company.|
| :-------------|
||

:e-mail: info@tripled.io
{{ page.title | smartify }}

Length {{ page.content | number_of_words }} words