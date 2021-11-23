/*idcheck함수로 아이디값 유무를 검사하시오.*/
//var sign = "no"; //전역변수활용
            
function idcheck(){
    var a = document.getElementById("mid").value;
    var b = "admin";
    if(a==""){
        alert("아이디를 입력해주세요.");
    }
    else{
        if(a==b){
            alert("해당아이디는 이미 있습니다.");
        }
        else{
            alert("해당 아이디는 중복되지 않습니다.");
            //sign = "ok"; //전역변수 활용
            document.getElementById("sign").value = "yes"; //hidden활용
            document.getElementById("mid").readOnly=true;
        }
    }
}
function gopage(){
    var s = document.getElementById("sign").value; //hidden 활용
    // if(sign=="no"){ //전역변수 활용
    if(s == "no"){ //hidden 활용   
        alert("아이디 중복체크를 먼저 해주세요.");
    }
    else{
        alert("회원가입이 진행됩니다.");
    }
}