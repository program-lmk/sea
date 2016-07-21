$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").addClass("ac");
        $(" .navbar-nav  li a").addClass("ac");
        
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").removeClass("ac");
        $(" .navbar-nav  li a").removeClass("ac");
    }
});


jQuery(function($){
	$.supersized({
	// Functionality
	slide_interval          :   5000,		// Length between transitions
	transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
	transition_speed		:	1000,		// Speed of transition

	// Components							
	slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
	slides 					:  	[			// Slideshow Images
										{image : 'seaimg/1.jpg'},
										{image : 'seaimg/2.jpg'},
										{image : 'seaimg/3.jpg'}
	]
	});
});


$(function(){
	var i=0;
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$('.slides li').eq(i).animate({display:'block',opacity:1},1000).siblings().animate({display:'block',opacity:0},1000);
	},5500)
})
