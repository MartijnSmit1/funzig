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





	////////////////////////////////////////
	//	Parallax
	////////////////////////////////////////

	



	////////////////////////////////////////
	//	Div window height
	////////////////////////////////////////

	// $(".wh").css({"min-height:" + $(window).height()});
	$(".wh").css({ minHeight: $(window).height()});

	console.log($(window).height());


});