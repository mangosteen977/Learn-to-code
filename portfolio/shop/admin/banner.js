/* Vue 1. 배너 리스트 출력, 2. 배너 신규 등록 파트 */
let vue_banner = new Vue({
    el: "#banner",
    data: {
        i1: "",
        i2: "",
        i3: "",
        array_bn: [],
        array_num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        no_data: "no"
    },
    methods: {
        back_to_bn_list() {
            location.href = "./admin_banner.html"
        },
        upload_bn_list() {
            if (!this.i1) {
                alert("배너명을 입력하세요.");
            }
            else if (!this.i2) {
                alert("링크주소를 입력하세요.");
            }
            else if (!this.i3) {
                alert("배너 이미지를 업로드해주세요.");
            }
            else {
                add_bn_frm.action = "./banner_input.php";
                add_bn_frm.method = "POST";
                add_bn_frm.submit();
            }
        },
        //vue 리스트 출력
        prints(data) {
            var f;
            for (f in data) {
                this.array_bn.push({
                    num: Number(f) + 1,
                    index: data[f]["bidx"],
                    img: data[f]["bimg"],
                    link: data[f]["blink"],
                    title: data[f]["bname"],
                    no: data[f]["bno"],
                    date: data[f]["bindate"].substring(0, 10)
                });
            }
            this.no_data = "yes";
        },
        popup_img(src_link) {
            window.open(src_link, "", "width=1500; height=500")
        },
        del_bn_btn(index) {
            location.href = "./banner_del.php?del_idx=" + index;
        }
    },
    components: {

    },
    computed: {
        //vue 리스트 출력
        list: function () {
            fetch("./admin_banner.json?v=<?php echo $v?>").then((data1) => {
                return data1.json();
            }).then((data2) => {
                vue_banner.prints(data2);
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
});
/* 라디오 기본 출력 */
switch (eff) {
    case "R":
        document.getElementById("effect0").checked = true;
        break;
    case "F":
        document.getElementById("effect1").checked = true;
        break;
}
/* 폰트사이즈 조절 */
function fontclass(part) {
    let plus_cs = "";
    if (part == "1") {
        plus_cs = "section";
        document.getElementById("banner").className = plus_cs;
    }
    else {
        if (part == "2") {
            document.getElementById("banner").classList.remove("font_view3");
            plus_cs = "font_view2";
        }
        else {
            document.getElementById("banner").classList.remove("font_view2");
            plus_cs = "font_view3";
        }
        document.getElementById("banner").className += " " + plus_cs;
    }
}
function banner_input() {
    location.href = "./admin_newbanner.html"
}
$(function () {
    /*대메뉴 파트 - href연결*/
    $("#adm_menu>li").click(function () {
        location.href = $(this).attr("links");
    });
    $("#banner_effect").click(function () {
        let $nums = 0;
        let $ch_eff = "";
        while ($nums < 2) {
            if ($("#effect" + $nums).is(":checked") == true) {
                // if ($("#effect" + $nums).prop("checked") == true) {
                $ch_eff = $("#effect" + $nums).val();
            }
            $nums++;
        }
        $.ajax({
            url: "banner_effect.php",
            cache: false,
            type: "GET",
            dataType: "JSON",
            data: { effect: $ch_eff },
            contentType: "application/x-www-form-urlencoded",
            success: function ($ok) {
                console.log($ok)
            },
            error: function () {
                alert("re-check data")
            }
        });//ajax


    });//banner_dffect

});