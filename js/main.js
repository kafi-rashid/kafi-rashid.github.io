$(document).ready(function(){
	$.ajax({
	    type: "GET",
	    url: "https://api.github.com/users/kafi-rashid/repos?per_page=100",
	    dataType: "json",
	    success: function(result) {
	        for(i in result) {
	        	if (result[i].name != "kafi-rashid.github.io") $('#repos').append("<p><a class='tips' href='" + result[i].svn_url + "' data-toggle='tooltip' data-placement='left' title='" + result[i].description + "'>" + result[i].name + "</a></p>");
	        	if (result[i].default_branch == "gh-pages") $('#pages').append("<p><a class='tips' href='https://kafi-rashid.github.io/"+ result[i].name +"' data-toggle='tooltip' data-placement='left' title='" + result[i].description + "'>" + result[i].name + "</a></p>");
	        }
	        $('[data-toggle="tooltip"]').tooltip(); 
	    },
	    error: function(result) {
	    	for(i in result) {
	            $('#pages, #repos').append(result[i].message);
	        }
	    }
	});
	$('#sky').append('<div id="stars"></div>');
	$(window).on("load resize", function(e) {
		var stars = $('#stars'), vp_w = stars.width(), vp_h = stars.height();
		$('.star').remove();
		for (var i = 0; i < ((vp_w * vp_h) / 4000); i++) {
			stars.append("<div class='star' style='left: "+Math.floor((Math.random() * vp_w) + 1)+"px; top: "+Math.floor((Math.random() * vp_h) + 1)+"px'></div>");
		}
		setInterval(function() {
			for(var i = 0; i < ((vp_w * vp_h) / 4000); i++) {
	            $('.star:nth-of-type('+Math.floor(Math.random() * 1) + i+')').animate({
	                'opacity': Math.random() * 1 - (1 * 0.1)
	            }, 500);
	        }
		}, 1000);
	});
	$(document).click(function(e) {
		$('#stars').prepend("<div class='star' style='left: "+e.pageX+"px; top: "+e.pageY+"px; opacity: 1'></div>");
	});
});