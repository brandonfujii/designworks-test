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
	var $navHeight = $(".nav-container nav").height();

	if ($sect) {
		$sect.velocity("scroll", {duration: 750, offset: -$navHeight});
	}
});

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


var $hamburger = $(".hamburger");

$hamburger.on('click', function() {

	if (!$hamburger.hasClass("active")) {
		$hamburger.addClass("active");

	} else {
		$hamburger.removeClass("active");

	}


});
