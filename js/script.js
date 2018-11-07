$(window).load(function() {
	$('.flexslider').flexslider();
});
 
init = function(){

	$('#home').css({
		'background-image':'url("/img/bg'+ (Math.floor(Math.random() * 3) + 1) +'.jpg")'
	})

	filterButtons();

	blockResize();
	
	$('html,body').animate({scrollTop: $("#home").offset().top},1);
	
	$("#contact-top p").clone().prependTo("#contact-bottom");
	
	$(".nav img").click(function(){
		$('html, body').animate({scrollTop: $("#home").offset().top}, 1000);
	})	
	$("#nav-home").click(function(){
		$('html, body').animate({scrollTop: $("#home").offset().top}, 1000);
	})
	$("#nav-contact").click(function(){
		$('html, body').animate({scrollTop: $("#contact-top").offset().top}, 1000);
	})
	$("#nav-web").click(function(){
		$('html, body').animate({scrollTop: $("#work").offset().top}, 1000);
		$('#isotope-container').isotope({
			filter: '.web' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$("#button-web").addClass("filter-highlight");
	})
	$("#nav-graphic").click(function(){
		$('html, body').animate({scrollTop: $("#work").offset().top}, 1000);
		$('#isotope-container').isotope({
			filter: '.graphic' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$("#button-graphic").addClass("filter-highlight");
	})
	$("#nav-motion").click(function(){
		$('html, body').animate({scrollTop: $("#work").offset().top}, 1000);
		$('#isotope-container').isotope({
			filter: '.motion' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$("#button-motion").addClass("filter-highlight");		
	})
	$("#nav-work").click(function(){
		$('html, body').animate({scrollTop: $("#work").offset().top}, 1000);
		$('#isotope-container').isotope({
			filter: '.item' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$("#button-all").addClass("filter-highlight");
	})
	$('html,body').animate({scrollTop: $("#home").offset().top},1);
	$('html,body').animate({scrollTop: $("#home").offset().top},50);
	$(".cover").fadeOut();
	
	$('.ajax-popup-link').magnificPopup({
		type: 'ajax',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
};


filterButtons = function(){
	$('#button-all').click(function(){
		$('#isotope-container').isotope({
			filter: '.item' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$(this).addClass("filter-highlight");
	})
	
	$('#button-web').click(function(){
		$('#isotope-container').isotope({
			filter: '.web' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$(this).addClass("filter-highlight");
	})

	$('#button-motion').click(function(){
		$('#isotope-container').isotope({
			filter: '.motion' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$(this).addClass("filter-highlight");
	})	
	
	$('#button-graphic').click(function(){
		$('#isotope-container').isotope({
			filter: '.graphic' 
		});
		$(".filter-button").removeClass("filter-highlight");
		$(this).addClass("filter-highlight");
	})	
}

$(document).scroll(function(){
		//bottom
		if(document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight)$(document).scrollTop(180);
		//top
		else if($(document).scrollTop() <= 20)$(document).scrollTop($(document).height()-$(window).height()-140);
});


blockResize = function(){
	$(".contact").css("min-height",$(window).height()+100);
	$(".content-box#work").css("min-height",$(window).height());
	$(".content-box#home").height($(window).height());
	$(".content-box").width($(window).width());
	
	if ($(document).width() <= 980){
		$(".nav-buttons").width($(window).width() - 100);
	}else{
		$(".nav-buttons").width($(window).width() - 50);
	}
	
	if($(".contact").height < 700){
		$(".contact").addClass("noface");
	}
}
	
$(window).resize(function() {
	blockResize();
});

$(window).resize(function() {
	blockResize();
});


$(window).scroll(function(){
	if(
		$(document).scrollTop() > ($(window).height()*2) & $(document).scrollTop() < ($(window).height()*3)
	){$("body").css("display", "block");}
});

init();

$( document ).ready(function() {
	$('html,body').animate({scrollTop: $("#home").offset().top},1);
});

$(window).load(function(){
	$('#isotope-container').isotope({
		  masonryHorizontal: {
			rowHeight: 200,
			columnWidth: 370,
			gutterWidth: 10
		  }
	});
})