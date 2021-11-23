export let a = function (aa) {
    var z = this.querySelector(".onoff");
    z.style.backgroundColor = "red";
    console.log(aa.target)
    let getid = z.getAttribute("ids");
    document.getElementById(getid).value = "Y";
}
let b = document.querySelectorAll(".btn");
Array.from(b).forEach(function (c) {
    c.addEventListener("click", a);
})
//Array == []
//Array.from(자식객체).indexOf(부모객체)
//Array.from메서드

//console.log(Array.from("test"));
//Array ["t","e","s","t"];

//예시 Array.from(node).map(n,i)
/*
const pass_array = ["1","2","3","4","5","6","7"];
export let aa = function(k){
    //부모기준으로 하위 노드형태 확인하는 명령어 입니다.
    //console.log(k.target);
    var nodes = document.querySelectorAll('#keys > .licss');
    console.log(nodes[0]);

    var f;
    // for(f=0; f<nodes.length;f++){
    //     document.getElementById("li"+f).addEventListener("click",function(){

    //     });
    // }

    //apply(), parent.childNodes, item

    console.log([].indexOf.call(nodes, k.target)); //call(자식객체, 부모객체)
    //부모객체 기준으로 자식객체의 배열을 연결하는 형태를 가지고 있습니다.

    //call은 배열기호 [], from은 Array
}
document.querySelector("#keys").addEventListener("click",aa);
*/