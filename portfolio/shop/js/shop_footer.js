$(function () {
        $.get("./admin/admin_info.json?v="+nos,function($admin_jdata){
        })
        .done(function($admin_jdata){
            let $copy_ul = "<ul class='copy_ul'>\
                                <li>"+ $admin_jdata[0]["info_cpname"] + "</li>\
                                <li>대표 : "+ $admin_jdata[0]["info_ceo"] + "</li>\
                                <li>사업자등록번호 : 012-34-56789\
                                    <input type='button' class='btn_info_cp' id='btn_info_cp' value='사업자 확인'>\
                                </li>\
                                <li>통신판매신고 : "+ $admin_jdata[0]["info_cn"] + "</li>\
                            </ul>\
                            <ul class='copy_ul'>\
                                <li>개인정보관리책임자 : "+ $admin_jdata[0]["info_manager"] + "</li>\
                                <li>관리자 이메일 : "+ $admin_jdata[0]["info_manager_email"] + "</li>\
                                <li>주소 : "+ $admin_jdata[0]["info_addrdtc"] + "</li>\
                                <li>전화번호 : "+ $admin_jdata[0]["info_tel"] + "</li>\
                            </ul>\
                            <div class='copyright_div'>copyright ⓒ 2021 by mangsteen977.dothome.co.kr ALL Right reserved.</div>";
            $("#copyright").html($copy_ul);
            //사업자번호 확인(공정거래위원회)
            $("#btn_info_cp").click(function () {
                let $cp_no_ck = $admin_jdata[0]["info_cpno"].replace(/[-]/g, "");
                let $urls = "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=";
                window.open($urls + $cp_no_ck, "biz", "width = 600 height = 800, scrollbars=yes");
            });
        })
        .fail(function($error){console.log($error)})
});
