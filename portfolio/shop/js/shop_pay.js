//경고출력
alert("※본 사이트는 포토폴리오를 위해 제작된 샘플용 사이트입니다. 결제를 금합니다.※");
//계산값 출력
$(function(){
    $(".pd_buy_delivery_price").text("개별배송비 "+delivery_price.toLocaleString()+"원");
})