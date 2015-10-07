$(document).scroll(function(){
	var $navBar = $(".nav-container");
	var scrollPos = $(this).scrollTop();

	if (scrollPos > 0) {
		$navBar.addClass("active");
	} else {
		$navBar.removeClass("active");
	}
});

$('[typer]').typer();