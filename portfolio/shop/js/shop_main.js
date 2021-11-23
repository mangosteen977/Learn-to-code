//event_product.html
function event_product_youtube(link){
    let url_youtube;
    switch(link){
        case 0:
            url_youtube = "https://youtu.be/FEBmjBCZ9AU";
        break;
        case 1:
            url_youtube = "https://youtu.be/u6Js6kXeo8o";
        break;  
    }
    window.open(url_youtube,"","width:500");
}

//검색어 파라미터로 값 보내기
shop_top_search_frm = function(){
    if(!shop_top_frm.searchwd.value){
        alert("검색어를 입력해주세요.");
        shop_top_frm.searchwd.focus();
        return false;
    }
    else{
        shop_top_frm.method="GET";
        shop_top_frm.submit();
    }
}
//login_info.php=>data
function login_info(shop_id){
    if(shop_id==""){//로그아웃
        document.getElementById("shop_top_login_btn").style.display="block";
        document.getElementById("shop_top_join_btn").style.display="block";
        document.getElementById("shop_top_logout_btn").style.display="none";
    }
    else{//로그인
        document.getElementById("shop_top_login_btn").style.display="none";
        document.getElementById("shop_top_join_btn").style.display="none";
        document.getElementById("shop_top_logout_btn").style.display="block";
    }
}
$(function(){
    //연결
    $("#shop_top_login_btn").click(function(){
        location.href = "./shop_login.html";
    });
    $("#shop_top_logout_btn").click(function(){
        location.href = "./log_out.php";
    });
    $("#shop_top_join_btn").click(function(){
        location.href = "membership.html";
    });
    //menu:hover시 상세메뉴 출력
    $("#shop_menu>div").bind({
        "mouseenter":function(){
            let $now_index_menu = $(this).index();
            $("#shop_menu>div>ul").eq($now_index_menu).stop().slideDown(300)

        },
        "mouseleave":function(){
            let $now_index_menu = $(this).index();
            $("#shop_menu>div>ul").eq($now_index_menu).stop().slideUp(300)
        }
    });
    //event_product => event_banner rolling
    //이벤트 배너 롤링
    let $event_bn_timer;
    $.fn.event_banner_roll = function(){
        $("#event_product_banner").stop().animate({
            "left":"-504px"
        },1500,function(){
            let $event_bn_clone =  $("#event_product_banner>li").eq(0).clone();
            $("#event_product_banner>li").eq(0).remove();
            $("#event_product_banner").append($event_bn_clone);
            $("#event_product_banner").css("left","0px");
        })
    }
    $event_bn_timer = setInterval($.fn.event_banner_roll,5000);
    setTimeout($event_bn_timer,5000);
    //회원가입 포인트
    let $join_point_timer;
    $.fn.join_point = function(){
        $("#shop_top_pointer").stop().animate({
            "top":"170%"
        },600,function(){
            $("#shop_top_pointer").stop().animate({
                "top":"150%"
            },600);
        })
    }
    $join_point_timer = setInterval($.fn.join_point,1200);
    setTimeout($join_point_timer,1200);
})