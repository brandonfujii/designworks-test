
$(document).scroll(function(){
	var $navBar = $(".nav-container");
	var scrollPos = $(this).scrollTop();

	if (scrollPos > 0) {
		$navBar.addClass("active");
	} else {
		$navBar.removeClass("active");
	}
});

var $button = $(".button");

$button.on("click", function() {
	var $sect = $("#" + $(this).data("nav"));
	// var $navHeight = $(".nav-container nav").height();

	if ($sect) {
		$sect.velocity("scroll", {duration: 750, offset: 0});
	}
});

$connectOption = $("li.mobile");

$connectOption.on("click", function() {
	var $sect = $("#" + $(this).data("nav"));

	if ($sect) {
		$sect.velocity("scroll", {duration: 750, offset: -70});
	}
})

var $socialIcon = $(".connect ul li a"); 

$socialIcon.on("mouseover", function() {
	$(this).velocity("stop");
	$(this).velocity({
		top: -20
	}, 200);
})

$socialIcon.on("mouseleave", function() {
	$(this).velocity("stop");
	$(this).velocity({
		top: 0
	}, 200);
})

var $menuIcon = $(".nav-container nav ul .hamburger");
var $menuItem = $(".item");

$menuIcon.on("click", function() {
	$menuItem.velocity("stop");

	if ($menuItem.is(":hidden")) {
		$menuItem.velocity("fadeIn", {duration: 300});
	} else {
		$menuItem.velocity("fadeOut", {duration: 300});
	}

})


$(window).resize(function() {

	var windowWidth = $(window).width();

	if (windowWidth > 750) {
		$menuItem.css({
			"display" : "inline-block",
			"opacity" : "1"
		});
		$connectOption.css("display", "none");
	} else {
		$menuItem.css("display", "none");
	}
})


