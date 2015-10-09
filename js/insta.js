var $loading = $(".loading");
var $loadbar = $(".loading hr");

$(document).ready(function() {
	loadGrow();
	window.setTimeout(load, 2000);
});

function load() {
	$loading.fadeOut(500);

}

function loadGrow() {
	$loadbar.velocity({
		width: "100%"
	}, 1750);

}

