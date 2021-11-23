let pos = 0;
let position = 0;
let startx, endx;
let img_size = 160;
function next(till) {
    if (pos < till) {
        position -= img_size;
        document.querySelector("#images").style.transform = `translateX(${position}px)`;
        pos = pos + 1;
    }
}
function preview() {
    if (pos > 0) {
        position += img_size;
        document.querySelector("#images").style.transform = "translateX(" + position + "px)";
        pos = pos - 1;
    }
}
export let a = function (e) {
    startx = e.touches[0].pageX;
    // console.log(startx)
}
export let b = function (e) { //e ==> 이벤트 인자값 출력 됨.
    var nodes = document.querySelectorAll("#images>img").length - 1; //쿼리셀렉트 올로 해당 id 내 모든 img태그의 갯수를 출력
    endx = e.changedTouches[0].pageX;
    //pageX(오브젝트 위치전환) , screenX(화면(쪽)전환)
    // console.log(e.changedTouches[0].pageX)
    if (startx > endx) {
        next(nodes);
    }
    else {
        preview();
    }
}

document.getElementById("images").ontouchstart = a;
document.getElementById("images").ontouchend = b;
// document.querySelector("#images").addEventListener("touchstart", a);
// document.querySelector("#images").addEventListener("touchend", b);