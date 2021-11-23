const pass_array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "!", "_", "-", "."];
export let keypad = function () {
    document.getElementById("keypads").style.display = "flex";
}
export let login = function () {
    if (!frm_join.mid.value) {
        alert("아이디를 입력하세요");
        frm_join.mid.focus();
    }
    else if (!frm_join.mpass.value) {
        alert("비밀번호를 입력하세요");
    }
    else if (!frm_join.mname.value) {
        alert("고객명을 입력하세요");
        frm_join.mname.focus();
    }
    else if (!frm_join.memail.value) {
        alert("이메일을 입력하세요");
        frm_join.memail.focus();
    }
    else if (frm_join.memail.value.match(/@/g) == null || frm_join.memail.value.match(/./g) == null) {
        alert("올바른 형식의 이메일을 입력하세요");
        frm_join.memail.focus();
    }
    else if (!frm_join.mhp.value) {
        alert("연락처를 입력하세요");
        frm_join.mhp.focus();
    }
    else if (isNaN(frm_join.mhp.value) == true) {
        alert("올바른 연락처를 입력하세요");
        frm_join.mhp.focus();
    }
    else if (!frm_join.mnick.value) {
        alert("닉네임을 입력하세요");
        frm_join.mnick.focus();
    }
    else {
        frm_join.method = "POST";
        frm_join.action = "../portfolio/shop/m/m_membership.php";
        frm_join.submit();
    }
}
export let keypad2 = function (k) {
    var nodes = document.querySelectorAll('#keypads > .num_button');
    frm_join.mpass.value += pass_array[Array.from(nodes).indexOf(k.target)];
}
document.getElementById("btn_join").onclick = login;
document.getElementById("pass").onclick = keypad;
document.querySelector("#keypads").addEventListener("click", keypad2);