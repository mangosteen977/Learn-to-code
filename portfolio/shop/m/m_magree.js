export let btnok = function () {

    if (fm.agree1.value != "Y") {
        alert("이용약관")
    }
    else if (fm.agree2.value != "Y") {
        alert("이메일수신약관")
    }
    else if (fm.agree3.value != "Y") {
        alert("sms수신약관")
    }
    else {
        fm.method = "GET";
        fm.action = "./m_member.html";
        fm.enctype = "application/x-www-form-urlencoded"
        fm.submit();
    }
}
document.getElementById("login_btn").onclick = btnok;

var a = 0, b = 0, c = 0
export let agree1 = function () {
    if (a == 0) {
        a++;
        fm.agree1.value = "Y"
        document.getElementById("btn_1").style.right = "5px";
        document.getElementById("btn_div1").style.backgroundColor = "pink";
    }
    else {
        fm.agree1.value = "N"
        document.getElementById("btn_1").style.right = "";
        document.getElementById("btn_div1").style.backgroundColor = "";
        a--;
    }
    console.log(fm.agree1.value)
}
document.getElementById("btn_1").onclick = agree1;

export let agree2 = function () {
    if (b == 0) {
        b++;
        document.getElementById("btn_2").style.right = "5px";
        document.getElementById("btn_div2").style.backgroundColor = "pink";
        fm.agree2.value = "Y"

    }
    else {
        document.getElementById("btn_2").style.right = "";
        document.getElementById("btn_div2").style.backgroundColor = "";
        fm.agree2.value = "N"
        b = 0
    }
}
document.getElementById("btn_2").onclick = agree2;


export let agree3 = function () {
    if (c == 0) {
        c++;
        document.getElementById("btn_3").style.right = "5px";
        document.getElementById("btn_div3").style.backgroundColor = "pink";
        fm.agree3.value = "Y"
    }
    else {
        document.getElementById("btn_3").style.right = "";
        document.getElementById("btn_div3").style.backgroundColor = "";
        fm.agree3.value = "N"
        c = 0
    }
}
document.getElementById("btn_3").onclick = agree3;


