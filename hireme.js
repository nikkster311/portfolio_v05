// typewriter effect

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 200;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);

  // FAQ
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      var symbol = this.getElementsByClassName("accordion-symbol");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        symbol[0].innerHTML = "+";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        symbol[0].innerHTML = "-";
      }
    });
  }
};

// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let slideshowId = document.getElementById("slideshowSection");

  slideshowId.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slideshow", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active-slideshow";
}

// change the display of the service card who's pricing is displayed
function changeActiveCard(card) {
  cardId = "serviceCard" + card;
  allCards = document.getElementsByClassName("card");
  clickedSlide = document.getElementById(cardId);

  // remove active class
  for (i = 0; i < allCards.length; i++) {
    if (allCards[i].classList.contains("service-active")) {
      allCards[i].classList.remove("service-active");
      allCards[i].getElementsByClassName("btn")[0].textContent = "See Pricing";
    }
  }

  // add active class to correct
  clickedSlide.classList.add("service-active");
  clickedSlide.getElementsByClassName("btn")[0].textContent = "Pricing Below";
}
