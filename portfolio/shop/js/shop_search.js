$(function(){
    //검색어 파라미터 값 받기/적용
    let $search_val = location.search.split("?searchwd=")[1];
    let $search_word = decodeURI($search_val);
    if($search_word!="undefined"){
        $("#shop_top_search").val($search_word);
    }
    else{
        $("#shop_top_search").val();
    }
    //검색결과 필터링
    $.get("./admin/admin_product.json?v="+nos,function($pdata){
    })
    .done(function($pdata2){//파일로드
        let $pdata3 = $pdata2.filter(function(arr,no,all){
            $ser_value = arr.productnm.indexOf($search_word);
            if($ser_value!=-1){
                return arr.productnm;
            }
        });
        if($pdata3!=""){
            $.fn.print_ser_data($pdata3);
        }
    })
    .fail(function($error){console.log($error)})
    //검색결과 출력
    $.fn.print_ser_data = function($data){
        $("#no_ser_data").css("display","none");
        $("#se_data_ea").text($data.length);
        $.map($data,function($arr,$node){
            if($arr["product_dc"]=="N"){
                $re_money = $arr["product_money"].toLocaleString('Ko')+'원';
                $re_money2 = $arr["product_money"].toLocaleString('Ko')+'원';
            }
            else{
                $re_money = '<s>&nbsp;'+$arr["product_money"].toLocaleString('Ko')+'원</s>';
                $re_money2 = $arr["product_sales"].toLocaleString('Ko')+'원';
            }
            let $ser_pd_div = '<div class="ser_box" onclick="pd_detail_page('+$arr["pidx"]+','+$arr["goodsno"]+')">\
                                <ul class="ser_pd_product">\
                                    <li title="'+$arr["productnm"]+'">\
                                        <img src="./admin/'+$arr["product_img"]+'">\
                                        <ol class="ser_pd_product_hover">\
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
            $("#yes_ser_data").append($ser_pd_div);
        })
    }
});
pd_detail_page = function(pidx,no){
    location.href = "./shop_product.html?pidx="+pidx+"&goodsno="+no;
}