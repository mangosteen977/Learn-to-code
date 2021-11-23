$(function(){
    $.ajax({
        url:"./json/new_program.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function($vi_data,$vi_ok){
            $.fn.vi_newmovies($vi_data);
        },
        error:function(){
            console.log("data_error")
        }
    });
    $.fn.vi_newmovies = function($vi_data){
        let $vi_ul0 = "<ul id='vi_newmv0'>";
        let $vi_ul1 = "<ul id='vi_newmv1'>";
        let $vi_ul2 = "<ul id='vi_newmv2'>";
        let $vi_ul3 = "<ul id='vi_newmv3'>";
        $.map($vi_data,function($vi_val,$vi_no){
            if($vi_no<4){
                $vi_ul0 += '<li title="'+$vi_val["new_pg"]+'"><img src="'+$vi_val["new_thumb"]+'"></li>';
            }
            else if($vi_no<8){
                $vi_ul1 += '<li title="'+$vi_val["new_pg"]+'"><img src="'+$vi_val["new_thumb"]+'"></li>';
            }
            else if($vi_no<12){
                $vi_ul2 += '<li title="'+$vi_val["new_pg"]+'"><img src="'+$vi_val["new_thumb"]+'"></li>';
            }
            else{
                $vi_ul3 += '<li title="'+$vi_val["new_pg"]+'"><img src="'+$vi_val["new_thumb"]+'"></li>';
            }
        });
        $vi_ul0 += "</ul>";
        $vi_ul1 += "</ul>";
        $vi_ul2 += "</ul>";
        $vi_ul3 += "</ul>";
        $("#vi_newmv").html($vi_ul0+$vi_ul1+$vi_ul2+$vi_ul3);
    };
    $(".vi_weekmv").mouseenter(function(){
        let $vi_node = $(this).index();
        $(".vi_weekmv:eq("+$vi_node+")>.vi_la").fadeIn(300);
    });
    $(".vi_weekmv").mouseleave(function(){
        let $vi_node = $(this).index();
        $(".vi_weekmv:eq("+$vi_node+")>.vi_la").fadeOut(300);
    });
    let $vi_count = 0;
    $("#vi_more").click(function(){
        if($vi_count==0){
            $("#vi_newmv0").css("display","none");
            $("#vi_newmv1").css("display","none");
            $("#vi_newmv2").css("display","block");
            $("#vi_newmv3").css("display","block");
            $vi_count++;
        }
        else if($vi_count!=0){
            $("#vi_newmv2").css("display","none");
            $("#vi_newmv3").css("display","none");
            $("#vi_newmv1").css("display","block");
            $("#vi_newmv0").css("display","block");
            $vi_count=0;
        }

    });
    $("#vi_sideba").click(function(){
        window.open(" https://biz.skbroadband.com/","_blank");
    });
});