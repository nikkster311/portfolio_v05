// do not display icon linking to current page
function detectPage() {
  var index = document.getElementById("index-page-body");
  var hireme = document.getElementById("hire-me-page-body");
  var contact = document.getElementById("contact-page-body");
  var pricing = document.getElementById("pricing-page-body");
  if (index) {
    document.getElementById("home-btn-sidenav").style.display = "none";
    document.getElementById("yelp-btn").style.display = "none";
    document.getElementById("gmb-btn").style.display = "none";
  }
  if (hireme) {
    document.getElementById("home-btn-sidenav").style.display = "none";
    document.getElementById("hire-me-btn-sidenav").style.display = "none";
    document.getElementById("resume-icon").style.display = "none";
    document.getElementById("githubIcon").style.display = "none";
    document.getElementById("envelopeIcon").style.display = "none";
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
    document.getElementById("envelopeIcon").style.display = "none";
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
<a href="https://nikkster.tech/hireme" id="hire-me-btn-sidenav" class="hire-me"><i class="fa-solid fa-handshake"></i></a>\
  <a class="hire-me" id="home-btn-sidenav" href="https://nikkster.tech"><i class="fa-solid fa-house-chimney-window"></i></a>\
  <a target="_blank" rel="noopener noreferrer" id="gmb-btn" href="https://g.page/r/Ce1COo5Y3bKHEBM">\
  <i class="fa-brands fa-google"></i></a>\
  <a target="_blank" rel="noopener noreferrer" id="yelp-btn" href="https://www.yelp.com/biz/nikkster-tech-marysville">\
  <i class="fa-brands fa-yelp"></i></a>\
<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicole-hermann/">\
<i class="fa-brands fa-linkedin"></i></a>\
<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nikksterDotTech"><i class="fa-brands fa-twitter"></i></a>\
<a id="resume-icon" class="resumeSocial" target="_blank" rel="noopener noreferrer" href="./Hermann_resume.pdf" download="Hermann_resume">\
<i class="fa-solid fa-file"></i>\
  <span class="socialsTooltiptext" id="resumeToolTip">\
    Download my resume\
  </span></a>\
<a target="_blank" rel="noopener noreferrer" href="https://github.com/nikkster311"><i class="fa-brands fa-github" id="githubIcon"></i></a>\
<a href="mailto:nikki@nikkster.tech"><i id="envelopeIcon" class="fa-regular fa-envelope"></i></a>\
</div>\
'
);

window.addEventListener("load", detectPage);
