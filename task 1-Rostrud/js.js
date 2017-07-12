$(document).ready(function () {
        var objToStick = $("#objToStick"); 
        var topOfObjToStick = $(objToStick).offset().top; 

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); 

            if (windowScroll > topOfObjToStick) { 
                $(objToStick).addClass("topWindow");
            } else {
                $(objToStick).removeClass("topWindow");
            };
        });
    var element = $('.moved-element');
var elementWidth = element.width();
var body = $('body');
var bodyHeight = body.outerHeight(true);
var scrolledBlock = $('.scrolled-block');
var sbWidth = scrolledBlock.width();
var winHeight = $(window).height();
var maxScroll = bodyHeight - winHeight;
var coeff = maxScroll/(sbWidth-elementWidth);
	
  $(window).scroll(function() {
	  	var scrollTop = $(window).scrollTop();
			var move = scrollTop / coeff;
      element['fade' + (scrollTop > 200 ? 'In' : 'Out')](500);
      element.css('marginLeft', move);
      
      if (scrollTop > 200) {
          $('#content').addClass("content");
      } else {
          $('#content').removeClass("content");
      }
	});
    });
