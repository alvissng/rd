const swiper = new Swiper('.swiper1', {
  observer: true,
  observeParents: true,
	 slidesPerView: 6,
      speed: 4000,
	
  // Optional parameters
  autoplay: {
        delay: 800,
        disableOnInteraction: false,
      },
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});

var swiper2 = new Swiper(".swiper2", {
		
      slidesPerView: 3,
      grid: {
        rows: 2,
		  fill:"row"
      },
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
	  navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  		},
});

$('input').on('change', function() {
  $('.rowcolor').toggleClass('chblue');
});
