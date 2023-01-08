

var slideIndex2 = 1;
showSlides(slideIndex2);

setInterval(function() {
  plusSlides(1);
}, 2200);

function plusSlides(n) {
  showSlides(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
    var i;
    var slides2 = document.getElementsByClassName("slide3");
    if (n > slides2.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    slides2[slideIndex2-1].style.display = "block";  
  }