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
let text_dt_infomation = "";
//Vue
let vue_pd_view = new Vue({
    el: "#pd",
    data: {
        dc_yes: 0,
        img1: "",
        rp: "read_price",
        ways: "P",
        pd_view_arr:"",
        dcs:"N",
        img_view_part:true
    },
    methods: {
        del_img(pidx,nm){
            
            if(confirm("이미지를 삭제하시겠습니까?")){
                fetch("./files_del.php?pidx="+pidx+"&fieldnm="+nm+"&tablenm=shop_product")
                .then(function(call){
                    return call.json();
                }).then(function(sign){
                    if(sign == "success"){
                        vue_pd_view.img_view_part = false;
                    }
                })
                .catch(function(error){
                    console.log("DATA ERROR");
                })
            }
        },
        pmodify(){
            this.img_view_part = false;
            if (!pd_input_frm.product_nm.value) {
                alert("상품명을 입력하세요.");pd_input_frm.product_nm.focus();
            }
            else if (!pd_input_frm.product_nmdtc.value) {
                alert("간편설명을 입력하세요.");pd_input_frm.product_nmdtc.focus();
            }
            else if (!pd_input_frm.product_money.value) {
                alert("소비자가격을 입력하세요.");pd_input_frm.product_money.focus();
            }
            else if (!pd_input_frm.product_ea.value) {
                alert("상품제한 수량을 입력하세요.");pd_input_frm.product_ea.focus();
            }
            else if (!pd_input_frm.product_img.value) {
                alert("상품이미지를 선택하세요.");
            }
            else if (!pd_input_frm.product_url.value) {
                alert("url을 입력하세요.");pd_input_frm.product_url.focus();
            }
            else if (!CKEDITOR.instances.product_contents1.getData()) {
                alert("자세한 설명을 입력하세요.");
            }
            else {
                pd_input_frm.action = "./modify_productok.php";
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
                    if (!pd_input_frm.product_money.value) {
                        this.dc_yes = 0;
                        alert("소비자가격을 먼저 입력하세요.");
                        pd_input_frm.product_money.focus();
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
        view_arrays(){
                this.pd_view_arr = JSON.parse(arrays);
                text_dt_infomation = this.pd_view_arr[0]["product_contents1"];
                this.ways = this.pd_view_arr[0]["product_dcpart"];
                this.dcs = this.pd_view_arr[0]["product_dc"];
            },
        }
    });
