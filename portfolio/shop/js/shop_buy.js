//상품가격*갯수
let price_total_price = Number(pd_price_for_pay);
//(상품가격*갯수)+배송가격
let total_price_for_real = (price_total_price+delivery_price).toLocaleString()+"원";
//주문자 정보와 동일
function same_as_buyer(){
    pd_buy_pay_form.receiver_name.value = pd_buy_pay_form.buyername.value;
    pd_buy_pay_form.receiver_post.value = pd_buy_pay_form.order_post.value;
    pd_buy_pay_form.receiver_addr.value = pd_buy_pay_form.order_addr1.value;
    pd_buy_pay_form.receiver_addr2.value = pd_buy_pay_form.order_addr2.value;
    pd_buy_pay_form.receiver_tel.value = pd_buy_pay_form.buy_tel.value;
    pd_buy_pay_form.receiver_hp.value = pd_buy_pay_form.buyertel.value;
}
//이메일 선택
function email_site_selects(site){
    let email_id_user = document.getElementById("email_id_select").value;
    if(site!="my_self"){
        pd_buy_pay_form.buyeremail.value = email_id_user+site;
    }
    else{
        document.getElementById("email_site_self").style.display="inline-block";
        document.getElementById("email_site_select").style.display="none";
    }
}
//이메일 직접입력
function email_site_my_self(key){
    let email_id_user = document.getElementById("email_id_select").value;
    pd_buy_pay_form.buyeremail.value = email_id_user+"@"+key;
}
//무통장입금 입력란 조절
function choose_pay_way(way){
    if(way==0){
        document.getElementById("shop_buy_payself").style.display="block";
    }
    else{
        document.getElementById("shop_buy_payself").style.display="none";
    }
}
$(function(){
    //계산값 출력
    $("#hidden_price").val(price_total_price+delivery_price);
    $(".pd_buy_total_price_for_real").text(total_price_for_real);
    $(".pd_buy_price_total_price").text(price_total_price.toLocaleString()+"원");
    $(".pd_buy_delivery_price").text("개별배송비 "+delivery_price.toLocaleString()+"원");
    //우편번호 API연동
    $("#addsearch").postcodifyPopUp();
    
});
//결제버튼 >> 데이터 전송
function pd_buy_go_pay(){
    if(!pd_buy_pay_form.buyeremail.value){
        alert("구매하시는 분의 이메일을 입력해주세요."); document.getElementById("email_id_select").focus();
    }
    else if(!pd_buy_pay_form.receiver_name.value){
        alert("받으시는 분의 성함을 입력해주세요."); pd_buy_pay_form.receiver_name.focus();
    }
    else if(!pd_buy_pay_form.receiver_post.value){
        alert("받으시는 분의 우편번호를 입력해주세요."); pd_buy_pay_form.receiver_post.focus();
    }
    else if(!pd_buy_pay_form.receiver_addr2.value){
        alert("받으시는 분의 상세주소를 입력해주세요."); pd_buy_pay_form.receiver_addr2.focus();
    }
    else if(!pd_buy_pay_form.receiver_hp.value){
        alert("받으시는 분의 휴대폰번호를 입력해주세요."); pd_buy_pay_form.receiver_hp.focus();
    }
    else if(pd_buy_pay_form.receiver_hp.value.match(/[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g)!=null||pd_buy_pay_form.receiver_hp.value.match(/[!@#$%^&*\|+=?/~`"'_-]/g)!=null){
        alert("휴대폰번호는 숫자만 입력해주세요."); pd_buy_pay_form.receiver_hp.focus();
    }
    else if(pd_buy_pay_form.ordercheck.checked==false){
       alert("구매진행을 위해 결제정보동의에 체크해주세요.");
    }
    else{
        pd_buy_pay_form.action="./shop_pay.html";
        pd_buy_pay_form.submit();
    }
}