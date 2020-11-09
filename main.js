
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.backgroundColor = "#2c2c2c";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}

//Select element function

const selectElement = function (element) {
  return document.querySelector(element);
}

var menuToggler = selectElement('.menu-toggle');
var body = selectElement('body');

menuToggler.addEventListener('click', function (){
  body.classList.toggle('open');
});
