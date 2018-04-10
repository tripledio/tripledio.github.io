/* INIT */

var clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true) {
        return 'touchstart';
    } else {
        return 'click';
    }
})();

/* NAVIGATION */

try {
    var nav = document.querySelector(".nav-list"),
        navBtn = document.querySelector(".nav-btn"),
        navOverlay = document.querySelector(".nav-overlay"),
        navIcon = navBtn.querySelector(".nav-btn .icon"),
        activeMenuItem = document.querySelectorAll("#main-nav nav .nav-list ul li a[href='"+window.location.pathname+"']")[0];

    // Add active class
    (activeMenuItem) ? activeMenuItem.classList.add('active') : '';

    navBtn.addEventListener(clickEvent, function () {
        toggleMobileMenu();
    });

    function toggleMobileMenu() {
        document.body.classList.toggle("nav-toggled");
        document.body.classList.toggle("p-fixed");
        nav.classList.toggle("open");
        navIcon.classList.toggle("active");
    }

    function closeMobileMenu() {
        document.body.classList.remove("nav-toggled","p-fixed");
        nav.classList.remove("open");
        navIcon.classList.remove("active");
    }

    var subcatBtn = nav.querySelectorAll(".nav-list ul a i");

    for(var i = 0; i < subcatBtn.length; i++) {
        subcatBtn[i].addEventListener(clickEvent, function(e){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        });
    }

} catch(error) {
    console.error(error);
}

/* SLIDER */

try {
    var sliders = document.querySelectorAll(".slider");

    [].forEach.call(sliders, function(sl) {

        var slides = sl.querySelectorAll(".slide"),
            sliderNav = sl.querySelector(".slider-nav"),
            sliderNext = sl.querySelector(".slider-next"),
            sliderPrev = sl.querySelector(".slider-prev"),
            index = 0;

        /* Create nav */

        for (var i = 0; i < slides.length; i++) {
            var cls = "";

            i == 0 ? cls = "active" : cls = cls;

            var dot = document.createElement("span");
            dot.className = cls;
            dot.dataset.index = i;
            dot.addEventListener("click", function () {
                slideTo(this.dataset.index, this)
            });

            sliderNav.appendChild(dot);
        }

        /* Slide function */

        function slideTo(position, el) {
            index = position;
            var nav = sliderNav.querySelectorAll("span");

            for (i = 0; i < slides.length; i++) {
                nav[i].classList.remove("active");
                slides[i].style.transform = "translate(-" + index + "00%, 0)";
            }

            el.classList.add("active");
        }

        /* Next and Prev */

        function nextSlide() {
            index++;

            if(index > slides.length - 1) index = 0;
            slideTo(index, sliderNav.querySelectorAll("span")[index]);
        }

        function prevSlide() {
            index--;

            if(index < 0) index = slides.length - 1;
            slideTo(index, sliderNav.querySelectorAll("span")[index]);
        }

        sliderNext.addEventListener(clickEvent, function () { nextSlide() });
        sliderPrev.addEventListener(clickEvent, function () { prevSlide() });

        /* Timer */

        if(sl.classList.contains("timer")) {
            var slideTimer = sl.dataset.timer,
                slideInterval = setInterval(nextSlide, slideTimer);

            sl.addEventListener("mouseleave", function(e) {
                slideInterval = setInterval(nextSlide, slideTimer);
            }, false);

            sl.addEventListener("mouseover", function(e) {
                clearInterval(slideInterval);
            }, false);
        }

        /* Swipe */

        var origin = void 0;

        sl.addEventListener("touchstart", function(event) {
            origin = event.touches[0].clientX;
        });

        sl.addEventListener("touchend", function(event) {
            var end = event.changedTouches[0].clientX;
            origin > end + 60 ? nextSlide() : origin < end - 60 && prevSlide();
        });
    });
} catch(error) {
    console.error(error);
}

/* DEBUG */

function log(smth) {
    console.log(smth);
}

function debug(content) {
    var debugArea = document.createElement("div");
    debugArea.textContent = content;
    debugArea.classList.add("debug");
    document.body.appendChild(debugArea);
}
