// change the theme settings, store in local storage
const toggleTheme = () => {
  const rootElem = document.body;
  let dataTheme = rootElem.getAttribute("data-theme"),
    newTheme;

  newTheme = dataTheme === "light" ? "dark" : "light";

  rootElem.setAttribute("data-theme", newTheme);

  var lightIcon = document.getElementById("light-icon");
  var darkIcon = document.getElementById("dark-icon");
  console.log(lightIcon);
  console.log(darkIcon);
  lightIcon
    ? (lightIcon.style.display = newTheme === "light" ? "none" : "block")
    : console.log("kight icon not here");
  darkIcon
    ? (darkIcon.style.display = newTheme === "light" ? "block" : "none")
    : console.log("dark icon doesnt exist");

  localStorage.setItem("theme", newTheme);
};

// remove the loader after the page loads
function removeLoader() {
  var loader = document.getElementById("loader-wrapper");
  var pageWrapper = document.getElementById("page-wrapper");
  console.log(loader);
  console.log(pageWrapper);
  setTimeout(() => {
    loader.classList.add("hide-loader-functionality");
    pageWrapper.classList.remove("hide-loader-functionality");
    document.body.classList.remove("no-scroll");
  }, 1000);
}

// on page load, call removeLoader function
window.addEventListener("load", removeLoader);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 30) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// copy email onclick
function copyEmail() {
  navigator.clipboard.writeText("nikki@nikkster.tech");
  var tooltip = document.getElementById("emailToolTip");
  tooltip.classList.remove("hide");
  tooltip.innerHTML = "Email Copied!";
  setTimeout(() => {
    tooltip.classList.add("hide");
  }, 3000);
}

function emailHover() {
  var tooltip = document.getElementById("emailToolTip");
  tooltip.classList.remove("hide");
  tooltip.innerHTML = "Copy to clipboard";
}

// project
function projHover(proj) {
  // identify project being hovered over
  var projName = "proj-" + proj;

  var all = document.querySelectorAll(".project-description");
  for (i = 0; i < all.length; i++) {
    // add hide to all projects
    !all[i].classList.contains("hide") ? all[i].classList.add("hide") : null;
    // remove hide from specific project
    all[i].classList.contains(projName)
      ? all[i].classList.remove("hide")
      : null;
  }
}

// appear on scroll
function appearOnScroll() {
  var appearItem = document.querySelectorAll(".appear-on-scroll");

  for (var i = 0; i < appearItem.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = appearItem[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      appearItem[i].classList.add("active");
    } else {
      appearItem[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", appearOnScroll);
