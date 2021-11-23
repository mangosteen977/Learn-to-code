$(function(){
    //popup닫기
    $("#close_popup").tap(function(){
        $("#popup").fadeOut(300);
    });
    //햄버거 메뉴 열기
    $("#hambuger").tap(function(){
        $("#ham_menu").animate({
            "left":"0"
        },700);
    });
    //햄버거 메뉴 닫기
    $("#ham_close").tap(function(){
        $("#ham_menu").animate({
            "left":"-480px"
        },700);
    });
    //찾기 탑메뉴
    $("#ser_btn").tap(function(){
        $("#top_search").slideToggle(300);
        $("#top_search").css("display","flex");
    });
    //상품검색
    $("#product_search").tap(function(){
        if(!$("#product_search_input").val()){
            alert("찾을 상품명을 입력해 주세요");
        }
    });
    //오른쪽으로 흐르는 배너
    $.fn.flow_right = function(){
        $("#banners").stop().animate({
            "left":"-100%"
        },700,function(){
            let $li_one = $("#banners>li").eq(0).clone();
            $("#banners>li").eq(0).remove();
            $("#banners").css("left","0");
            $("#banners").append($li_one);
        });
    };
    //배너밀기
    $("#banners").bind({
        "swipeleft":function(){
            $.fn.flow_right();
        },
        "swiperight":function(){
            let $li_one = $("#banners>li").eq(1).clone();
            $("#banners>li").eq(1).remove();
            $("#banners").css("left","-100%");
            $("#banners").prepend($li_one);
            $("#banners").stop().animate({
                "left":""
            },700);
        }
    })
    //10초마다 오른쪽으로 흐르기
    let $timer = setInterval(function(){
        $.fn.flow_right();
    },10000);
    setTimeout($timer,10000);
    //배너 링크 연결
    $("#banners>li").click(function(){
        location.href = $(this).attr("links");
    });
    //소개배너*4 json 출력
    $.fn.in_product = function(){
        $.ajax({
            url:"./banner.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.fn.banner_four($data);
            },
            error:function(){
                console.log("error_data!!");
            }
        });
    }
    $.fn.in_product();
    $.fn.banner_four = function($data){
        let $banner_img = "";
        $.map($data["banners"],function($a,$b){
            $banner_img = '<img src="'+$a["banner_img"]+'" id="minis'+$b+'" title="'+$a["help_info"]+'" links="'+$a["banner_link"]+'">';
            $("#product2>div>span").eq($b).append($banner_img);
            //클릭시 이동
            $("#minis"+$b).tap(function(){
                window.open($(this).attr("links"),"_blank");
            });
        });
    };
    $("#btn_search2").tap(function(){
        if(!$("#number_ten").val()){
            alert("제품 시리얼 넘버 번호를 입력해 주시길 바랍니다."); $("#number_ten").focus();
        }
        else if(isNaN($("#number_ten").val())==true){
            alert("제품 시리얼넘버는 숫자만 입력하세요."); $("#number_ten").focus();
        }
        else if($("#number_ten").val().length!=10){
            alert("정확한 제품 시리얼 넘버를 입력하십시오."); $("#number_ten").focus();
        }
        else{
            $.ajax({
                url:"./nember_check.php",
                caches:false,
                type:"POST",
                dataType:"JSON",
                contentType:"application/x-www-form-urlencoded",
                data:"number_key=gigabyte_korea&number_no="+$("#number_ten").val(),
                success:function($data,$ok){
                    if($data=="success_number"){
                        alert("해당 코드는 정상적으로 활성화 되었습니다.");
                    }
                    else if($data=="overlap_number"){
                        alert("해당 코드는 이미 등록된 제품입니다.");
                    }
                },
                error:function(){
                    console.log("DATA_ERROR!!!")
                }
            });
        };
    });
});