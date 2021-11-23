$(function(){
    $.ajax({
        url:"./json/banner.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function($bn_data, $bn_ok){
            $.fn.bn_bannerimg($bn_data);
        },
        error:function(){
            console.log("data error");
        }
    });
    //배너&디스크 찍는 파트
    $.fn.bn_bannerimg = function($bn_data){
        $bn_imgea = $bn_data["banners"].length;
        let $bn_imgli =""; let $bn_discli="";
        $($bn_data["banners"]).map(function($bn_n,$bn_a){
            // console.log($bn_data["banners"][$bn_n][0])
            $bn_imgli += "<li><img src='"+$bn_data["banners"][$bn_n][0]+"'></li>";
            $("#bn_ul").html($bn_imgli);
            $bn_discli += "<li></li> ";
            $("#bn_disc").html($bn_discli);
        });
        //디스크 클릭 이동
        $("#bn_disc>li").click(function(){
            $bn_no = $(this).index();
            $("#bn_ul>li").fadeOut(300);
            $("#bn_disc>li").css("background-color","#ccc");
            $("#bn_ul>li").eq($bn_no).fadeIn(300);
            $("#bn_disc>li").eq($bn_no).css("background-color","goldenrod");
        });
    }
    //좌우 버튼 클릭
    let $bn_no = 0;
    $("#bn_right").click(function(){
        $.fn.bn_rightflow();
    });
    $("#bn_left").click(function(){
        $("#bn_ul>li").fadeOut(300);
        $("#bn_disc>li").css("background-color","#ccc");
        if($bn_no>0){$bn_no--;}
        else if($bn_no==0){$bn_no=2;}
        $("#bn_ul>li").eq($bn_no).fadeIn(300);
        $("#bn_disc>li").eq($bn_no).css("background-color","goldenrod");
    });
    //오른쪽으로 흘르는 함수
    $.fn.bn_rightflow = function(){
        $("#bn_ul>li").fadeOut(300);
        $("#bn_disc>li").css("background-color","#ccc");
        if($bn_no<2){$bn_no++;}
        else if($bn_no==2){$bn_no=0;}
        $("#bn_ul>li").eq($bn_no).fadeIn(300);
        $("#bn_disc>li").eq($bn_no).css("background-color","goldenrod");
    };
    //8초마다 흐르도록 설정
    let $bn_timer;
    $.fn.bn_times = function(){
        setTimeout(function(){
            $.fn.bn_rightflow();
        },8000);
        setTimeout($.fn.bn_times,8000);
    };
    $.fn.bn_times();
});