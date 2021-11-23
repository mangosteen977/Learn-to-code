//메소드 함수를 사용하여 return값을 적용해 줍니다.

// const pay = new check(); //계산 함수가 담긴 상수 pay
// function check(){ //check()함수 이름은 바껴도 상관(X)
//     this.money = function(a,b,c){ //pay.money함수로 보낸 값을 받아옴
//         var total1 = a*((100-b)/100);
//         var total2 = total1-c;
//         var reserve = 10000-c;
//         return [total2,reserve]; //계산한 값을 본래 함수로 리턴시킴
//     }
// }

//선생님 코드
const pay = new check();
function check(){
    this.money = function(m,s,r){

        var totals = (Number(m) * Number(s) / 100);
        let cal = (Number(m) - totals)-Number(r);
        let min = 10000-Number(r);
        return [cal,min];
    }
}
