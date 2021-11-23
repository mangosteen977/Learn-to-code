//ES 체크박스 전체 선택 문구
export let a = function () {
    var alls = document.querySelector("#allck").checked;
    var ea = document.querySelectorAll("#list>input");
    var f;
    for (f in ea) {
        ea[f].checked = alls;
    }
}
document.querySelector("#allck").addEventListener("click", a);

