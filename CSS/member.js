function member(){
    var msg = "회사명,이메일,비밀번호,휴대폰 번호";
    var m = msg.split(",");
    var pm = "";
    var a = document.getElementById("cp");
    var b = document.getElementById("email");
    var c = document.getElementById("pw");
    var d = document.getElementById("hp");
    if(a.value==""){
     pm = m[0];
    }
    else if(b.value==""){
     pm = m[1];
    }
    else if(c.value==""){
     pm = m[2];
    }
    else if(d.value==""){
     pm = m[3];
    }
    else{
        //이메일 상세검색
        var mail_check = b.value.match(/@/g);
        if(mail_check==null){
             alert("정확한 이메일을 입력하세요");
        }
        else{
            alert("회원가입 완료");
        }
    }
 
    if(pm!=""){
    alert(pm+"을 입력하세요");
    }
 }
 
 //휴대폰 번호 자동 - 부분 입력
 function telcheck(n){
     //console.log(n);
     var tn = n.length;
     //console.log(tn);
     if(tn==3){ //010-
         n = n+"-";
         document.getElementById("hp").value = n;
     }
     else if(tn > 6 && tn < 9){ //7~8자, 010-000-
         var nn = n.split("-");
         n = nn[0]+"-"+nn[1]+"-";
         document.getElementById("hp").value = n;
     }
     else if(tn > 12){ //13~14자 010-0000-0000
         var nn = n.split("-");
         if(nn[2] > 4){
             var re = nn[0]+nn[1]+nn[2];
             //00000000000
             n = re.substr(0,3)+"-"+re.substr(3,4)+"-"+re.substr(7,4);
             //000-0000-0000
             //console.log(n);
         }
         else if(nn[2]==4){ //12자리 일 때 000-000-0000
            n = nn[0]+"-"+nn[1]+"-"+nn[2];
        }
     }
     document.getElementById("hp").value = n;
 }