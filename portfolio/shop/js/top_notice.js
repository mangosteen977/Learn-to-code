$(function(){
    //print_notice_data
    for(let keys in notice_data[0]){
        if(keys=="windate"){
            notice_data[0][keys] = notice_data[0][keys].substr(0,10);
        }
        $("#"+keys).html(notice_data[0][keys]);
    }
});