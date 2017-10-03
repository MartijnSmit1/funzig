$(document).ready(function() {

	////////////////////////////////////////
	//	Window scroll functions
	////////////////////////////////////////

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();
		// console.log(wScroll)

		if (wScroll <= 2) {

		};
	});



	////////////////////////////////////////
	//	Mobile menu
	////////////////////////////////////////

	// Fire toggle
	$(".nav-mobile-toggle").click(function() {
		navMobileToggle();
	});

	$(".nav-mobile-close").click(function() {
		navMobileClose();
	});

	// Open
	function navMobileOpen () {
		$("#nav-mobile-container").addClass("open");
		$("#nav-mobile-backdrop").addClass("open");
		$("body").addClass("nav-mobile-open");
	};

	// Close
	function navMobileClose () {
		$("#nav-mobile-container").removeClass("open");
		$("#nav-mobile-backdrop").removeClass("open");
		$("body").removeClass("nav-mobile-open");
	};

	// Toggle
	function navMobileToggle () {
		if ($("#nav-mobile-container").hasClass("open")) {
			navMobileClose();
		} else {
			navMobileOpen();
		};
	};


	// Swipe animations for mobile menu
	new Hammer(document.getElementById('nav-mobile-container')).on("swipeleft ", function() {
		navMobileClose();
	});
	new Hammer(document.getElementById('nav-mobile-backdrop')).on("swiperight swipeleft ", function() {
		navMobileToggle();
	});








	////////////////////////////////////////
	//	Has-sub
	////////////////////////////////////////

	// Disable has-sub button
	$("li.has-sub > a").click(function(e) {
		e.preventDefault();
	});


	// .has-sub-hover toggle
	$("nav.has-sub-hover li.has-sub").hover(function() {
		// open
		$(this).children("ul").fadeIn(0);
		$(this).addClass("open");
	}, function() {
		// close
		$(this).children("ul").fadeOut(0);
		$(this).removeClass("open");
	});


	// .has-sub-click toggle
	$("nav.has-sub-click li.has-sub").click(function(e) {
	        e.stopPropagation();
		if ($(this).hasClass("open")) {
			// close
			$(this).children("ul").fadeOut(0);
			$(this).removeClass("open");
		} else {
			// open current
			$(this).children("ul").fadeIn(0);
			$(this).addClass("open");

			// close siblings
			$(this).siblings().removeClass("open");
			$(this).siblings().children("ul").fadeOut(0);
		};
	});



	$("#nav-mobile-container nav a").click(function() {
		navMobileClose();
	});

	////////////////////////////////////////
	//	Parallax
	////////////////////////////////////////

	$('#wrapper-service').parallax({imageSrc: 'img/hero.png'});
	$('#wrapper-about-us').parallax({imageSrc: 'img/hannah.png'});



	////////////////////////////////////////
	//	Modal
	////////////////////////////////////////

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });





	////////////////////////////////////////
	//	Div window height
	////////////////////////////////////////

	$(".wh").css({ minHeight: $(window).height() - $("#header-fix").height()});



});