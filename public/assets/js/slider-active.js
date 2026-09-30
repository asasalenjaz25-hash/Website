
/***************************************************
==================== JS INDEX ======================
****************************************************

01. Banner Js
02. Home One Testimonial Js
03. Brand Slider Js
04. Home One Maquee Js
05. Home three About Js
06. Project Three Js
07. Home Three Testimonial Js
08. Home Four service Js
09. Home Four Team Js
10. Home Four Project Js
11. Home Four Testimonial Js
12. Product Details Js
13. Home two testimonial Js
14. Home five testimonial Js
15. Home six testimonial Js
16. Home Eight Brand Js
17. Home Eight Project Js
18. Home Eight Testimonial Js
19. Home Eight testimonial Img Js
20. Home Nine Banner Js
21. Home Nine Testimonial Js


****************************************************/


(function ($) {
    "use strict";


	////////////////////////////////////////////////////
	// 01. Banner Js
	const bannerSlide = new Swiper('banner-active', {
		speed:1500,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		effect:'fade',
		breakpoints: {
			'1600': {
				slidesPerView:1,
			},
			'1400': {
				slidesPerView:1,
			},
			'1200': {
				slidesPerView:1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
		pagination: {
			el: ".banner-dots",
			clickable:true,
		},

	});




	////////////////////////////////////////////////////
	// 02. Home One Testimonial Js
    var slider = new Swiper('.testimonial-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3500,
        autoplay: true,
		breakpoints: {
			'1600': {
				slidesPerView:2,
			},
			'1400': {
				slidesPerView:2,
			},
			'1200': {
				slidesPerView:2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
			a11y: false,
		},
        // Navigation arrows
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });

	if ($('.testi-slider1').length > 0) {
    const testiSlider1 = new Swiper(".testi-slider1", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".testimonial-eight-next",
            prevEl: "testimonial-eight-prev",
        },
    });
   }
 

	////////////////////////////////////////////////////
	// 03. Brand Slider Js
	var slider = new Swiper('.brand-slider-active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		centeredSlides: true,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});



	////////////////////////////////////////////////////
	// 04. Home One Maquee Js
    var slider = new Swiper('.maquee-active', {
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: true,
        speed: 15000,
		centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        breakpoints: {
            320: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 40,
            },
        },
    });





	////////////////////////////////////////////////////
	// 05. Home three About Js
    var slider = new Swiper('.about-three-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3500,
        autoplay: true,
		breakpoints: {
			'1600': {
				slidesPerView:5,
			},
			'1400': {
				slidesPerView:4,
			},
			'1200': {
				slidesPerView:3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1.5,
			},
			'0': {
				slidesPerView: 1,
			},
		},
    });




	////////////////////////////////////////////////////
	// 06. Project Three Js
	var slider = new Swiper('.project-three-active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		centeredSlides: true,
		breakpoints: {
			'1400': {
				slidesPerView: 3.4,
			},
			'1200': {
				slidesPerView: 2.5,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1.3,
			},
			'576': {
				slidesPerView: 1.3,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});




	////////////////////////////////////////////////////
	// 07. Home Three Testimonial Js
    var slider = new Swiper('.testimonial-three-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3500,
        autoplay: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });



	////////////////////////////////////////////////////
	// 08. Home Four service Js
	var slider = new Swiper('.service-four-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1.2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});


	////////////////////////////////////////////////////
	// 09. Home Four Team Js
	var slider = new Swiper('.team-four-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});



	////////////////////////////////////////////////////
	// 10. Home Four Project Js
	var slider = new Swiper('.project-four-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 3.5,
			},
			'1200': {
				slidesPerView: 2.7,
			},
			'992': {
				slidesPerView: 2.2,
			},
			'768': {
				slidesPerView: 1.7,
			},
			'576': {
				slidesPerView: 1.4,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});



	////////////////////////////////////////////////////
	// 11. Home Four Testimonial Js
    var slider = new Swiper('.testimonial-four-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3500,
        autoplay: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });




	////////////////////////////////////////////////////
	// 12. Product Details Js
	var swiper = new Swiper(".mySwiper", {
      spaceBetween: 16,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      thumbs: {
        swiper: swiper,
      },
    });






	////////////////////////////////////////////////////
	// 13. Home two testimonial Js
	document.addEventListener("DOMContentLoaded", function () {
		const testimonialPage = document.querySelector(".quotes-slide[data-slider-slide-index='1']");
		if (!testimonialPage) return;
		testimonialPage.classList.add("quotes-slide--active");
		document.querySelector(".quotes").addEventListener("mouseout", function () {
			document.querySelector(".quotes-slide--active")?.classList.remove("quotes-slide--active");
			document.querySelector(".quotes-slide[data-slider-slide-index='1']")?.classList.add("quotes-slide--active");
		});
		document.querySelectorAll(".quotes-slide").forEach(elem =>
			elem.addEventListener("mouseover", function () {
				document.querySelector(".quotes-slide--active")?.classList.remove("quotes-slide--active");
				this.classList.add("quotes-slide--active");
			})
		);
	});




	////////////////////////////////////////////////////
	// 14. Home five testimonial Js
	var swiper = new Swiper(".testimonial-five-active-one", {
      spaceBetween: 16,
      slidesPerView: 2,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".testimonial-five-active-two", {
      spaceBetween: 10,
      thumbs: {
        swiper: swiper,
      },
	  // Navigation arrows
	  navigation: {
	      nextEl: '.slider-next',
	      prevEl: '.slider-prev',
	  },
	// pagination
    pagination: {
        el: ".testimonial-five-dot",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
        },
    },
    });





	////////////////////////////////////////////////////
	// 15. Home six testimonial Js
    var slider = new Swiper('.testimonial-six-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3500,
        autoplay: true,
        // Navigation arrows
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });




	////////////////////////////////////////////////////
	// 16. Home Eight Brand Js
	var slider = new Swiper('.brand-eight-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		centeredSlides: true,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});



	////////////////////////////////////////////////////
	// 17. Home Eight Project Js
	var slider = new Swiper('.project-eight-active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		centeredSlides: true,
		breakpoints: {
			'1600': {
				slidesPerView: 3.4,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 2.5,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1.3,
			},
			'576': {
				slidesPerView: 1.3,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});



	
	
	
	////////////////////////////////////////////////////
	// 20. Home Nine Banner Js
	const sliderswiper = new Swiper('.banner-nine-active', {
		speed:1500,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		effect:'fade',
		breakpoints: {
			'1600': {
				slidesPerView:1,
			},
			'1400': {
				slidesPerView:1,
			},
			'1200': {
				slidesPerView:1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.banner-nine-next',
			prevEl: '.banner-nine-prev',
		},
		pagination: {
			el: ".banner-nine-dots",
			clickable:true,
		},
		
	});

	



	////////////////////////////////////////////////////
	// 21. Home Nine Testimonial Js
	var slider = new Swiper('.testimonial-nine-active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,
		autoplay: false,
		breakpoints: {
			'1600': {
				slidesPerView: 2.3,
			},
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});
	


})(jQuery);