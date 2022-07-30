var slideshowCounter = 0;
var slides = ["./images/slide1.jpg","./images/slide4.jpg","./images/slide5.jpg","./images/slide6.jpg","./images/slide7.jpg","./images/slide8.jpg"]
const slide = document.querySelector('#slideshowimg');
const leftbtn = document.querySelector('#left');
leftbtn.addEventListener('click',leftShift);
function leftShift()
{
    slideshowCounter = Math.abs(slideshowCounter-1)%slides.length;
    slide.src=slides[slideshowCounter];
}

const rightbtn = document.querySelector('#right');
rightbtn.addEventListener('click',rightShift);
function rightShift()
{
    slideshowCounter = (slideshowCounter+1)%slides.length;
    slide.src=slides[slideshowCounter];
    
}

setTimeout(slideshow,3000);
function slideshow()
{
    slideshowCounter = (slideshowCounter+1)%slides.length;
    slide.src=slides[slideshowCounter];
    setTimeout(slideshow,5000);
}