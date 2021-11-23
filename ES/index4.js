export let ccc = function (n) {
    let n3 = " ";
    let n2 = 1;
    while (n2 <= n) {
        if (n2 % 2 == 0) {
            n3 += n2 + " ";
            console.log(n2);
        }
        n2++;
    }
    return n3;
}
export let ccc2 = (t) => {
    let n3 = " ";
    let n2 = 1;
    while (n2 <= t) {
        if (n2 % 2 == 0) {
            n3 += n2 + ",";
        }
        n2++;
    }
    console.log(n3);
}

//class

export class aaa {//aaa라는 class명을 생성함
    constructor(a) {//class를 호출과 동시에 인자값을 받는 생성함수
        //this.가상변수 형태 ===vue의 data에 해당함.
        this.mname = a;

    }
}