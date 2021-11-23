$(function(){



$(window).scroll(function(){
    var $sct = $(this).scrollTop();
    $("#floorbanner").stop().animate({
        "top" : $sct +200 +"px"
    },800);
    
});
});