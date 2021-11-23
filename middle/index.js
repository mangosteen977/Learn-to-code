$(function(){
    //햄버거 메뉴
    let $ham = 0;
    $("#ham_menu").click(function(){
        if($ham==0){
            $("#pop_menu").stop().animate({"left":"0"},300);
            $ham++;
        }
        else{
            $("#pop_menu").stop().animate({"left":"-100%"},300);
            $ham--;
        }
    });
    //검색 버튼
    $("#ser_btn").click(function(){
        $("#search").slideToggle(500);
        if($("#search").css("display")=="block"){
            $("#search").css("display","flex");
        }
    });
    //배너 타이머(5s)
    let $no = 0;
    let $timer;
    $timer = function(){
        $("#ba_img_box>span").fadeOut(300);
        $("#ba_img_box>span").eq($no).fadeIn(300);
        $no++;
        if($no>2){ $no=0;}
        setTimeout($timer,5000);
    }
    setTimeout($timer(),5000);

    //뉴펫
    $.fn.new_pet = function(){
        $.ajax({
            url:"./json/new_pet.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.fn.new_pet_print($data);
            },
            error:function(){
                console.log("error_data_copyright");
            }
        });
    }
    $.fn.new_pet();
    $.fn.new_pet_print =function($data){
        let $cats = '<div class="imgs_file" >'
        let $dogs = '<div class="imgs_file" >'
        $.map($data,function($a,$n){
            if($a["pet_part"]=="cat"){
                $cats += '<span><label><img src="'+$a["pet_img"]+'"></label><label>'+$a["pet_title"]+'</label></span>';
            }
            else if($a["pet_part"]=="dog"){
                $dogs += '<span><label><img src="'+$a["pet_img"]+'"></label><label>'+$a["pet_title"]+'</label></span>';
            }
        });
        $cats += '</div>';
        $dogs += '</div>';
        $("#pets").append($dogs);
        $("#pets").append($cats);
    };
    //뉴펫 클릭
    $("#tags>span").click(function(){
        let $now = $(this).index();
        $(".imgs_file").css("display","none");
        $(".imgs_file").eq($now).css("display","flex");
        $("#tags>span").css("border-bottom","1px solid black");
        $("#tags>span").eq($now).css("border-bottom","1px solid white");
    });

    //베스트 프로덕트 best product
    $.fn.best = function(){
        $.ajax({
            url:"./json/best_product.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.fn.best_item($data);
            },
            error:function(){
                console.log("error_data_copyright");
            }
        });
    }
    $.fn.best();
    $.fn.best_item =function($data){
        let $best_div ="";
        $.map($data["best_product"],function($a,$n){
            $best_div = '<div><span><img src="'+$a["product_img"]+'"></span>\
            <span><label>'+$a["product_nm"]+'</label>\
            <label>'+$a["product_sample"]+'</label>\
            <label>'+$a["product_money"]+'</label></span></div>';
            $("#p_img").append($best_div);
        });
    };
    //리뷰
    $.fn.re = function(){
        $.ajax({
            url:"./json/review.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.fn.review($data);
            },
            error:function(){
                console.log("error_data_copyright");
            }
        });
    }
    $.fn.re();
    $.fn.review =function($data){
        let $re_span = "";
        $.map($data["reviews"],function($v,$n){
            if($v[0].length>15){
                $re_span = '<span>'+$v[0].substr(0,15)+"..."+'</span>';
            }
            else{
                $re_span = '<span>'+$v[0]+'</span>';
            }
            $("#reviews").append($re_span);
        });
    };

    //리뷰 흐르게
    $.fn.flow_re = function(){
        $("#reviews").stop().animate({
            "top":"-40px"
        },300,function(){
            let $re_clone = $("#reviews>span").eq(0).clone();
            $("#reviews>span").eq(0).remove();
            $("#reviews").append($re_clone);
            $("#reviews").css("top","0px");
        });
    };
    let $timer2 = setInterval(function(){
        $.fn.flow_re();
    },5000);
    setTimeout($timer2,5000);

    //QnA
    $.fn.qna = function(){
        $.ajax({
            url:"./json/qanda.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.fn.qnas($data);
            },
            error:function(){
                console.log("error_data_copyright");
            }
        });
    }
    $.fn.qna();
    $.fn.qnas =function($data){
        let $ul_li = '<ul>';
        $.map($data,function($a,$n){
            let $date = "";
            let $qws = "";
            $.map($data[$n],function($v,$k){
                switch($k){
                    case "q_date":
                        $date = $v.substr(0,10);
                    break;
                    case "q_subject":
                        $qws = $v.substr(0,10)+"...";
                    break;
                }
            });
            $ul_li += '<li><span>'+$qws+'</span><span>'+$date+'</span></li>';
        });
        $ul_li += '</ul>';
        $("#qna").append($ul_li);
    };
});