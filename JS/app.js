/*
    Este es nuestro archivo de JavaScript
*/
var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 6000,  //==============reduci tiempo de velocidad -cynthia
  wrap: true
});

