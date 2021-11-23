// 공지사항 클릭
function go_to_notice(sidx){
    location.href="shop_notice.html?sidx="+sidx;
}
$(function(){
    $.get("./admin/admin_notice.json?v="+nos,function($notice_data){
    })
    .done(function($notice_data2){//공지사항
        $.map($notice_data2,function($arr,$node){
           if($arr["subject"].length>20){
               $("#shop_top_notice_ul").append("<li onclick='go_to_notice("+$arr["sidx"]+")' title='"+$arr["subject"]+"'>"+$arr["subject"].substr(0,20)+"...</li>");
           }
           else{
            $("#shop_top_notice_ul").append("<li onclick='go_to_notice("+$arr["sidx"]+")' title='"+$arr["subject"]+"'>"+$arr["subject"]+"</li>");
           }
        })
    })
    .fail(function($error){console.log($error)});

    let $shop_top_notice_timer
    $.fn.shop_top_flow_notice =function(){
        $("#shop_top_notice_ul").stop().animate({
            "top":"-35px"
        },300,function(){
            let $clone_ullis =  $("#shop_top_notice_ul>li").eq(0).clone();
            $("#shop_top_notice_ul>li").eq(0).remove();
            $("#shop_top_notice_ul").append($clone_ullis);
            $("#shop_top_notice_ul").css("top","0px")
        })
    };
    $shop_top_notice_timer = setInterval($.fn.shop_top_flow_notice,3000);
    setTimeout($shop_top_notice_timer,3000);
    $("#shop_top_notice_box").bind({
        "mouseenter":function(){
            clearInterval($shop_top_notice_timer);
        },
        "mouseleave":function(){
            $shop_top_notice_timer = setInterval($.fn.shop_top_flow_notice,3000);
            setTimeout($shop_top_notice_timer,3000);
        }
    });
    $("#shop_top_notice_next").click(function(){
        $.fn.shop_top_flow_notice();
    });
    $("#shop_top_notice_pre").click(function(){
        let $li_ea = $("#shop_top_notice_ul>li").length;
        $("#shop_top_notice_ul").css("top","-35px")
        let $clone_ullis =  $("#shop_top_notice_ul>li").eq($li_ea-1).clone();
        $("#shop_top_notice_ul>li").eq($li_ea-1).remove();
        $("#shop_top_notice_ul").prepend($clone_ullis);
        $("#shop_top_notice_ul").stop().animate({
            "top":"0px"
        },300);
    });
})