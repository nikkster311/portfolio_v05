var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    console.log(this);
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
