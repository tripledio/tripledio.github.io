---
layout: page
title: "Contact us"
exclude: true

spotlight:
  imgDir: /img/spotlight/contact
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false

intro:
  title: Contact us
  text: If you could use our help, let us know. Our normal base of operation in Belgium is Ghent, Antwerp, Brussels triangle. But we are open to any interesting proposals.

testimonials:
  - quote: quote1
    person: person1
  - quote: quote2
    person: person2
  - quote: quote3
  - quote: quote4
    person: person4
  - quote: quote5
    person: person5
---

<div class="col-12 col-md-10 col-lg-8 offset-0 offset-md-1 offset-lg-2 pb-2">
    <p class="bg-green text-white p-2">
        Thank you. Your message has been sent.<br />
        We will contact you as soon as possible.
    </p>
</div>

<div class="col-12 col-md-10 col-lg-8 offset-0 offset-md-1 offset-lg-2 pb-4 pb-md-10">
    <form class="row" _lpchecked="1" action="https://formspree.io/info@tripled.io" method="POST">
        <div class="form-group col-12 col-md-6 mb-2 mb-md-3">
            <label for="name">Name <span>*</span></label>
            <input type="text" class="form-control" id="name" placeholder="Name *" name="name" value="" required="">
        </div>
        <div class="form-group col-12 col-md-6 mb-2 mb-md-3">
            <label for="email">Email <span>*</span></label>
            <input type="email" class="form-control" id="email" placeholder="Email *" name="_replyto" value="" required="">
        </div>
        <div class="form-group col-12 mb-2 mb-md-3">
            <label for="phone">Phone <span>*</span></label>
            <input type="tel" class="form-control" id="phone" placeholder="Phone *" name="phone" value="" required="">
        </div>
        <div class="form-group col-12 mb-2 mb-md-3">
            <label for="message">Message <span>*</span></label>
            <textarea name="message" id="message" rows="6" placeholder="Message *" name="message" required=""></textarea>
        </div>
        <div class="form-group col-12">
            <input type="hidden" name="_subject" value="New form submission!" />
            <input type="hidden" name="_next" value="/contact-thanks" />
            <!--<input type="hidden" name="_cc" value="example@slack.com" />-->
            <input type="text" name="_gotcha" style="display:none" />
            <input type="submit" class="btn btn-primary" value="Send" />
        </div>
    </form>
</div>