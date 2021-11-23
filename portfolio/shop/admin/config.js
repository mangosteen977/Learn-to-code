/* 자동갱신값 */
let days = new Date();
var nos = days.getFullYear()+''+('0' + days.getHours()).slice(-2)+''+('0' + days.getMinutes()).slice(-2)+''+('0'+days.getSeconds()).slice(-2);
/*폰트크기조절*/
function adm_home() {
    location.href = "./admin_index.html";
};
function fontclass(part) {
    let plus_cs = "";
    if (part == "1") {
        plus_cs = "section";
        document.getElementById("listview").className = plus_cs;
    }
    else {
        if (part == "2") {
            document.getElementById("listview").classList.remove("font_view3");
            plus_cs = "font_view2";
        }
        else {
            document.getElementById("listview").classList.remove("font_view2");
            plus_cs = "font_view3";
        }
        document.getElementById("listview").className += " " + plus_cs;
    }

}
/*로그인파트*/
function checks() {
    if (!adm.a_id.value) {
        alert("아이디를 입력하세요");
        adm.a_id.focus();
        return false;
    }
    else if (!adm.a_pw.value) {
        alert("패스워드를 입력하세요");
        adm.a_pw.focus();
        return false;
    }
    else {
        adm.method = "POST";
        adm.action = "login_ok.php";
        return true;
    }
};
//아이디 저장
function id_save() {
    let userid = document.getElementById("ids").value;
    let usecheck = adm.a_save.checked;
    var days = new Date();               // 로컬 PC의 시간정보를 가져옴
    days.setDate(days.getDate()+1); 
    if (userid != "" && usecheck == true) {
        //쿠키생성
        document.cookie = "adm_id=" + escape(adm.a_id.value)+ "; expires=" + days.toGMTString();
    }
    else if (usecheck == false){
        document.cookie = "adm_id=";//쿠키 초기화
        adm.a_save.checked = false;
        adm.a_id.focus();
    }
};
/*대메뉴 파트 - href연결*/
$(function () {
    $("#adm_menu>li").click(function () {
        location.href = $(this).attr("links");
    });
});