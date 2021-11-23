$(function(){
    let $effect = eff;
    //F : fadein/out ==> .effect1
    //R : rolling ==> .effect2
    if($effect == "F"){
        $(".effect1").css("display","block");
    }
    else if($effect == "R"){
        $(".effect2").css("display","block");
    }
    $.fn.banner_json = function(){
       $.ajax({
           url:"./admin/admin_banner.json",
           cache:false,
           data:"GET",
           dataType:"JSON",
           success:function($b_data,$ok){
               $.fn.print_banner($b_data);
           },
           error:function(){
            console.log("data_error");
           }
       })
    }
    $.fn.banner_json();
    $.fn.print_banner = function($data){
        let $ul_banner = "";
        let $li_disc= "<li></li> ";
        $.map($data,function($a,$n){
            let $ul_banner = "<li title='"+$data[$n]["bname"]+"'><img src='"+$data[$n]["bimg"]+"' ></li>";
            $(".banner_ul").append($ul_banner);
            $(".banner_disc").append($li_disc);
        })


        //1. F
        //페이드 인앤아웃
        //fadeIn/Out effect
        
        let $timer;
        let $n = 0;
        //오른쪽으로 흐르는 확장함수
        $.fn.banner_right_flow = function(){
            var $banner_ea = $("#fade > .banner_ul > li").length-1;
            $("#fade > .banner_ul > li").eq($n).stop().fadeOut();
            $("#fade > .banner_disc > li").css("background-color","black");
            $n++;
            if($n > $banner_ea){
                $n = 0;
            }
            $("#fade > .banner_ul > li").eq($n).stop().fadeIn();
            $("#fade > .banner_disc > li").eq($n).css("background-color","#c3222b");
        }
        //8초마다 오른쪽으로 흐르는 
        $.fn.timer = function recalls(){
            $.fn.banner_right_flow();
            clearTimeout($timer);
            $timer = setTimeout(recalls,8000);
        };
        $timer = setTimeout($.fn.timer,8000);
        //마우스엔터리브 조절
        $("#fade").bind({
            "mouseenter":function(){
                clearTimeout($timer);
                $timer = ""; //스트롤링 , 빨라짐 예방용
            },
            "mouseleave":function(){
                $timer = setTimeout($.fn.timer,8000);
            }
        });
        //좌우버튼 클릭 함수
        $("#fade_btn_right").click(function(){
            $.fn.banner_right_flow();
        });
        $("#fade_btn_left").click(function(){
            var $banner_ea = $("#fade > .banner_ul > li").length-1;
            $("#fade > .banner_ul > li").eq($n).stop().fadeOut();
            $("#fade > .banner_disc > li").css("background-color","black");
            $n--;
            if($n < 0){
                $n = $banner_ea;
            }
            $("#fade > .banner_ul > li").eq($n).stop().fadeIn();
            $("#fade > .banner_disc > li").eq($n).css("background-color","#c3222b");
        });
        //페이드 인 디스크 클릭 이동
        $("#fade > .banner_disc >li").click(function(){
            $n = $(this).index();
            $("#fade > .banner_ul > li").stop().fadeOut();
            $("#fade > .banner_disc > li").css("background-color","black");
            $("#fade > .banner_ul > li").eq($n).stop().fadeIn();
            $("#fade > .banner_disc > li").eq($n).css("background-color","#c3222b");
        })

        //2. R
        //롤링배너
        //rolling
        var $roll_bn_ea = $("#rolling > li").length;
         let $counts = 1;
         //위로 올라가는 확장함수
         $.fn.rollup= function(){
             $("#roll > .banner_disc > li").css("background-color","black");
             if($counts<$roll_bn_ea){
                 let $roll = 534*$counts;
                 $("#roll > .banner_disc > li").eq($counts).css("background-color","#c3222b");
                 $("#rolling").stop().animate({
                     "top":-$roll+"px"
                    },1000);
                    $counts++;
                }
                else{
                    $("#rolling").stop().animate({
                        "top":"0px"
                    },1000);
                    $("#roll > .banner_disc > li").eq($counts).css("background-color","#c3222b");
                    $counts = 1;
                }
            }
         //8초마다 흐르는 함수
         let $rtimer;
         $.fn.r_timer = function rolling(){
             $.fn.rollup();
            clearTimeout($rtimer);
            $rtimer = setTimeout(rolling,8000);
        };
        $rtimer = setTimeout($.fn.r_timer,8000);
        //마우스 엔터리브 조절
        $("#roll").bind({
            "mouseenter":function(){
                clearTimeout($rtimer);
                $rtimer = ""; //스트롤링 , 빨라짐 예방용
            },
            "mouseleave":function(){
                $.fn.r_timer();
            }
        });
        //페이드 인 디스크 클릭 이동
        $("#roll > .banner_disc >li").click(function(){
            let $now_roll_disc = $(this).index();
            let $roll = 534*$now_roll_disc;
            $("#roll > .banner_disc > li").css("background-color","black");
            $("#roll > .banner_disc > li").eq($now_roll_disc).css("background-color","#c3222b");
            $("#rolling").stop().animate({
                "top":-$roll+"px"
            },1000);
            $counts = $(this).index();
        })
        
    }

   
});