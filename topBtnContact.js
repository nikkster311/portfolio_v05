// do not display icon linking to current page
function detectPage() {
  var index = document.getElementById("index-page-body");
  var hireme = document.getElementById("hire-me-page-body");
  var contact = document.getElementById("contact-page-body");
  var pricing = document.getElementById("pricing-page-body");
  var workpage = document.getElementById("work-page-page-body");
  var about = document.getElementById("about-page-body");
  // var mywork = documemnt.getElementById("my-work-page-body");
  if (index) {
    document.getElementById("home-btn-sidenav").style.display = "none";
    document.getElementById("yelp-btn").style.display = "none";
    document.getElementById("google-my-business-btn").style.display = "none";
    document.getElementById("insta-btn").style.display = "none";
  }
  if (hireme || workpage || about) {
    // mywork goes in the line above, if it gets working
    document.getElementById("home-btn-sidenav").style.display = "none";
    document.getElementById("hire-me-btn-sidenav").style.display = "none";
    document.getElementById("resume-icon").style.display = "none";
    document.getElementById("githubIcon").style.display = "none";
  }
  if (contact) {
    document.getElementById("resume-icon").style.display = "none";
    document.getElementById("home-btn-sidenav").style.display = "none";
  }
  if (pricing) {
    document.getElementById("hire-me-btn-sidenav").style.display = "none";
    document.getElementById("home-btn-sidenav").style.display = "none";
    document.getElementById("resume-icon").style.display = "none";
    document.getElementById("githubIcon").style.display = "none";
  }
}

document.write(
  '<div class="rotate-email-container">\
<p onclick="copyEmail()" onmouseout="emailHover()" id="rotate-email">\
    <span class="tooltiptext" id="emailToolTip">\
        Copy to clipboard\
    </span>\
    nikki@nikkster.tech</p>\
</div>\
<button class="btn fixedBtn" onclick="topFunction()" id="topBtn" title="Go to top">Top</button>\
<div class="socials-container">\
  <a target="_blank" rel="noopener noreferrer" id="google-my-business-btn" href="https://g.page/r/Ce1COo5Y3bKHEBM">\
  <i class="fa-brands fa-google"></i></a>\
  <a target="_blank" rel="noopener noreferrer" id="yelp-btn" href="https://www.yelp.com/biz/nikkster-tech-marysville">\
  <i class="fa-brands fa-yelp"></i></a>\
              <a target="_blank" rel="noopener noreferrer" id="youtube-btn" href="https://www.youtube.com/@nikkstertech">\
            <i class="fa-brands fa-youtube"></i></a>\
<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicole-hermann/">\
<i class="fa-brands fa-linkedin"></i></a>\
<a target="_blank" rel="noopener noreferrer" id="insta-btn" href="https://instagram.com/nikkster.tech"><i class="fa-brands fa-instagram"></i></a>\
<a href="mailto:nikki@nikkster.tech"><i id="envelopeIcon" class="fa-regular fa-envelope"></i></a>\
</div>\
'
);

window.addEventListener("load", detectPage);
