// check local storage
let localS = localStorage.getItem("theme");
if (localS === "dark") {
  document.body.setAttribute("data-theme", "dark");
} else if (localS === "light") {
  document.body.setAttribute("data-theme", "light");
} else {
  document.body.setAttribute("data-theme", "green");
}
