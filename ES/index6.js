export let abc = function () {
    if (!frm.mid.value) {
        alert("아이디를 입력하세요");
        frm.mid.focus();
    }
    else if (!frm.mpass.value) {
        alert("비밀번호를 입력하세요");
        frm.mpass.focus();
    }
    else {
        frm.method = "GET";
        frm.action = "http://mangsteen977.dothome.co.kr/ES/index6.html";
        frm.submit();
    }
}
//??????????????????????????


//1. 작동은 되나 값이 콘솔에 안찍힘
export let bcd = function () {
    document.getElementById("email").value = this.value;
}
//onclick, onchange일 경우 해당 함수로 이동은 가능하나 함수에 인자값을 적용하기는 힘듭니다.

//2. 온체인지는 애드이벤트리스너로 사용할 것.
document.querySelector("#email").addEventListener("change", function () {
    //click,change,keypress,mouseenter,mouseleave,mouseout,mouseover,keyup,keydown

    //addEventListener에서 해당 값에 대한 this.value를 사용할 수 있음
    mails(this.value);
});

document.getElementById("login_btn").onclick = abc;
// document.getElementById("sel").onchange = bcd;


