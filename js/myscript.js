
$(document).ready(function(){
	$('#top').click(function(){
		$("html,body").animate({scrollTop: 0},800);
	});
});





$(document).ready(function(){
	$("#info_main").mouseenter(function(){
		$("#top").show();
	});
});

$(document).ready(function(){
	$("#second").mouseenter(function(){
		$("#top").hide();
	});
});



$(document).ready(function(){
	$('.menu').click(function(){
		$('ul').toggleClass('active');
	});
});


// text color change//

$(document).ready(function(){
	$('h1 , p').click(function(){
		$('h1 , p').removeClass("active");
		$(this).addClass("active");
	});
});


