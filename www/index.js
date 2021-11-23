$(function(){
    let $slide_menu_count =0;
    $("#side_menu").click(function(){
        if($slide_menu_count==0){  
            $("#side_menutool").css("display","block")
            $("#box_slide").stop().css({"right":"-200px"})
            $("#box_slide").stop().animate({
                "right":"0px"
            },500);
            $slide_menu_count++;
        }
        else if($slide_menu_count!=0){
            $("#box_slide").stop().animate({
                "right":"-200px"
            },500,function(){
                $("#side_menutool").css("display","none")
                $("#box_slide").stop().css({"right":"0px"})
            });
            $slide_menu_count=0;
        }
    })
    let $slide_menus_span = 0;
    let $slide_menus_spans = "";
    do{
        $slide_menus_spans += '<span links="" class="slide_menu_spans"></span>';
        $slide_menus_span++;
    }while($slide_menus_span<27)
    $("#side_menutool").html($slide_menus_spans);
    $(".slide_menu_spans").click(function(){
        let $links = $(this).attr("links");
        window.open($links,"_blank");
    });

})

