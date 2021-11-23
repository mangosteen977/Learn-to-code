pro_vue = function () {
    let product = new Vue({
        el: "#pd_sbox",
        data: {
            p_arr: [],
            p_arr2: [],
            part: 1
        },
        methods: {
            print(data) {
                this.p_arr = data;
                let f;
                for (f in data) {
                    this.p_arr2.push({
                        img: data[f]['product_img'],
                        name: data[f]['product_nm'],
                        info: data[f]['product_sample'],
                        dc: data[f]['product_dc'],
                        money: Number(data[f]['product_money'].replaceAll(",", "")),
                        sale: data[f]['product_sales'],
                    })
                }
            },
            list(num) {
                switch (num) {
                    case 2:
                        this.part = 2;
                        this.p_arr2 = _.orderBy(this.p_arr2, ["money"], "desc");
                        break;
                    case 1:
                        this.part = 2;
                        this.p_arr2 = _.orderBy(this.p_arr2, ["money"], "asc");
                        break;
                    case 0: this.part = 1; break;
                }
            },
            move_pro(num) {
                if (num == 1) { $.fn.pro_left(); }
                else { $.fn.pro_right(); }
            }
        },
        components: {

        },
        computed: {
            jsons: function () {
                fetch("../public_html/json/hello_product.json").then(function (data) {
                    return data.json();
                }).then((data2) => {
                    product.print(data2["pet_product"]);
                })
            }
        }
    });
};
$(function () {
    //left & right flow
    let $moving = 0;
    $.fn.pro_left = function () {
        let $node_ea = $(".pd_imgb").length - 1;
        let $node_width = $(".pd_imgb").eq(0).width();
        $moving = $moving - $node_width - 20;
        if ($moving < (-$node_width - 20) * $node_ea) {
            $moving = 0;
        }
        $(".pd_ovbox").stop().animate({
            "left": $moving + "px"
        }, 100);
    }
    $.fn.pro_right = function () {
        let $node_width = $(".pd_imgb").eq(0).width();
        if ($moving != 0) {
            $moving = $moving + $node_width + 20;
        }
        $(".pd_ovbox").stop().animate({
            "left": $moving + "px"
        }, 100);
    }
    //swipe_image_for_mobile
    let $pd_imgb_move = 0;
    $(".pd_ovbox").bind({
        "touchstart": function () {
            $.fn.pro_left();
        }
    })
});