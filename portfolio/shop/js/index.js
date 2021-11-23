$(function(){
    //popup
    $("#pop_close_btn").click(function () {
        $("#popup_event").css("display", "none");
    });
    //popup=>7일간 안보기
    $("#hide_popup_btn").click(function () {
        let $expire_day = new Date()
        $expire_day.setDate($expire_day.getDate() + 7);
        document.cookie = "cowlove_popup=hide; expires=" + $expire_day.toGMTString(); + ";";
        $("#popup_event").css("display", "none");
    });
    //check_cookie
    let $pop_cookies = document.cookie.match("cowlove_popup=hide");
    if($pop_cookies==null){
        $("#popup_event").stop().slideDown(500);
    }

});