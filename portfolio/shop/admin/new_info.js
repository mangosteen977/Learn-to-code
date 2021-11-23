$(function(){
    //member.json
    $.fn.mem_json = function(){
        $.get("../shop_members.json?v="+nos,function($data){
        }).done(function($data){
            if($data!=""){
                $(".no_user").css("display","none");
            }
            $("#total_member").text($data.length);
            $("#new_member").text($data.length);
            $data = $data.slice(0,3);
            $.map($data,function($arr,$node){
                switch ($arr['user_group']) {
                    case "N":
                        $arr['user_group'] = "NORMAL";
                    break;
                    case "S":
                        $arr['user_group'] = "SILVER";
                    break;
                    case "G":
                        $arr['user_group'] = "GOLD";
                    break;
                    case "V":
                        $arr['user_group'] = "VIP";
                    break;
                }
                let $html_mem_json = '<tr>\
                                        <th width="170">'+$arr["user_id"]+'</th>\
                                        <th width="170">'+$arr["user_name"]+'</th>\
                                        <th width="170">'+$arr["user_nick"]+'</th>\
                                        <th width="90">-</th>\
                                        <th width="170">'+$arr["user_point"]+'P</th>\
                                        <th width="80">'+$arr["sms_agree"]+'</th>\
                                        <th width="80">'+$arr["mail_accept"]+'</th>\
                                        <th width="80">'+$arr["mail_agree"]+'</th>\
                                        <th width="80">'+$arr["user_reset"]+'</th>\
                                        <th width="110">'+$arr["user_group"]+'</th>\
                                    </tr>';
                $("#tb_user").append($html_mem_json);
            });
        })
        .fail(function($error){console.log($error)})
    }; $.fn.mem_json();

    //faq.json
    $.fn.$html_faq_json = function(){
        $.get("./admin_faq.json?v="+nos,function($data){
        }).done(function($data){
            $("#new_q").text($data.length);
            $data = $data.slice(0,3);
            $.map($data,function($arr,$node){
                switch($arr["category"]){
                    case 1:
                        $arr["category"] = "배송문의";
                    break;
                    case 2:
                        $arr["category"] = "반품/교환/환불";
                    break;
                    case 3:
                        $arr["category"] = "주문/결제";
                    break;
                    case 4:
                        $arr["category"] = "회원서비스";
                    break;
                    case 5:
                        $arr["category"] = "안전거래";
                    break;
                };
                let $html_faq_json = '<tr>\
                                        <th width="170">'+$arr["category"]+'</th>\
                                        <th width="680">'+$arr["fqtext"]+'</th>\
                                        <th width="150">-</th>\
                                        <th width="105">'+$arr["fwriter"]+'</th>\
                                        <th width="165">'+$arr["findate"]+'</th>\
                                    </tr>';
                $("#tb_qna").append($html_faq_json);
            });
        })
        .fail(function($error){console.log($error)})
    };$.fn.$html_faq_json();

    //이동 버튼
    $("#view_all_user").click(function(){
        location.href="./admin_member.html";
    });
    $("#view_all_faq").click(function(){
        location.href="./admin_faq.html";
    });
});