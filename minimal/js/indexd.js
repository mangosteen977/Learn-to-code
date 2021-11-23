$(function(){
    
    //header_menu.html
    $("#login-member").click(function(){
       $("#mem_login").css("display","block");
    })
    $("#cart").click(function () {
        location.href = "./cart.html";
    });
    $("#c_mlogo").click(function(){
        location.href="./index.html";
    });

    $("#c_search").click(function(){
        $("#ser_txt").val("");
        $("#c_searchdiv").slideToggle();
    });
    
    $("#c_frm").submit(function(){
        if(!$("#ser_txt").val()){
            alert("검색어를 입력해주세요.");return false;
        }
        if($("#ser_txt").val().length<2){
            alert("검색어를 2자리 이상 입력해주세요.");return false;
        }
        else{
            return true;
        }
    });

    //pop_menu.html
    $("#c_menu").click(function() {
        $("#pop_menu_bg_outline").stop().slideToggle(600);
    });
    $.fn.icos = function(){
        $.ajax({
            url:"./json/ico.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.map($data.c_ico,function(a,b,c){
                    $(".c_contents>ul").append("<li>"+"<span class='c_icoli1'>"+"<img src="+a["img"]+">"+"</span>"+"<span class='c_icoli2'>"+a["name"]+"</span>"+"</li>");
                })
                $("#totalicon>li").eq(1).click(function(){
                    //cart
                    location.href = "./cart.html";
                })
            },
            error:function(){ console.log("error") }
        })
    }; $.fn.icos();
    $(".c_d").click(function(){
        let $node = $(this).index();
        $("#smenus>li:eq("+$node+")>.c_submenus").slideToggle(600);
        if($(this).find(".c_arimg").attr("src")=="img/arr1.png"){
            $(this).find(".c_arimg").attr("src","img/arr2.png");
        }
        else {$(this).find(".c_arimg").attr("src","img/arr1.png");}
    });

    //contnent_banner.html
    let $c_wid = $(".c_mbanul>li").width();
    let $c_leng = $(".c_mbanul>li").length;
    $c_wid *= $c_leng;
    $(".c_mbanul").width($c_wid);
    let $c_mset;
    //flow_banner
    let $start,$moving;
    $(".c_mbandiv").bind({
        "touchstart": function ($a) {
            $start = $a.touches[0].pageX;
        },
        "touchend":function($b){
            $moving = $start-$b.changedTouches[0].pageX;
            if($moving>0){$.fn.go_to_left();}
            else{$.fn.go_to_right();}
        }
    });
    $.fn.go_to_left = function(){
        clearInterval($c_mset);
        $(".c_mbanul").animate({"margin-left":"0px"},300);
        $(".c_mbanul>li:first-child").animate({"margin-left":-$c_wid + "px"},300,function(){
            $(".c_mbanul li:first-child").css({"margin-left":""}).appendTo(".c_mbanul");
        });
        c_mtimer(); 
    };
    $.fn.go_to_right = function(){
        clearInterval($c_mset);
        $(".c_mbanul>li:last-child").css({"margin-left":-$c_wid + "px"}).prependTo(".c_mbanul");
        $(".c_mbanul>li:first-child").animate({"margin-left":"0px"},300);
        c_mtimer();
    };
         
    function c_mtimer(){
        $c_mset = setInterval($.fn.go_to_left,5000);
    }
    c_mtimer();
    
    //content_weekly.html
    $.fn.weekly=function(){
        $.ajax({
            url:"./json/best.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.fn.print_weekly($data.best_product)
            },
            error:function(){ console.log("error") }
        })
    }
    $.fn.weekly();
    $.fn.print_weekly=function($data){
        let $pd_imgs = "";
        //pd_img_box
        $.map($data,function(a,b){
            if(a["a_wkdp"]==""){
                $pd_imgs = '<div class="a_mwpoutline3">\
                            <div class="a_mwproduct">\
                                <ul>\
                                    <li class="a_mwproduct1"><img src="'+a["a_wkimg"]+'"></li>\
                                    <li class="a_mwproduct2">'+a["a_wktitle"]+'</li>\
                                    <li class="a_mwproduct3">'+a["a_wkap"]+'</li>\
                                    <li class="a_mwproduct4" style="width:45%;"></li>\
                                    <li class="a_mwproduct4" style="width:55%;"></li>\
                                    <li class="a_mwproduct5"><img src="'+a["a_wkico"]+'"></li>\
                                </ul>\
                            </div>\
                        </div>'
            }
            else{
                $pd_imgs = '<div class="a_mwpoutline3">\
                                <div class="a_mwproduct">\
                                    <ul>\
                                        <li class="a_mwproduct1"><img src="'+a["a_wkimg"]+'"></li>\
                                        <li class="a_mwproduct2">'+a["a_wktitle"]+'</li>\
                                        <li class="a_mwproduct3"><strike>'+a["a_wkpd"]+'</strike></li>\
                                        <li class="a_mwproduct4" style="width:45%;">'+a["a_wkdp"]+'</li>\
                                        <li class="a_mwproduct4" style="width:55%;">'+a["a_wkap"]+'</li>\
                                        <li class="a_mwproduct5"><img src="'+a["a_wkico"]+'"></li>\
                                    </ul>\
                                </div>\
                            </div>'
            }
            $("#productoutline").append($pd_imgs);
            $("#pds_week_disc").append('<li class="a_mwdli1 pddisc"></li>');
        })
    }
    //product_box flow(width==>175px)
    let $disc_num1 = 1;
    $.fn.flow_for_pd_box = function(){
        if($disc_num1>7){
            $disc_num1 = 0;
        }
        $("#productoutline").stop().animate({
            "left":"-175px"
        },200,function(){
            $(".pddisc").css("background-color","#ff8679");
            $(".pddisc").eq($disc_num1).css("background-color","#628dc8");
            $disc_num1++;
            let $pds_clone = $("#productoutline>div").eq(0).clone();
            $("#productoutline>div").eq(0).remove();
            $("#productoutline").append($pds_clone);
            $("#productoutline").css("left","0px");
        });
        setTimeout($.fn.flow_for_pd_box, 10000);
    }
    $.fn.flow_for_pd_box();

    //content_weekly,new.html 공통
    //title
    $.fn.fade_inout=function(){
        $(".fadeinout_li").stop().fadeOut(function(){
            $(".fadeinout_li").stop().fadeIn();
        });
        setTimeout($.fn.fade_inout, 10000);
    }
    $.fn.fade_inout();


    //content_new.html
    $.fn.new=function(){
        $.ajax({
            url:"./json/new.json",
            cache:false,
            type:"GET",
            dataType:"JSON",
            success:function($data,$ok){
                $.fn.print_new($data.new_product)
            },
            error:function(){ console.log("error") }
        })
    }
    $.fn.new();
    $.fn.print_new=function($data){
        let $pd_imgs2 = "";
        //pd_img_box
        $.map($data,function(a,b){
            if(a["a_newdp"]==""){
                $pd_imgs2 = '<div class="a_mnpoutline3">\
                            <div class="a_mwproduct">\
                                <ul>\
                                    <li class="a_mwproduct1"><img src="'+a["a_newimg"]+'"></li>\
                                    <li class="a_mwproduct2">'+a["a_newtitle"]+'</li>\
                                    <li class="a_mwproduct3">'+a["a_newpd"]+'</li>\
                                    <li class="a_mwproduct4" style="width:45%;"></li>\
                                    <li class="a_mwproduct4" style="width:55%;"></li>\
                                    <li class="a_mwproduct5"><img src="'+a["a_newico"]+'"></li>\
                                </ul>\
                            </div>\
                        </div>'
            }
            else{
                $pd_imgs2 = '<div class="a_mnpoutline3">\
                                <div class="a_mwproduct">\
                                    <ul>\
                                        <li class="a_mwproduct1"><img src="'+a["a_newimg"]+'"></li>\
                                        <li class="a_mwproduct2">'+a["a_newtitle"]+'</li>\
                                        <li class="a_mwproduct3"><strike>'+a["a_newpd"]+'</strike></li>\
                                        <li class="a_mwproduct4" style="width:45%;">'+a["a_newdp"]+'</li>\
                                        <li class="a_mwproduct4" style="width:55%;">'+a["a_newap"]+'</li>\
                                        <li class="a_mwproduct5"><img src="'+a["a_newico"]+'"></li>\
                                    </ul>\
                                </div>\
                            </div>'
            }
            $("#news").append($pd_imgs2);
            $("#pds_new_disc").append('<li class="a_mndli1 newdisc"></li>');
        })
    }

    //product_box flow(width==>175px)
    let $disc_num2 = 1;
    $.fn.flow_for_pd_box2 = function(){
        if($disc_num2>7){
            $disc_num2 = 0;
        }
        $("#news").stop().animate({
            "left":"-175px"
        },200,function(){
            $(".newdisc").css("background-color","#ff8679");
            $(".newdisc").eq($disc_num2).css("background-color","#628dc8");
            $disc_num2++;
            let $pds_clone = $("#news>div").eq(0).clone();
            $("#news>div").eq(0).remove();
            $("#news").append($pds_clone);
            $("#news").css("left","0px");
        });
        setTimeout($.fn.flow_for_pd_box2, 10000);
    }
    $.fn.flow_for_pd_box2(); 

    //footer_bottom.html
    $("#ebox4_id>li").click(function () {
        location.href = $(this).attr("ww");
    })
     
    //pop_member.html
    $("#not_a_member_page").click(function () {
        $("#mem_login").css("display", "none");
        $("#pop_not_a_member").css("display", "block");
    })
    $("#member_close").click(function () {
        $("#mem_login").css("display", "none");
    })
    $("#d_m_login").click(function(){
        let $id_login = $("#d_m_nm").val();
        let $pw_login = $("#d_m_pw").val();
        if(!$id_login){
            alert("아이디를 입력하세요.");
        }
        else if($id_login.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g) != null){
            alert("영문 혹은 숫자 아이디를 입력하세요");
        }
        else if(!$pw_login){
            alert("패스워드를 입력하세요.");
        }
        else{
            $.ajax({
                url:"./php/m_login.php",
                cache:false,
                type:"POST",
                data:"user_nm="+$id_login+"&user_pw="+$pw_login,
                dataType:"TEXT",
                contentType:"application/x-www-form-urlencoded",
                success:function($sign){
                   switch($sign){
                       case "cancel":
                           alert($id_login+"님 로그인 하셨습니다.");
                           location.href="./index.html";
                        break;
                        case "ok":
                            alert("해당 고객님은 가입이 되지 않으셨습니다")
                            break;
                   }
                },
                error:function(error){
                    console.log(error)
                }
            })
        }
    })
     
    //pop_nonmember.html
     $("#nonmember_close").click(function () {
        $("#pop_not_a_member").css("display", "none");
    });
    let $lis_num = 0;
    $.fn.nomemslis = function(){
        if($lis_num>4){
            $lis_num = 0;
        }
        $("#nonmems>li").css("display","none");
        $("#nonmems>li").eq($lis_num).css("display","block");
        $lis_num++;
        setTimeout($.fn.nomemslis,5000);
    };$.fn.nomemslis();
    $("#d_mno_mem").click(function(){
        let $no_mem_nm = $("#d_mno_nm").val();
        let $no_order_num1 = $("#d_mno_num1").val();
        let $no_order_num2 = $("#d_mno_num2").val();
        let $no_mem_pw = $("#d_mno_pw").val();
        if(!$no_mem_nm){
            alert("이름을 입력해주세요");
        }
        else if(!$no_order_num1 || !$no_order_num2){
            alert("주문번호를 입력하세요");
        }
        else if($no_order_num1.length!=6 || $no_order_num2.length!=7){
            alert("주문번호를 앞 6자리, 뒷 7자리 모두 입력하세요");
        }
        else if(isNaN( Number($no_order_num1))==true||isNaN(Number($no_order_num2))==true){
            alert("주문번호는 숫자만 입력해주세요");
        }
        else if(!$no_mem_pw){
            alert("패스워드를 입력하세요")
        }
        else{
            $.ajax({
                url:"./php/m_order.php",
                cache:false,
                type:"POST",
                data:"order_name="+$no_mem_nm+"&order_number="+$no_order_num1+$no_order_num2+"&order_pass="+$no_mem_pw,
                dataType:"TEXT",
                contentType:"application/x-www-form-urlencoded",
                success:function($sign){
                    console.log($sign)
                   switch($sign){
                       case "ok":
                           alert("잠시만 기다려 주세요! 출력 중입니다");
                        break;
                        case "no":
                            alert("해당 정보는 확인 되지 않습니다")
                            break;
                   }
                },
                error:function(error){
                    console.log(error)
                }
            })
        }
    })
         
});//JQ_function

