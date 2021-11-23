//1. onclick;

export let re = function () {
    let mname = frm.person_name.value;
    let mpw = frm.person_pw.value;
    let con = frm.person_text.value;
    if (!mname) { alert("고객명을 입력하세요"); }
    else if (!mpw) { alert("패스워드를 입력하세요"); }
    else if (!con) { alert("댓글 내용을 입력하세요."); }
    else {
        frm.method = "POST";
        frm.action = "http://lovertvtest.dothome.co.kr/es/noticeok.php";
        frm.submit();
    }
}
document.getElementById("btn").onclick = re

//2.addlistener;

// export let re = function (mname, mpw, con) {
//     if (!mname) { alert("고객명을 입력하세요"); }
//     else if (!mpw) { alert("패스워드를 입력하세요"); }
//     else if (!con) { alert("댓글 내용을 입력하세요."); }
//     else {
//         frm.method = "POST";
//         frm.action = "http://lovertvtest.dothome.co.kr/es/noticeok.php";
//         frm.submit();
//     }
// }
// document.querySelector("#btn").addEventListener("click", function () {
//     let mname = frm.person_name.value;
//     let mpw = frm.person_pw.value;
//     let con = frm.person_text.value;
//     re(mname, mpw, con);
// })