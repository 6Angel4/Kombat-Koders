/*
    Este es nuestro archivo de JavaScript
*/
var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
});