function agree_all(){
    let ckall = document.getElementById("allagree").checked
    let onoff = null;
    if(ckall==true){
        onoff = true;
    }
    else{
        onoff = false;
    }
    for(let fr=1;fr<3;fr++){
        document.getElementById("agree"+fr).checked =onoff;
    }
}
function agree_ne(){
    for(let fr=1;fr<3;fr++){

        let ckoff = document.getElementById("agree"+fr).checked;
        if(ckoff==false){
            document.getElementById("allagree").checked=false;
        }
    }
}
function agree_btn(){
    let agree_ok = "ok";
    for(let fr=1;fr<3;fr++){
        let ckoff = document.getElementById("agree"+fr).checked;
        if(ckoff==false){
            agree_ok = "no";
        }
    }
    if(agree_ok=="no"){
        alert("약관에 모두 동의해야 회원가입이 진행됩니다.");
    }
    else{
        member_agree.method = "POST";
        member_agree.action = "./member_join.html";
        member_agree.submit();
    }
}

function agree_text(){
    //이용약관
    let agree_text1 = new XMLHttpRequest();
    agree_text1.open("GET","../shop/provision.txt?v=5",true);
    agree_text1.onload = function(){
        document.getElementById("agree_txt1").innerText = agree_text1.responseText;
    }
    agree_text1.send();

    //개인정보처리방침
    let agree_text2 = new XMLHttpRequest();
    agree_text2.open("GET","../shop/privacy.txt?v=5",true);
    agree_text2.onload = function(){
        document.getElementById("agree_txt2").innerText = agree_text2.responseText;
    }
    agree_text2.send();
}

/*member_ok.html*/
function welcom_btn_fn(){
    location.href = "./index.html"
}