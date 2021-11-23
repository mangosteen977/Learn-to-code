$(function(){
    $.ajax({
        url:"./json/menu.json",
        cache:false,
        type:"GET",
        dataType:"JSON",
        success:function($data){
            $.fn.make_menus($data);
        },
        error:function(){
            alert("data_error")
        }
    })
    $.fn.make_menus = function($data){
        let $m_lis = "";
        $($data).map(function($m_no,$m_a){
            if($data[$m_no]["menu_list"]==""){ //세부메뉴값이 없는 경우 ul생략함.
                $m_lis += "<li>"+$m_a["main_menu"]+ "</li>";
            }
            else{
                $m_lis += "<li>"+$m_a["main_menu"]+"<ul class='somenu'>";
                $.map($data[$m_no]["menu_list"],function($a,$b){
                    $m_lis += "<li>"+$a+"</li>";
                });
                $m_lis += "</ul></li>";
            }
            $("#menu_a").html($m_lis);
        });
        $("#menu_a>li").bind({
            "mouseenter":function(){
                let $now_menu = $(this).index();
                $("#menu_a>li:eq("+$now_menu+")>ul").css({
                    "display":"block",
                    "border-top":"2px solid goldenrod"
                });
            },
            "mouseleave":function(){
                let $now_menu = $(this).index();
                $("#menu_a>li:eq("+$now_menu+")>ul").css({
                    "display":"none",
                    "border-top":"none"
                });
            }
        })

    };
});