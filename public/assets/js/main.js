/***************************************************
==================== JS INDEX ======================
****************************************************

01. Mobile Nav Menu Dropdown Js
02. Scroll Back to Top Js
03. Sadd active class to navbar menu current page Js
04. Settings Panel Js
05. Toast Notification Js
06. Delete Item Js 
07. Form Submit Js  
08. Password Show Hide Js  
09. AOS Js
10. Magnific Popup Js
11. Add Attribute For Bg Image Js
12. Odometer Js
13. Search Bar Js
14. Header Sticky Js
15. Offcanvas Sidebar Js
16. Floating Progress Js
17. knob progress Js
18. BeforeAfter progress Js
19. niceSelect Js
20. Pricing Js
21. Preloader Js
22. Mouse Custom Cursor Js
23. Ecommerce Cart Js
24. Service 6 Hover Animation Js


****************************************************/



(function ($) {
    "use strict";




    $(document).ready(function () {
        ////////////////////////////////////////////////////
        // 01. Mobile Nav Menu Dropdown Js
        function toggleSubMenu() {
            if ($(window).width() <= 1199) {
                $(".has-submenu")
                    .off("click")
                    .on("click", function () {
                        $(this)
                            .toggleClass("active")
                            .siblings(".has-submenu")
                            .removeClass("active")
                            .find(".nav-submenu")
                            .slideUp(300);
                        $(this).find(".nav-submenu").stop(true, true).slideToggle(300);
                    });
            } else {
                $(".has-submenu").off("click");
            }
        }
        toggleSubMenu();
        $(window).resize(toggleSubMenu);


        ////////////////////////////////////////////////////
        // 02. Scroll Back to Top Js
            function back_to_top() {
                var btn = $('#back_to_top');
                var btn_wrapper = $('.back-to-top-wrapper');
                // Detect scroll
                $(window).on('scroll', function () {
                    if ($(this).scrollTop() > 300) {
                        btn_wrapper.addClass('back-to-top-btn-show');
                    } else {
                        btn_wrapper.removeClass('back-to-top-btn-show');
                    }
                });
                // Smooth scroll to top
                btn.on('click', function (e) {
                    e.preventDefault();
                    $('html, body').animate({ scrollTop: 0 }, 300);
                });
            }
            // Init
            back_to_top();



        ////////////////////////////////////////////////////
        // 03. Sadd active class to navbar menu current page Js
        function dynamicActiveMenuClass(selector) {
            // Routes are clean paths ("/about"), so match the whole pathname.
            let current = window.location.pathname.replace(/\/+$/, "") || "/";
            selector.find("li").removeClass("activePage");
            selector.find("li").each(function () {
                let href = $(this).children("a").attr("href");
                if (href && (href.replace(/\/+$/, "") || "/") === current) {
                    $(this).addClass("activePage");
                }
            });
            selector.children("li").each(function () {
                if ($(this).find(".activePage").length) {
                    $(this).addClass("activePage");
                }
            });
        }
        if ($("ul").length) {
            dynamicActiveMenuClass($("ul"));
        }




        ////////////////////////////////////////////////////
        // 04. Settings Panel Js
        $(".settings-button").on("click", function () {
            $(".settings-panel").toggleClass("active");
            $(this).toggleClass("active");
        });
        $(document).on(
            "click",
            ".settings-panel__buttons .settings-panel__button",
            function () {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            }
        );
        // Cursor start
        $(".cursor-animate").on("click", function () {
            $("body").removeClass("remove-animate-cursor");
        });
        $(".cursor-default").on("click", function () {
            $("body").addClass("remove-animate-cursor");
        });
        // Cursor end
        // Direction start
        $(".direction-ltr").on("click", function () {
            $("html").attr("dir", "ltr");
        });
        $(".direction-rtl").on("click", function () {
            $("html").attr("dir", "rtl");
        });
        // Direction end



        ////////////////////////////////////////////////////
        // 05. Toast Notification Js
        function toastMessage(messageType, messageTitle, messageText, messageIcon) {
            let $toastContainer = $("#toast-container");
            let $toast = $("<div>", {
                class: `toast-message ${messageType}`,
                html: `
                    <div class="toast-message__content">
                        <span class="toast-message__icon">
                        <i class="${messageIcon}"></i>
                        </span>
                        <div class="flex-grow-1">
                        <div class="d-flex align-items-start justify-content-between mb-1">
                            <h6 class="toast-message__title">${messageTitle}</h6>
                            <button type="button" class="toast-message__close">
                            <i class="ph-bold ph-x"></i>
                            </button>
                        </div>
                        <span class="toast-message__text">${messageText}</span>
                        </div>
                    </div>
                    <div class="progress__bar"></div>
                    `,
            });
            $toastContainer.append($toast);
            setTimeout(() => {
                $toast.addClass("active");
            }, 50);
            let totalDuration = 3500;
            let startTime = Date.now();
            let remainingTime = totalDuration;
            let toastTimeout = setTimeout(hideToast, remainingTime);
            function hideToast() {
                $toast.removeClass("active");
                setTimeout(() => {
                    $toast.remove();
                }, 500);
            }
            $toast.find(".toast-message__close").on("click", function () {
                $toast.removeClass("active");
                setTimeout(() => {
                    $toast.remove();
                }, 500);
            });

            $toast.on("mouseenter", function () {
                remainingTime -= Date.now() - startTime;
                clearTimeout(toastTimeout);
            });
            $toast.on("mouseleave", function () {
                startTime = Date.now();
                toastTimeout = setTimeout(hideToast, remainingTime);
            });
        }




        ////////////////////////////////////////////////////
        // 06. Delete Item Js        
        $(document).on("click", ".delete-button", function () {
            $(this).closest(".delete-item").addClass("d-none");
            toastMessage(
                "danger",
                "Deleted",
                "You deleted successfully!",
                "ph-bold ph-trash"
            );
        });



        ////////////////////////////////////////////////////
        // 07. Form Submit Js  
        $(document).on("submit", ".form-submit", function (e) {
            e.preventDefault();
            $("input").val("");
            $("textarea").val("");
            toastMessage(
                "success",
                "Success",
                "Form submitted successfully!",
                "ph-fill ph-check-circle"
            );
        });



        ////////////////////////////////////////////////////
        // 08. Password Show Hide Js  
        $(".toggle-password").on("click", function () {
            $(this).toggleClass("active");
            var input = $($(this).attr("id"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
                $(this).removeClass("ph-bold ph-eye-closed");
                $(this).addClass("ph-bold ph-eye");
            } else {
                input.attr("type", "password");
                $(this).addClass("ph-bold ph-eye-closed");
            }
        });

        
        ////////////////////////////////////////////////////
        // 09. AOS Js  
        AOS.init({
            once: false,
            offset: 0,
            anchorPlacement: "top-bottom",
        });


    });






    ////////////////////////////////////////////////////
    // 10. Magnific Popup Js
    $('.open-popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });




    ////////////////////////////////////////////////////
    // 11. Add Attribute For Bg Image Js
    $(".bg-img").each(function () {
        var img = $(this).data("background-image");
        if (img) {
            $(this).css("background-image", "url('" + img + "')");
        }
    });



    ////////////////////////////////////////////////////
    // 12. Odometer Js
    if ($(".odometer").length > 0) {
        $(".odometer").each(function () {
            var $this = $(this);
            $this.waypoint(
            function () {
                var countNumber = $this.attr("data-count");
                $this.html(countNumber);
            },
            {
                offset: "100%",
                triggerOnce: true
            }
            );
        });
    }


    ////////////////////////////////////////////////////
    // 13. Search Bar Js
    $(".open-search").on("click", function () {
        $(".search_popup").addClass("search-opened");
        $(".search-popup-overlay").addClass("search-popup-overlay-open");
    });
    $(".search_close_btn").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });
    $(".search-popup-overlay").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(this).removeClass("search-popup-overlay-open");
    });



    ////////////////////////////////////////////////////
    // 14. Header Sticky Js
    var windowOn = $(window);
    windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 260) {
            $("#fixed-header").removeClass("fixed-header");
        } else {
            $("#fixed-header").addClass("fixed-header");
        }
    });



    ////////////////////////////////////////////////////
    // 15. Offcanvas Sidebar Js
    $(".tw-menu-bar").on("click", function () {
        $(".twoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".twoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".twoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });




    ////////////////////////////////////////////////////
    // 16. Floating Progress Js
    const progressContainers = document.querySelectorAll('.progress-container');
    function setPercentage(progressContainer) {
        const percentage = progressContainer.getAttribute('data-percentage') + '%';
        const progressEl = progressContainer.querySelector('.progress');
        const percentageEl = progressContainer.querySelector('.percentage');
        progressEl.style.width = percentage;
        percentageEl.innerText = percentage;
        percentageEl.style.insetInlineStart = percentage;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressContainer = entry.target;
                setPercentage(progressContainer);
                progressContainer.querySelector('.progress').classList.remove('active');
                progressContainer.querySelector('.percentage').classList.remove('active');
                observer.unobserve(progressContainer);
            }
        });
    }, {
        threshold: 0.5
    });
    progressContainers.forEach(progressContainer => {
        observer.observe(progressContainer);
    });




    ////////////////////////////////////////////////////
    // 17. knob progress Js
    if (typeof ($.fn.knob) !== 'undefined') {
        $('.knob').each(function () {
            var $this = $(this);
            var knobVal = $this.attr('data-rel');

            $this.knob({
                'draw': function () {
                    $(this.i).val(this.cv + '%');
                }
            });
            gsap.fromTo($({
                val: 0
            }), {
                val: 0
            }, {
                val: knobVal,
                duration: 2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: $this,
                    start: "top 80%", // when element top is 80% from top of viewport
                    once: true, // trigger only once
                },
                onUpdate: function () {
                    $this.val(Math.ceil(this.targets()[0].val)).trigger('change');
                }
            });
        });
    }


    ////////////////////////////////////////////////////
    // 18. BeforeAfter progress Js
	if ($(".before-after-wrapper").length > 0) {
		$(".before-after-wrapper").beforeAfter({
			movable: true,
			clickMove: true,
			position: 50,
			separatorColor: "#fafafa",
			bulletColor: "#fafafa",
			onMoveStart: function (e) {
				console.log(event.target);
			},
			onMoving: function () {
				console.log(event.target);
			},
			onMoveEnd: function () {
				console.log(event.target);
			},
		});
	}
   

    
    ////////////////////////////////////////////////////
    // 19. niceSelect Js
    $(document).ready(function() {
        $('select').niceSelect();
    });



    ////////////////////////////////////////////////////
    // 20. Pricing Js
    function tabtable_active() {
        var e = document.getElementById("filt-monthly"),
            d = document.getElementById("filt-yearly"),
            t = document.getElementById("switcher"),
            m = document.getElementById("monthly"),
            y = document.getElementById("hourly");

        e.addEventListener("click", function () {
            t.checked = false;
            e.classList.add("pricing-ip-active");
            d.classList.remove("pricing-ip-active");
            m.classList.remove("hide");
            y.classList.add("hide");
        });
        d.addEventListener("click", function () {
            t.checked = true;
            d.classList.add("pricing-ip-active");
            e.classList.remove("pricing-ip-active");
            m.classList.add("hide");
            y.classList.remove("hide");
        });
        t.addEventListener("click", function () {
            d.classList.toggle("pricing-ip-active");
            e.classList.toggle("pricing-ip-active");
            m.classList.toggle("hide");
            y.classList.toggle("hide");
        })
    }
    if ($('#filt-monthly').length > 0) {
        tabtable_active();
    }


    ////////////////////////////////////////////////////
    // 21. Preloader Js
    var percentage = 0;
      var LoadingCounter = setInterval(function () {
        if (percentage <= 100) {
          $("#loading-screen .loading-counter").text(percentage + "%");
          $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
          $("#loading-screen .progress-line").css("transform", "scale(" + percentage / 100 + ")");
          percentage++;
        } else {
          $("#loading-screen").fadeOut(500);
          setTimeout(() => {
            $("#loading-screen").remove();
          }, 500);
          clearInterval(LoadingCounter);
        }
      }, 10);




    ////////////////////////////////////////////////////
    // 22. Mouse Custom Cursor Js
    function itCursor() {
      var myCursor = jQuery(".mouseCursor");
      if (myCursor.length) {
        if ($("body")) {
          const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
          let n,
            i = 0,
            o = !1;
          (window.onmousemove = function (s) {
            o ||
              (t.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (e.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (n = s.clientY),
              (i = s.clientX);
          }),
            $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
              e.classList.add("active"), t.classList.add("active");
            }),
            $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
              ($(this).is("a", "button") &&
                $(this).closest(".cursor-pointer").length) ||
                (e.classList.remove("active"),
                  t.classList.remove("active"));
            }),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");
        }
      }
    }
    itCursor();
    $(".tw-cursor-point-area").on("mouseenter", function () {
      $(".mouseCursor").addClass("cursor-big");
    });
    $(".tw-cursor-point-area").on("mouseleave", function () {
      $(".mouseCursor").removeClass("cursor-big");
    });



    ////////////////////////////////////////////////////
    // 23. Ecommerce Cart Js
	function tw_ecommerce() {
        $('.tw-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = Number($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$('.tw-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(Number($input.val()) + 1);
			$input.change();
			return false;
		});
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));

        
		$('.checkout-payment-item label').on('click', function () {
			$(this).siblings('.checkout-payment-desc').slideToggle(400);
			
		});

		// Show Login Toggle Js
		$('.checkout-login-form-reveal-btn').on('click', function () {
			$('#ReturnCustomerLoginForm').slideToggle(400);
		});


		// 18. Show Coupon Toggle Js
		$('.checkout-coupon-form-reveal-btn').on('click', function () {
			$('#CheckoutCouponForm').slideToggle(400);
		});
	}
	tw_ecommerce();
    const box = document.querySelector('.cart-ip-wrapper');
    if (box) { 
        box.style.overflowX = 'auto';
        box.style.whiteSpace = 'nowrap';
    }




    ////////////////////////////////////////////////////
    // 24. Service 6 Hover Animation Js
    $('.service-six-list-wrap .service-six-list-item').on("mouseenter", function () {
        $('#service-six-thumb').removeClass().addClass($(this).attr('rel'));
        $(this).addClass('active').siblings().removeClass('active');
    });



    

})(jQuery);