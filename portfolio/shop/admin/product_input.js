/*폰트크기조절*/
function fontclass(part) {
    let plus_cs = "";
    if (part == "1") {
        plus_cs = "section";
        document.getElementById("pd").className = plus_cs;
    }
    else {
        if (part == "2") {
            document.getElementById("pd").classList.remove("font_view3");
            plus_cs = "font_view2";
        }
        else {
            document.getElementById("pd").classList.remove("font_view2");
            plus_cs = "font_view3";
        }
        document.getElementById("pd").className += " " + plus_cs;
    }

}
//new_product_input
let vue_p_list = new Vue({
    el: "#pd",
    data: {
        code: "",
        name: "",
        info1: "",
        info2: "",
        price: "",
        dc_yes: 0,
        dc_per: "",
        sale_price: "",
        limit_ea: "",
        img1: "",
        url: "",
        rp: "read_price",
        ways: ""

    },
    methods: {
        add_pd_btn() {
            if (!this.name) {
                alert("상품명을 입력하세요.");
            }
            else if (!this.info1) {
                alert("간편설명을 입력하세요.");
            }
            else if (!this.price) {
                alert("소비자가격을 입력하세요.");
            }
            else if (!this.limit_ea) {
                alert("상품제한 수량을 입력하세요.");
            }
            else if (!this.img1) {
                alert("상품이미지를 선택하세요.");
            }
            else if (!this.url) {
                alert("url을 입력하세요.");
            }
            else if (!this.info2) {
                alert("자세한 설명을 입력하세요.");
            }
            else {
                pd_input_frm.action = "./new_productok.php";
                pd_input_frm.method = "POST";
                pd_input_frm.submit();
            }
        },
        dc_yes_fun(num) {
            switch (num) {
                case 0:
                    this.dc_yes = num;
                    this.dc_per = "";
                    this.sale_price = "";
                    document.getElementById("read_price").readOnly = false;
                    break;
                case 1:
                    if (this.price == "") {
                        this.dc_yes = 0;
                        alert("소비자가격을 먼저 입력하세요.");
                    }
                    else {
                        this.dc_yes = num;
                        document.getElementById("read_price").readOnly = true;
                    }
                    break;
            }
        },
        go_to_list() {
            location.href = "./admin_product.html";
        },
        total() {
            switch (this.ways) {
                case "P":
                    this.sale_price = Math.floor((100 - this.dc_per) * this.price / 1000) * 10;
                    break;
                case "M":
                    this.sale_price = this.price - this.dc_per;
                    break;
            }
        }
    },
    components: {

    },
    computed: {
        code_random() {
            let n = 0;
            do {
                this.code += String(Math.ceil(Math.random() * 9));
                n++;
            } while (n <= 7)
        }
    }
});
