$(function () {
    let $del_image_post = ""; //이미지 삭제 위한 값
    $.fn.ajax_bottom = function () {
        $.ajax({
            url: "./admin_info.json",
            cache: false,
            type: "GET",
            dataType: "JSON",
            success: function ($admin_jdata, $ok) {
                $.fn.copy_uls($admin_jdata)
            },
            error: function () {
                console.log("data_error")
            }
        });
        $.fn.copy_uls = function ($admin_jdata) {
            $del_image_post = "idx=" + $admin_jdata[0]["info_idx"] + "&delimg=" + $admin_jdata[0]["info_site_ico"];
            let $copy_ul = "<ul class='copy_ul'>\
                                <li>"+ $admin_jdata[0]["info_cpname"] + "</li>\
                                <li>대표 : "+ $admin_jdata[0]["info_ceo"] + "</li>\
                                <li>사업자등록번호 : "+ $admin_jdata[0]["info_cpno"] + "\
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
            $.each($admin_jdata[0], function ($key, $text) {
                switch ($key) {
                    case $key:
                        $("#" + $key + "1").val($text);
                        break;
                };
            });
            //파빌리온 이미지 입력/삭제 부분 조절
            if ($admin_jdata[0]["info_site_ico"] != "") {
                $("#fimg_on").css("display", "block");
                $("#fimg").css("background-image", "url(" + $admin_jdata[0]["info_site_ico"] + ")");
                $("#fimg_off").css("display", "none");
            }
            //point checkbox부분 확인
            if ($("#info_point_use1").val() == "Y") {
                $("#point_use").attr("checked", true);
            };
            //사업자번호 확인(공정거래위원회)
            $("#btn_info_cp").click(function () {
                let $cp_no_ck = $admin_jdata[0]["info_cpno"].replace(/[-]/g, "");
                let $urls = "http://www.ftc.go.kr/bizCommPop.do?wrkr_no=";
                window.open($urls + $cp_no_ck, "biz", "width = 600 height = 800, scrollbars=yes");
            });
        };
    };
    $.fn.ajax_bottom();
    //파빌리온 아이콘 클릭시 팝업
    $("#fimg").click(function () {
        let $img_src = $(this).css("background-image").split('"')[1];
        window.open($img_src, "image", "width = 500 height = 500");
    });
    //파빌리온 삭제
    $("#fdel").click(function () {
        $.ajax({
            url: "./img_del.php",
            cache: false,
            type: "POST",
            dataType: "JSON",
            data: $del_image_post,
            // data : {"idx":$('#info_idx1').val(),"delimg":$('#info_site_ico1').val()},
            contentType: "application/x-www-form-urlencoded",
            success: function ($ok) {
                if ($ok == "success") {
                    alert("정상적으로 이미지가 삭제되었습니다.");
                    window.location.reload();
                }
            },
            error: function () {
                alert("post_error")
            }
        });
    });
});
