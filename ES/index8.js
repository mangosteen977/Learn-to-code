export class aaa {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get loads() {
        return this.calc();
    }
    calc() {//method 메소드 가상의 변수를 조정하는 함수
        return this.a * this.b;
    }
}

// JS,ES 프로토 타입 : Typeof로 나오는 값들 ==> ex) String, Number, Boolean(true,false) 
//method 메소드 : 부모함수 또는 클래스를 통해서 사용이 되는부분을 메소드라고 함
//JS, ES 프로토타입 체이닝 : 값을 다른 형태로 바꾸는 것 ==> new , toLocalString(), split, substr, replaceAll