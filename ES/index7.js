export class aaa {
    constructor(person) {
        this.username = person;
        if (this.username == "망고스틴") {
            this.sign = "ok";
        }
        else {
            this.sign = "no";
        }
    }
    login() { // aaa class 에 대한 확장함수1
        return this.username + "환영합니다.";
    }
    errors() {// aaa class 에 대한 확장함수2
        return this.username + "해당 고객은 휴면 계정입니다."
    };
}
//ES는 Vue와 달리 ,로 함수를 연결하지않음
export class bbb {
    constructor() {
        document.querySelector("#box").addEventListener("mouseenter", this.over);
        document.querySelector("#box").addEventListener("mouseleave", this.out);
    }
    over() {
        console.log("마우스오버");
    }
    out() {
        console.log("마우스아웃");
    }
}