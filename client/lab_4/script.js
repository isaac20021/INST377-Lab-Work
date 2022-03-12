let slidePosition = 0;
let prevSlidePosition = 0;
const slides = document.querySelectorAll('carousel_item');
const totalSlides = slides.length;

document.
    querySelector('carousel_button--next')
    .addEventListener("click", function(){
        moveToNextSlide();
    });
document.
    querySelector('carousel_button--prev')
    .addEventListener("click", function(){
        moveToPrevSlide();
    });

function updateSlidePosition() {
    slides[prevSlidePosition].classList.remove('carousel_item--visible');
    slides[slidePosition].classList.add('carousel_item--visible');
}


/*
    function updateSlidePosition() {
        for (let slide of slides) {
          slide.classList.remove('carousel_item--visible');
          //slide.classList.add('carousel_item--hidden');
        }
        slides[slidePosition].classList.add('carousel_item--visible');
    }
*/
    function moveToNextSlide() {
        prevSlidePosition = slidePosition;

        //slidePosition = (slidePosition + 1) % (totalSlides - 1);
        
        if(slidePosition==totalSlides - 1){
            slidePosition = 0;
       }else {
           slidePosition++;
       }
       updateSlidePosition();
    }
    function moveToPrevSlide() {
        
        if(slidePosition==0){
            slidePosition = totalSlides-1;
       }else {
           slidePosition--;
       }
       updateSlidePosition();
    }
