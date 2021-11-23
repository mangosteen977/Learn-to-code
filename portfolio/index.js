
const portfolio = {lists:
    [
        {thing:"./shop/thumb/view0.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/shop/",title:"한우사랑 메인페이지",subtitle:"한우전문 판매 쇼핑몰의 웹 페이지 입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Ajax, Json, SEO, PG",day:"2 Day",concept:"관리자 페이지를 통한 모든 데이터를 파서하여 메인페이지를 제작하였으며, 로그인, 회원가입, 상품 상세페이지, 상품 결제시스템 까지 적용한 쇼핑몰 입니다."},
        {thing:"./shop/thumb/view11.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/shop/admin/",title:"한우사랑 관리자 메인페이지",subtitle:"한우전문 판매 쇼핑몰의 관리자 전용 웹 페이지 입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Ajax, Json, Vue, Ckeditor, ECMA",day:"7 Day",concept:"동적인 웹 쇼핑몰을 제작하기 위한 관리자 페이지 이며, 배너, FAQ, NOTICE, 회원관리 상품등록등 다양한 기능을 사용할 수 있도록 제작된 페이지 입니다. 또한 전면 모든 페이지는 Back-end와 함께 제작하였으며, My-Sql를 이용하여 데이터를 저장 하였습니다.<br><b>둘러보기전용(데이터수정불가) ID : admin_view , PW : view031</b>"},
        {thing:"./shop/thumb/view1.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/shop/shop_login.html",title:"한우사랑 로그인페이지",subtitle:"한우전문 판매 쇼핑몰의 로그인 페이지 입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery",day:"0.4 Day",concept:"데이터베이스를 통해서 가입된 고객 정보를 확인하여 Back-end에서 세션 형태로 실제 로그인을 할 수 있도록 제작된 페이지 입니다."},
        {thing:"./shop/thumb/view2.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/shop/membership.html",title:"한우사랑 회원가입페이지",subtitle:"한우전문 판매 쇼핑몰의 회원가입 페이지 입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Address-API",day:"0.4 Day",concept:"Back-end에서 보안 관련 코드를 받아서 처리 하였으며, Step형태의 회원가입으로 제작 하였습니다. 또한 도로명 API를 사용하여 실제 도로명 주소를 입력할 수 있도록 하였으며, 해당 입력 데이터는 데이터베이스에 최종 저장 되도록 하였습니다."},
        {thing:"./shop/thumb/view3.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/shop/shop_product.html?pidx=15&goodsno=33241124",title:"한우사랑 제품상세페이지",subtitle:"한우전문 판매 쇼핑몰의 제품상세 페이지 입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Ajax, JSON",day:"0.7 Day",concept:"상품에 대한 모든 정보는 관리자 페이지에서 저장한 정보를 파서하여 데이터를 로드 하였으며, Back-end에서 전달할 수 있도록 고유 파라미터 값으로 key를 맞춰서 사용 하였습니다. 구매수량 및 옵션선택이 가능하며, 구매수량에 맞춰서 금액이 재 계산되도록 적용 하였습니다."},
        {thing:"./shop/thumb/view4.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/shop/shop_product.html?pidx=15&goodsno=33241124",title:"한우사랑 제품결제페이지",subtitle:"한우전문 판매 쇼핑몰의 제품결제 페이지 입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Ajax, JSON, Address-API, PG API",day:"0.7 Day",concept:"주문자 정보 및 배송지 정보, 결제수단등 다양한 정보를 입력 받도록 하였으며, 해당 필수값을 모두 입력 하였을 경우 최종 order 페이지에서 이니시스 결제 시스템이 작동 되도록 제작된 페이지 입니다."},
        {thing:"./shop/thumb/view5.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/event/picture.html",title:"숨은그림찾기 페이지",subtitle:"숨은그림찾기 게임을 통해 쿠폰당첨이벤트에 참여할 수 있도록 제작된 웹 페이지 입니다.",tools:"HTML, CSS, Javascript, Jquery",day:"0.5 Day",concept:"고객 이벤트 페이지로 상품 홍보 및 트래픽 증가 효과를 모두 볼 수 있도록 제작된 회원전용 이벤트 페이지 입니다."},
        {thing:"./shop/thumb/view10.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/portfolio/event/index.html",title:"이벤트 룰렛PC 페이지",subtitle:"룰렛을 돌려 포인트 당첨이벤트를 참여할 수 있도록 제작된 웹 페이지 입니다.",tools:"HTML, CSS, Jquery",day:"0.3 Day",concept:"랜덤 함수를 이용하여 범위 숫자를 체크하게 되며, 해당 수치에 맞춰서 회전각도를 적용한 이벤트 게임 페이지 입니다."},
        {thing:"./shop/thumb/view10_1.png",type:"Mobile",link:"http://mangsteen977.dothome.co.kr/portfolio/event/mindex.html",title:"이벤트 룰렛Mobile 페이지",subtitle:"룰렛을 돌려 포인트 당첨이벤트를 참여할 수 있도록 제작된 모바일 페이지 입니다.",tools:"HTML, CSS, Jquery",day:"0.3 Day",concept:"PC용 룰렛과 같은 엔진을 사용하였으며, 추가로 css에 미디어쿼리를 이용하여 모바일 전용으로 제작된 이벤트 페이지 입니다."},
        {thing:"./shop/thumb/view13.png",type:"Mobile",link:"http://mangsteen977.dothome.co.kr/minimal/",title:"미니멀 Mobile 메인페이지",subtitle:"여성의류 전문 쇼핑몰의 모바일 페이지 입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Ajax, Json",day:"1 Day",concept:"디자인 및 퍼블리싱은 이미 외부에서 제작이 되어 있었으며, 기획에 맞춰서 해당 페이지를 수정 및 스크립트 코드를 재구성하는 형태로 제작된 페이지 입니다."},
        {thing:"./shop/thumb/view7.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/public_html/",title:"헬로우펫PC 메인페이지",subtitle:"반려동물 용품 및 사료를 판매하는 쇼핑몰 웹 페이지입니다.",tools:"HTML, CSS, Javascript, Jquery, Ajax, Json",day:"1 Day",concept:"팀프로젝트로 제작되었으며, 구매하는 소비자들의 패턴과 원스톱 쇼핑 형태를 부각 시키고자 전체적으로 기획 및 구성을 하였으며, Fade효과 및 롤링 상품 출력등 다양한 기술 형태를 적용 하였습니다."},
        {thing:"./shop/thumb/view12.png",type:"Mobile",link:"http://mangsteen977.dothome.co.kr/middle/",title:"헬로우펫Mobile 메인페이지",subtitle:"반려동물 용품 및 사료를 판매하는 쇼핑몰 모바일 페이지입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Ajax, Json",day:"1 Day",concept:"다양한 디바이스에 적용될 수 있도록 구성하였으며, 모바일 환경에서의 사용자 편의를 고려하여 Fade효과 및 롤링 상품 출력등 다양한 기술 형태를 적용 하였습니다."},
        {thing:"./shop/thumb/view9.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/www/",title:"OCN 메인페이지",subtitle:"OCN의 메인 웹페이지 입니다. ",tools:"HTML, CSS, Jquery, Javascript, JSON",day:"1 Day",concept:"기존 OCN 사이트를 리뉴얼 하여, 팀별 프로젝트를 진행 하였습니다."},
        {thing:"./shop/thumb/view8.png",type:"pc",link:"http://mangsteen977.dothome.co.kr/light/public_html/",title:"투데이라이트 메인페이지",subtitle:"조명을 판매하는 쇼핑몰의 웹 페이지입니다.",tools:"HTML, CSS, SCSS, Javascript, Jquery, Ajax, Json",day:"2 Day",concept:"팀프로젝트로 제작되었으며, Main-Page 1개, Sub-page 3개로 이루어져 있으며, 로그인, Q&A 로 구성되어 있습니다. Q&A는 입력 후 Back-end로 전달되어 JSON이 자동으로 파싱되도록 설계 되어 있습니다."},
        {thing:"./shop/thumb/view14.png",type:"PC",link:"http://mangsteen977.dothome.co.kr/mango/to_do_list.html",title:"TO DO LIST페이지",subtitle:"TO DO LIST 페이지 입니다.",tools:"HTML, CSS, SCSS, Vue.js",day:"0.5 Day",concept:"Vue.js를 이용하였으며, To Do List를 작성하고 삭제할 수 있습니다. DONE, YET으로 상태 조절이 가능합니다. 상태에 따른 To Do List 필터링 기능이 있습니다. 배열형태로 데이터를 생성하여 이용했습니다. 저장소 혹은 백엔드 파일이 없어서 일회성 데이터 입니다."}
    ]
};

const skills = [
    {"HTML":"DOCTYPE을 이해하고 디자인에 맞춰 작업이 가능합니다.<br>name,id,class분류를 알고 있으며, Method에 대한 POST,GET에 대한 원리도 알고 있습니다.<br>META를 이용한 SEO 작업과 Markup 등 다양한 요소를 구성할 수 있습니다."},
    {"CSS":"CSS의 다양한 Rule Set을 사용할 수 있습니다.<br>각종 media 쿼리를 이용하여 여러가지 Device 제작 경험도 풍부합니다."},
    {"SCSS":"기본적으로 전처리기로 작성이 가능하며, CSS 컴파일도 할 수 있습니다.<br>그 외에 코드 중복을 최소화 하며 문법에 대한 작성 및 유지보수 경험도 풍부합니다.<br>변수, 함수 모두 구현이 가능합니다."},
    {"JavaScript":"함수,메소드,클래스,프로토타입,이벤트,루프 등 다양하게 응용이 가능합니다.<br>파라미터 데이터 활용과 Back-end와의 작업도 풍부합니다."},
    {"Jquery":"Javascript를 기본으로 하여 DOM, Node에 대한 다양한 활용 프로그램이 가능하며,<br>배열에 대한 중급 이상의 활용 능력을 가지고 있습니다."},
    {"ECMA":"import와 export를 기본으로 코드를 작성하며, Class와 Module모두 사용 가능합니다.<br>fetch를 이용한 배열 데이터를 활용 할 수 있습니다."},
    {"Ajax":"동기화,비동기화 통신이 가능합니다.<br>동적인 화면 출력 및 표시 정보와 상호작용을 할 수 있는 DOM, NODE 모두 사용이 가능합니다.<br>기본적인 통신개념을 알고 있으며, Javascript, Jquery 모두 활용 할 수 있습니다.<br>XML, JSON 파일에 대한 파서 개념도 있으며,send 함수를 통해 데이터 전송도 가능합니다."},
    {"Vue":"Template과 Component를 사용할 수 있습니다.<br>배열 데이터를 기본으로 화면 렌더링을 하였으며,<br>각종 이벤트 함수를 응용할 수 있습니다."},
    {"Git":"프로젝트 구성 및 Push, Pull request 같은 이벤트에 반응하여 자동으로 작업(배포 등)을 경험 하였습니다.<br>Git 기본 사용공간은 Public을 기본으로 하였습니다."},
    {"XML&JSON":"태그와 다차원 배열 모두 경험 하였으며,<br>MySQL Database 값에 대한 파싱을 통한 데이터 출력 지식도 습득 하였습니다."},
    {"API":"도로명 주소, 지도, 결제 시스템 등 다양한 API 경험이 있으며,<br>웹사이트 조건 맞게 커스텀도 가능합니다."},
    {"Responsive Web":"화면 너비에 따라 유동적으로 레이아웃을 변화 시킬 수 있으며,<br>Cross Browsing 기술 플랫폼으로 제작할 수 있습니다."},
    {"Etc":"Visual Studio Code 에디터를 주로 사용하였으며,<br>그 외에 관리자 페이지에 대한 적용 원리 지식도 있습니다."}
];
function down_page(els,num){
    $.fn.for_down_page(els,num);
};
function menu_popup(type,link){
    let open_type = "_blank";
    if(type==1){
        open_type = "width=200; height=150;"
    }
    window.open(link,"",open_type);
}
function mail_send(){
    if(!send_mail.pernm.value){
        alert("담당자 성함을 입력해주세요."); send_mail.pernm.focus();
    }
    else if(!send_mail.pertel.value){
        alert("담당자 연락처를 입력해주세요."); send_mail.pertel.focus();
    }
    else if(!send_mail.peremail.value){
        alert("담당자 이메일을 입력해주세요."); send_mail.peremail.focus();
    }
    else if(!send_mail.pertext.value){
        alert("이메일 내용을 입력해주세요."); send_mail.pertext.focus();
    }
    else{
        alert("감사합니다:) 최대한 빠르게 회신하겠습니다!")
        send_mail.method="POST";
        send_mail.action="./mailto.php";
        send_mail.submit();
    }
}
$(function(){
    //하단이동버튼
    $.fn.for_down_page = function(els,num){
        $("html,body").animate({
            "scrollTop":($("#"+els).offset().top-50)+"px"
        }, 700);
        $(".header>.menu>ul>li").css("color","black");
        $(".header>.menu>ul>li").eq(num).css("color","#E6F285");
    };
    //about_me>>image
    const $text_about_me2 = ["97.09.10","INTJ","AB type"];
    const $text_about_me1 = ["BIRTH","MBTI","Blood-Type"];
    $("#key_word>span").bind({
        "mouseenter":function(){
            let $img_type = $(this).index();
            $("#about_me_img").attr("src","./image/info"+($img_type+1)+".png");
            $("#key_word>span").eq($img_type).text($text_about_me2[$img_type]);
            $("#key_word>span").eq($img_type).css("background-color","#e6f285")
        },
        "mouseleave":function(){
            let $img_type = $(this).index();
            $("#about_me_img").attr("src","./shop/ico/ico.png");
            $("#key_word>span").eq($img_type).text($text_about_me1[$img_type]);
            $("#key_word>span").eq($img_type).css("background-color","#ccc")
        }
    });
    $.fn.percent_for_skill = function(){
       let $span_ea = $("#view_skill>span").length;
       let $r=0;
       while($r<$span_ea){
        let $span_per = $("#view_skill>span:eq("+$r+")>label").eq(1).attr("per")
        $(".skill_per_div").eq($r).stop().animate({
            "width":$span_per
        },1000);
        $r++;
       };
    };
    $.fn.replay_skill = function(){
        let $span_ea = $("#view_skill>span").length;
       let $r=0;
       while($r<$span_ea){
        $(".skill_per_div").eq($r).stop().animate({
            "width":"10px"
        },3000);
        $r++;
       };
    };
    //skill퍼센트
    $("#about_me").bind({
        "mouseenter":function(){
            $.fn.percent_for_skill();
        },
        "mouseleave":function(){
            $.fn.replay_skill();
        }
    })
    //skill출력
    $.map(skills,function($arr,$no){
        $.map(skills[$no],function($val,$k){
                let $sboxs = '<ul title="'+$k+'" class="ul_skills"><li>'+$k+'</li><li>'+$val+'</li></ul>';
                $("#skill_box").append($sboxs);
        });
    });
    //skill 클릭
    $(".ul_skills").click(function(){
        let $skill_node = $(this).index();
        $(".ul_skills:eq("+$skill_node+")>li:eq(1)").slideToggle(200);
    });
    //portfolio출력
    //select
    $.map(portfolio.lists,function($array,$node){
        $("#port_select").append("<option value='"+$node+"'>"+$array["title"]+"</option>");
    });
    //site
    $.fn.port_print = function($node){
        let $port_boxs = '<label class="port_bg">\
                            <img src="'+portfolio.lists[$node]["thing"]+'">\
                        </label>\
                        <ul>\
                            <li>'+portfolio.lists[$node]["subtitle"]+'</li>\
                            <li><img src="./image/tool.svg" class="port_icon">'+portfolio.lists[$node]["tools"]+'</li>\
                            <li><img src="./image/timer.svg" class="port_icon">'+portfolio.lists[$node]["day"]+'</li>\
                            <li>'+portfolio.lists[$node]["concept"]+'</li>\
                            <li class="view_port_site" types="'+portfolio.lists[$node]["type"]+'" links="'+portfolio.lists[$node]["link"]+'">페이지 이동</li>\
                        </ul>';
        $("#port_box").html($port_boxs);
        //페이지 이동 클릭
        $(".view_port_site").click(function(){
            if($(this).attr("types")=="Mobile"){
                window.open($(this).attr("links"),"","width=380; height=600;");
            }
            else{
                window.open($(this).attr("links"),"_new");
            }
        })
    };
    //portfolio[0]출력
    $.fn.port_print(0);
    //select>>port출력
    $("#port_select").change(function(){
        $.fn.port_print($(this).val());
    });
    var $a = document.getElementById("map");
    var $b = {
        center:new kakao.maps.LatLng(37.592609, 127.016400),
        level:5
    }
    // 지도 api
    let $map_code = {
        center:new kakao.maps.LatLng(37.592609, 127.016400),
        level:4
    }
    let $maps = new kakao.maps.Map(document.getElementById("map"),$map_code);
    let $map_markup = new kakao.maps.Marker({
        position:new kakao.maps.LatLng(37.592609, 127.016400)
    });
    $map_markup.setMap($maps);
});