
	$(window).scroll(function() {


		    $('.welcome-text').each(function() {
		        var imagePos = $(this).offset().top;
		        var topOfWindow = $(window).scrollTop();
		        // console.log(imagePos)
		        //  console.log(topOfWindow)
		        if (imagePos < topOfWindow+500 ) {
		            $(this).addClass("bounceIn");
		        }else{
		        	 $(this).removeClass('bounceIn');
		        }
		    });

		    // 历程

		    $('.fact-info').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeInRight");
				}else{
		        	$(this).removeClass('fadeInRight');
		        }
			});		

			// 服务

			$('.fade-text').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeIn");
				}else{
					$(this).removeClass("fadeIn");
				}
			});

			$('.service-content').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("bounceIn");
				}else{
		        	 $(this).removeClass('bounceIn');
		        }
			});	


		    $('.staff-con').each(function() {
		        var imagePos = $(this).offset().top;
		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+500 ) {
		            $(this).addClass("rollIn");
		        }
		    });

		    $('.portfolio').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("flipInY");
				}
			});	

		 
		});
		