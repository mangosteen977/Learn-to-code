$(function(){
    $.map(product_ifo2[0],function($vals,$key){
        if($key.match("img")!=null){ //image>>src
            $("#"+$key).attr("src","./product/"+$vals);

        }
        else if($key.match("product_option")!=null){ //select>option
            let $selct_options ="";
            if($vals!=""){
                $selct_options = '<option value="'+$vals+'">'+$vals+'</option>';
            }
            $("#product_option").append($selct_options);

        }
        else if($key=="product_contents1"){
            //상세페이지
            $("#pd_view_more0").html($vals.replaceAll('height:3278px',''));
        }
        else{
            if(product_ifo2[0]["product_dc"]=="N"){
                product_ifo2[0]["product_sales"] = product_ifo2[0]["product_money"]
            }
            else if(isNaN($vals)==false){
                $vals = $vals.toLocaleString();
            }
            $("#"+$key).html($vals);
        }
    })
    
    //hidden_val
    $("#goodsno1").val($("#goodsno").text());
    $("#goodname").val($("#productnm").text());
    $("#product_img1").val($("#product_img").attr("src"));

    //최종금액 계산
    $.fn.cal_toal_price = function(){
       let $goods_ea_val = $("#goods_buy").val();
       let $goods_price = $("#product_sales").text().replaceAll(",","");
        $("#total_money").text(Number($goods_ea_val*$goods_price).toLocaleString());
        $("#price").val(Number($goods_ea_val*$goods_price).toLocaleString())
        $("#goodea").val($goods_ea_val);
    }

    //작은 이미지>>큰이미지
    let $origin_img;
    $("#pd_view_image_small>span>img").bind({
        "mouseenter":function(){
            $origin_img = $("#product_img").attr("src");
           $("#product_img").attr("src",$(this).attr("src"));
        },
        "mouseleave":function(){
            $("#product_img").attr("src", $origin_img);

        }
    })


    //상세페이지 >> 상품정보 탭 클릭
    $("#pd_view_info_tags>li").click(function(){
        let $click_li_no = $(this).index();
        $("#pd_view_info_tags>li").attr("class","");
        $("#pd_view_info_tags>li").eq($click_li_no).attr("class","pd_view_more_li");
        $(".pd_view_mores").css("display","none");
        $(".pd_view_mores").eq($click_li_no).css("display","block");
    })


    
});
//수량선택
function goods_ea_con(cal){
    switch(cal){
        case 0:
        if(document.getElementById("goods_buy").value<1){
            alert("구매수량은 1개 이상 선택해주세요.");
        }
        else{
            document.getElementById("goods_buy").value--;
        }
        break;
        case 1:
            if(document.getElementById("goods_buy").value>99){
                alert("1회 최대 구매 가능 수량을 초과하였습니다.");
            }
            else{
                document.getElementById("goods_buy").value++;
            }
        break;
    }
    $.fn.cal_toal_price();
}

//buttons function
function pd_view_btns_fn(type){
    switch(type){
        case 0: //buy
            if(!order.product_option.value){
                alert("옵션을 선택해주세요.");
            }
            else if(order.goods_buy.value<1){
                alert("수량을 한 개 이상 선택해주세요.");
            }
            else{
                order.action="./shop_buy.html";
                order.submit();
            }
        break;
        case 1: //cart
            if(confirm("장바구니에 상품을 담겠습니까?")){
                alert("장바구니에 상품이 담겼습니다.");
            }
            console.log("cart")
        break;
        case 2: //wishlist
            if(confirm("위시리스트에 상품을 추가하시겠습니까?")){
                alert("위시리스트에 상품이 추가되었습니다.");
            }
            console.log("wish")
        break;
    }
}

