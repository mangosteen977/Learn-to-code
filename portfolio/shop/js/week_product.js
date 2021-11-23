$(function(){
    $.get("./admin/admin_product.json?v="+nos,function($data_week_product){})
    .done(function($data_week_product){
        let $data_week_product_nine = $data_week_product.slice(0,9);
        let $week_pd_div = "";
        let $re_money,$re_money2;
        $.map($data_week_product_nine,function($arr,$node){
            if($arr["product_dc"]=="N"){
                $re_money = $arr["product_money"].toLocaleString('Ko')+'원';
                $re_money2 = $arr["product_money"].toLocaleString('Ko')+'원';
            }
            else{
                $re_money = '<s>&nbsp;'+$arr["product_money"].toLocaleString('Ko')+'원</s>';
                $re_money2 = $arr["product_sales"].toLocaleString('Ko')+'원';
            }
            $week_pd_div = '<div class="week_pd_product_box" onclick="pd_detail_page('+$arr["pidx"]+','+$arr["goodsno"]+')">\
                                <ul class="week_pd_product">\
                                    <li title="'+$arr["productnm"]+'">\
                                        <img src="./admin/'+$arr["product_img"]+'">\
                                        <ol class="week_pd_product_hover">\
                                            <li onclick="pd_icons(0)"><img src="./ico/icon_heart.png"> 찜하기</li>\
                                            <li onclick="pd_icons(1)"><img src="./ico/icon_cart.png"> 장바구니</li>\
                                        </ol>\
                                    </li>\
                                    <li>'+$arr["productnm"]+'</li>\
                                    <li>'+$arr["productnm_dtc"]+'</li>\
                                    <li>정상가 : '+$re_money+'</li>\
                                    <li>판매가 : '+$re_money2+'</li>\
                                </ul>\
                            </div>';
            $("#week_pd_box").append($week_pd_div);
        });
    })
    .fail(function($error){console.log($error)})
});
//찜하기,장바구니 버튼
pd_icons = function(sub){
    console.log(sub)//0은 찜하기, 1은 장바구니
    switch(sub){
        case 0 :

        break;
        case 1 :

        break;
    }
};
pd_detail_page = function(pidx,no){
    location.href = "./shop_product.html?pidx="+pidx+"&goodsno="+no;
};