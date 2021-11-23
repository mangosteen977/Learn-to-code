$(function(){
    //게임 스타트
    $("#start").click(function(){
        $(".dark").fadeOut(350);
    });
    //정답 카운트
    $(".aw").click(function(){
        let $ct = $(this).index();
        let $ok_sign = '<img src="./game/answer.gif" class="find">';
        $(".aw").eq($ct).html($ok_sign);
        if($(".find").length>4){
            setTimeout($.fn.result,500,1);
            $("#game_board").unbind("click");
        }
    });
    //오답 카운트
    let $error = 5;
    $("#game_board").click(function(){
        $error--;
        $("#hand_count").attr("src","./game/no_"+$error+".png");
        if($error==0){
            $.fn.result(2);
            $("#game_board").unbind("click");
            $(".aw").unbind("click");
        }
    });
    //결과창 출력
    $.fn.result = function($ct_part){
        if($ct_part==1){
            $("#win").fadeIn(300);
            $("#gift").slideDown(300);
            //입력창 위치로 스크롤
            $("html").scrollTop($("#gift").offset().top+"px");
        }
        else if($ct_part==2){
            $("#fail").fadeIn(200);
        }
    }
    //우편번호 API연동
    $("#find_addr").postcodifyPopUp();
});
//당첨 정보 기입
function event_agree(){
    let a = new XMLHttpRequest();
    a.open("GET","./event_agree.txt",true);
    a.onreadystatechange = function(){
        if(a.readyState===XMLHttpRequest.DONE && a.status===200){
            let b = a.response;
            document.getElementById("event_agree").innerHTML = b;
        }
    }
    a.send();
}
function event_ck(){
    gift_form.e_tel.value = document.getElementById("tel0").value+document.getElementById("tel1").value+document.getElementById("tel2").value;
    if(!gift_form.e_name.value){
        alert("고객명을 입력해주세요."); gift_form.e_name.focus();
    }
    else if(!gift_form.e_tel.value){
        alert("휴대폰 번호를 입력해주세요."); gift_form.e_tel.focus();
    }
    else if(gift_form.e_tel.value.length!=11){
        alert("11자리의 정확한 휴대폰 번호를 입력해주세요."); gift_form.e_tel.focus();
    }
    else if(isNaN(gift_form.e_tel.value)==true){
        alert("정확한 휴대폰 번호를 입력해주세요."); gift_form.e_tel.focus();
    }
    else if(document.getElementById("tel0").value!="010" && document.getElementById("tel0").value!="011" && document.getElementById("tel0").value!="017"){
        alert("유효한 형식의 휴대폰 번호를 입력해주세요."); gift_form.e_tel.focus();
    }
    else if(!gift_form.e_addr.value || !gift_form.e_dtc.value){
        alert("배송지주소를 입력해주세요."); document.getElementById("find_addr").focus();
    }
    else if(gift_form.e_agree.checked==false){
        alert("개인정보수집 이용약관에 동의해주세요.");
    }
    else{
        gift_form.submit();
    }
}