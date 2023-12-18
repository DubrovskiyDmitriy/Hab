$(document).ready(function() { 
    $("#trigger").click(function() {
        $("#box").toggle();
    })
});

var glide = $('.slider').glide().data('api_glide');
    $(window).on('keyup', function (key) {
        if (key.keyCode === 13) {
            glide.jump(3, console.log('Wooo!'));
        };
    });
    $('.slider-arrow').on('click', function() {
        console.log(glide.current());
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        
        if (id[0] == "#") {
            var top = $(id).offset().top;
            
            $('body,html').animate({scrollTop: top}, 1500);   
        } else {
            window.open(id,"_self");
        }       
    });
});

$(function() {
 
    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

            } else {

            $('#toTop').fadeOut();

            }

        });

    $('#toTop').click(function() {

    $('body,html').animate({scrollTop:0},800);

    });
 
});

(function(s) {
    var n;
    s(".tabs").on("click", "li:not(.active)", function() {
        n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
    }), s.fn.dmtabs = function(n) {
        s(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq(s(this).index()).show(1, function() {
            s(this).addClass("open_tab")
        }).siblings(".box").hide(1, function() {
            s(this).removeClass("open_tab")
        })
    }
})(jQuery);