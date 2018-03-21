$(document).ready(function(){
	$.ajax({
	    type: "GET",
	    url: "https://api.github.com/users/kafi-rashid/repos",
	    dataType: "json",
	    success: function(result) {
	        for(i in result) {
	        	if (result[i].default_branch == "gh-pages") {
	            	$('#pages').append("<p><a class='tips' href='https://kafi-rashid.github.io/"+ result[i].name +"' data-toggle='tooltip' data-placement='left' title='" + result[i].description + "'>" + result[i].name + "</a></p>");
					$('[data-toggle="tooltip"]').tooltip(); 
	            }
	            else if (result[i].name == "kafi-rashid.github.io") {
	            	
	            }
	            else {
	            	$('#repos').append("<p><a class='tips' href='" + result[i].svn_url + "' data-toggle='tooltip' data-placement='left' title='" + result[i].description + "'>" + result[i].name + "</a></p>");
	            }
	        }
	    },
	    error: function() {
            $('#pages').append("API rate limit exceeded");
            $('#repos').append("API rate limit exceeded");
	    }
	});
	$(document).click(function(e) {
		$('#stars').prepend("<div class='star' style='left: "+e.pageX+"px; top: "+e.pageY+"px; opacity: 1'></div>");
	});
	$('#sky').append('<div id="stars"></div>');
	$(window).on("load resize", function(e) {
		var stars = $('#stars');
		$('.star').remove();
		var vp_w = stars.width();
		var vp_h = stars.height();
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
	$('[data-toggle="tooltip"]').tooltip(); 
});