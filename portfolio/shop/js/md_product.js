function md_pd_view_product(){
    location.href = "http://mangsteen977.dothome.co.kr/portfolio/shop/shop_product.html?pidx=15&goodsno=33241124";
}
$(function(){
    let $md_pd_img_flow_timer;
    //product_image=>right_flow_function
    $.fn.md_pd_img_right_flow = function(){
        $("#md_pd_image_box").stop().animate({
            "left":"-220px"
        },300,function(){
            let $md_pd_img_ul = $("#md_pd_image_box>ul").eq(0).clone();
            $("#md_pd_image_box>ul").eq(0).remove();
            $("#md_pd_image_box").append($md_pd_img_ul);
            $("#md_pd_image_box").css("left","0px");
        })
    }
    //timer_for_right_flow
    $md_pd_img_flow_timer = setInterval($.fn.md_pd_img_right_flow,3000);
    setTimeout($md_pd_img_flow_timer,3000);
    //control_timer
    $("#md_pd_image_cover").bind({
        "mouseenter":function(){
            clearInterval($md_pd_img_flow_timer);
            // console.log("enter")
        },
        "mouseleave":function(){
            $md_pd_img_flow_timer = setInterval($.fn.md_pd_img_right_flow,3000);
            setTimeout($md_pd_img_flow_timer,3000);
            // console.log("leave")
        }
    })
    //prev/next_button_function
    //next_btn
    $("#md_pd_imgbox_btn_right").click(function(){
        $.fn.md_pd_img_right_flow();
    });
    //prev_btn
    $("#md_pd_imgbox_btn_left").click(function(){
        let $ulli_ea = $("#md_pd_image_box>ul").length;
        $("#md_pd_image_box").css("left","-220px");
        let $md_pd_img_ul = $("#md_pd_image_box>ul").eq($ulli_ea-1).clone();
        $("#md_pd_image_box>ul").eq($ulli_ea-1).remove();
        $("#md_pd_image_box").prepend($md_pd_img_ul);
        $("#md_pd_image_box").stop().animate({
            "left":"0px"
        },300);
    });
})