let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 7000);
}
let wrapperMenu = document.querySelector(".wrapper-menu");
let timesClicked = 0;
wrapperMenu.onclick = function() {
  timesClicked++;

  if (timesClicked % 2 == 0) {
    document.getElementById("mySidenav").style.width = "0";
    wrapperMenu.classList.toggle("open");
    console.log("close");
  } else {
    wrapperMenu.classList.toggle("open");
    document.getElementById("mySidenav").style.width = "50%";
    console.log("open");
  }
};
