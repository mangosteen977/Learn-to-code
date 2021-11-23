function checkid(){ //중복체크용 hidden을 no->yes용 함수
    //document.getElementById("overlep").value = "yes";
    var ids = document.getElementById("ids");
    var check = document.getElementById("overlep");
    if(ids.value==""){ //아이디 중복체크 조건문
        alert("아이디를 입력한 뒤 중복체크를 눌러주세요.");
    }
    else{
        if(ids.value=="admin"){
            alert("이미 있는 아이디 입니다.");
        }
        else{
            alert("사용 가능한 아이디 입니다.");
            check.value = "yes";
            ids.readOnly = true;
        }
    }
}
function member_ship(){//가입하기 버튼 함수
    var ids = document.getElementById("ids").value;
    var pw = document.getElementById("pw").value;
    var pw2 = document.getElementById("pw2").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var check = document.getElementById("overlep").value;
    console.log(check);
    var ea = 1; var okay = "no"
    while(ea<4){ //radio checked 검사용 반복문
        var pro = document.getElementById("a"+ea).checked;
        if(pro==true){
            okay = "ok";}
        ea++}
    if(ids==""){ //회원정보 입력 확인용 조건문
        alert("아이디를 입력하세요.");
    }
    else if(check=="no"){
        alert("아이디 중복확인을 해주세요.");
    }
    else if(pw==""){
        alert("패스워드를 입력하세요");
    }
    else if(pw2==""){
        alert("패스워드를 한 번 더 입력하세요.");
    }
    else if(pw!=pw2){
        alert("입력한 패스워드가 다릅니다.");
    }
    else if(tel==""){
        alert("전화번호를 입력하세요.")
    }
    else if(email==""){
        alert("이메일을 입력하세요.");
    }
    else if(okay=="no"){
        alert("구매의사 소프트웨어를 체크해주세요.");
    }
    else if(tel!=""){
        cel(tel); 
    //함수 이동 시 조건문 가장 마지막에 사용해야 모든조건이 검토된다.
    }
}
function cel(n){ //전화번호란에 입력이 있을 시 함수
    var j = n.length;
    if(j<10){ //전화번호란 검사용 조건문
        alert("올바른 전화번호를 입력하세요.");
    }
    else{
        var m = n.match(/[-,.+]/g);
        console.log(m);
        if(m!=null){
            alert("특수문자는 입력 불가능합니다.");
            document.getElementById("tel").value = "";
        }
        else{ //가장 마지막에 읽히는 곳(?)에다가 둔다.
            alert("가입완료 되었습니다.");
        }
    }
}