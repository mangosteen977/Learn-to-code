function member_btn(go){
    let links;
    switch(go){
        case 1 :
            links = "./membership.html";
            location.href = links;
        break;
        case 2 :
           alert("서비스 준비중입니다.");
        break;
        case 3 :
            alert("서비스 준비중입니다.");
        break;
    }
    // location.href = links;
}
function login_shop_fn(type){
    switch(type){
        case 0 :
            if(!id_login_frm.shop_id.value){
                alert("아이디를 입력해주세요.");
                id_login_frm.shop_id.focus();
                return false;
            }
            else if(!id_login_frm.shop_pw.value){
                alert("패스워드를 입력해주세요.");
                id_login_frm.shop_pw.focus();
                return false;
            }
            else{
                id_login_frm.method="POST";
                id_login_frm.action="./shop_loginok.php";
                return true;
            }
        break;
        case 1:
            if(!nofrm.nomember_id.value){
                alert("주문자명을 입력해주세요.");
                nofrm.nomember_id.focus();
                return false;
            }
            else if(!nofrm.nomember_no.value){
                alert("주문번호를 입력해주세요.");
                nofrm.nomember_no.focus();
                return false;
            }
            else if(isNaN(Number(nofrm.nomember_no.value))==true){
                alert("주문번호는 숫자 8자리입니다.");
                nofrm.nomember_no.focus();
                return false;
            }
            else if(nofrm.nomember_no.value.length!=8){
                alert("주문번호 8자리를 입력해주세요");
                nofrm.nomember_no.focus();
                return false;
            }
            else{
                nofrm.method="POST";
                nofrm.action="./shop_loginok.php";
                return true;
            }
        break;
    }
}