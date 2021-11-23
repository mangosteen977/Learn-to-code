// 공지사항 클릭
function go_to_notice(sidx){
    location.href="shop_notice.html?sidx="+sidx;
}
//공지사항 페이징 클릭
function page_nlist(pg){
    location.href="shop_notice_list.html?pg="+pg;
}
//페이징
let $pg_num = 1;
if(location.search.split("?pg=")[1]!=undefined){

    $pg_num = location.search.split("?pg=")[1];
}
//공지사항 출력
let $view_page_notice = 5;
let $disc_ea;
$(function(){
    $.get("./admin/admin_notice.json?v="+nos,function($notice_data){
    })
    .done(function($notice_data2){//공지사항
        let $ea_nlist = $notice_data2.length;
        $disc_ea = Math.ceil($ea_nlist/$view_page_notice);
        let $notice_data3 = $notice_data2.slice(($view_page_notice*($pg_num-1)),($view_page_notice*$pg_num));
        $.map($notice_data3,function($arr,$node){
           let $html_nlist = '<div class="notice_title" onclick="go_to_notice('+$arr["sidx"]+')">\
                                <label>'+($ea_nlist-$node)+'</label>\
                                <label>'+$arr["subject"]+'</label>\
                                <label>'+$arr["id"]+'</label>\
                                <label>'+$arr["windate"].substr(0,10)+'</label>\
                                <label>'+$arr["wcount"].toLocaleString()+'</label>\
                            </div>';
            $("#notice_list").append($html_nlist);
            if($disc_ea>=$node+1){
                $("#notice_list_disc").append("<li onclick='page_nlist("+($node+1)+")'>"+($node+1)+"</li> ");
            }
        });
    })
    .fail(function($error){console.log($error)});
});