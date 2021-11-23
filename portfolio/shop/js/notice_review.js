$(function(){
    $.get("./admin/admin_notice.json?v="+nos,function($nr_data){})
    .done(function($nr_data){
        let $nr_data_five = $nr_data.slice(0,5);
        $.map($nr_data_five,function($arr,$node){
           if($arr["subject"].length>20){
               $("#shop_nr_notice_list").append("<li onclick='go_to_notice("+$arr["sidx"]+")' title='"+$arr["subject"]+"'>"+$arr["subject"].substr(0,20)+"...</li>");
           }
           else{
            $("#shop_nr_notice_list").append("<li onclick='go_to_notice("+$arr["sidx"]+")' title='"+$arr["subject"]+"'>"+$arr["subject"]+"</li>");
           }
        })
    })
    .fail(function($error){console.log($error)});

});