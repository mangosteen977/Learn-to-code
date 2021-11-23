$(function () {
    $.ajax({
        url: "./json/hello_menu.json",
        cache: false,
        type: "GET",
        dataType: "JSON",
        success: function ($data) {
            $.fn.menu($data);
        },
        error: function () {
            console.log("data error")
        }
    });
    $.fn.menu = function ($data) {
        var $index_menu = "";
        $.each($data, function ($node, $datas) {
            $index_menu = "<li class='big_ul" + $node + "' link='" + $datas["cate_link"] + "'>" + $datas["menus"];
            let $ols = ""; let $mini_olli = "";
            if ($datas["cate"][0] != "") {
                $index_menu += "<img src='./ico/down_ico.png'>";
                $ols = "<ol class='mini_ol" + $node + "'></ol>";
                $.map($datas["cate"], function ($mini_val, $mini_node) {
                    $mini_olli += "<li>" + $mini_val + "</li>";
                });
            }
            $index_menu += "</li>"
            $("#index_menu_ul").append($index_menu);
            $("#m_menu_ul").append($index_menu);
            $(".big_ul" + $node).append($ols);
            $(".mini_ol" + $node).append($mini_olli);
        });
        //호버상태 세부메뉴 출력
        $("#index_menu_ul > li").mouseenter(function () {
            var $nodes = $(this).index();
            $(".mini_ol" + $nodes).stop().slideDown();

        })
        $("#index_menu_ul > li").mouseleave(function () {
            var $nodes = $(this).index();
            $(".mini_ol" + $nodes).stop().slideUp();
        });

    };

    //mobile_menu_open
    $("#m_bn_ham_btn").click(function () {
        $("#m_menu_ham").css("display", "block");
        $("#m_menu_ham").animate({
            "right": "0"
        }, 300);
    });
    $("#m_menu_close").click(function () {
        $("#m_menu_ham").animate({
            "right": "-100%"
        }, 300, function () {
            $("#m_menu_ham").css("display", "none");
        });
    })

});