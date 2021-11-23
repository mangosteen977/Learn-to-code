$(function(){
    const $menus = [
        {
            "main_menu":"훈련과정",
            "menu_list":["국민내일배움카드 훈련과정","디지털 신기술 훈련과정","기업훈련과정","디지털 기초역량훈련"]
        },
        {
            "main_menu":"지원제도",
            "menu_list":["정부지원사업안내","정부부처별 지원사업안내","일학습병행"]
        },
        {
            "main_menu":"일자리직업정보",
            "menu_list":["구인정보","자격정보","학과정보"]
        },
        {
            "main_menu":"지식정보센터",
            "menu_list":[ "인재뱅크","훈련기관평가정보","훈련/고용통계" ]
        }
    ];//(const $menus)

    //배열 출력하기
    $($menus).map(function($a,$b){// $b["main_menu"] 대메뉴
        let $ul_li = "<li>"+$b["main_menu"]+"<ol class='olcss' id='olcss"+$a+"'></ol></li>";
        $("#ulcss").append($ul_li);

        $($b["menu_list"]).map(function($c,$d){ //$d 소메뉴
            let $ol_li = "<li>"+$d+"</li>";
            $("#olcss"+$a).append($ol_li);
        });
    });//(배열출력)

    //배열 출력하기 선생님버전
    /*
    let $html; let html2; let html3;
    $($menus).map(function($a,$b){
        $html = "<li>"+$b["main_menu"]+"</li>";
        $html2 = "<ol class='olcss' id='olcss"+$a+"'></ol>"
        $("#ulcss").append($html);
        $("#ulcss>li").eq($a).append($html2);
        let $ids = "#olcss"+$a;

        $($b["menu_list"]).map(function($c,$d){
            $html3 = "<li>"+$d+"</li>";
            $($ids).append($html3);
        });
    });//(배열출력)
    */
    //대메뉴 클릭
    $("#ulcss>li").tap(function(){
        let $nd = $(this).index();
        $(".olcss").slideUp(500);
        $("#olcss"+$nd).stop().slideDown(500);
    });
    //햄버거 버튼 => 사이드메뉴
    $("#tbtn").tap(function(){
        let $offset = $("#main").offset().left;
        if($offset==0){
            $("#main").stop().animate({
                "left":"70%"
            },800);
        }
        else{
            $("#main").stop().animate({
                "left":"0"
            },800);
        }
    });//(tap function)


});//(JQ)