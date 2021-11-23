export let abc = function () {
    let start = null;
    let sleft = null;
    var ani = document.getElementById("box");

    function ccc(times) {//확장함수 사용 가능(export안에서)
        start = start + 0.01;//계산수식구
        sleft = sleft + 1;
        ani.style.opacity = start;
        ani.style.left = sleft + "px";
        if (start <= 1) { //window.requestAnimationFrame(ccc)제어하는 조건문
            window.requestAnimationFrame(ccc)
        }
    }
    window.requestAnimationFrame(ccc) //비동기함수 settimeout에 가까운 형태

}
//onclick ==> id기준, addEventListener : id, class 모두 사용가능
document.getElementById("btn").onclick = abc;
