//배열값은 함수 안에 작성 또는 html에서 script를 이용해서 사용해야 함
//.js상단(여기 이 곳)에 배열을 써서 export에 적용은어렵다.

export let a = function () {

    let words = ["c", "f", "g", "a", "j"];
    words.push("b");
    words.sort();
    console.log(words);

}
export let b = function () {
    const a1 = ["red", "blue", "green"];
    const a2 = ["black", "yellow", "orange"];
    let a3 = [];
    for (let z in a1) {
        a3.push(a1[z]);
        a3.push(a2[z]);
    }
    console.log(a3);

    //시니어 코드래^^;;
    Array.prototype.push.apply(a1, a2);
    console.log(a1);
}
export let c = function () {
    const c1 = ["lee", "kim", "park", "kang"];
    const c2 = ["jang", "sin"];
    //1.
    // Array.prototype.push.apply(c1, c2);
    // c1.sort();
    // console.log(c1);

    //2.
    var y;
    for (y in c2) {
        c1.unshift(c2[y]);
    }
    c1.sort();
    console.log(c1)
}
