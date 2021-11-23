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
//한페이지에 5개씩 출력 조절
const viewpage = 5; //한페이지 당 출력 될 목록의 갯수
let getpage = window.location.search;
let pgno = 1;
if(getpage.split("&page=")[1]!=undefined){
    var psplit = getpage.split("&page=")[1];
    pgno = psplit;
}

//출력 시작번호~끝번호
let slice_page1 = viewpage*(pgno-1);
let slice_page2 = viewpage*pgno;
//Vue
let vue_p_list = new Vue({
    el: "#pd",
    data: {
        s_word: "",
        pd_arr:[],
        view_list:"no",
        page_num:[],
        z:"",
        search_arr:[],
        re_arr:[]
    },
    methods: {
        view_product(pno){
            location.href='./admin_product_view.html?pidx='+pno;
        },
        search_pd_list() {
            if(!this.s_word){alert("검색할 상품명을 입력하세요.")}
            else{
                location.href = "./admin_product.html?pnm=" + this.s_word;
                vue_p_list.search_word_road();
            }
        },
        search_word_road(json_data){
            let words_s = this.s_word
            console.log(this.s_word)
            this.page_num = [];
            this.search_arr = json_data.filter(function(a1,a2,a3){
                this.z = a1.productnm.indexOf(words_s);
                if(z!=-1){
                    return a1.productnm;
                }
            })
            let arrary_total = this.search_arr.length;
            let no2 = arrary_total;
            this.view_list = "re";
            for(let ser_k in this.search_arr){
                if(ser_k>=slice_page1 && ser_k<slice_page2){
                    this.re_arr.push({
                        no:no2,
                        idxs:this.search_arr[ser_k]["pidx"],
                        code:this.search_arr[ser_k]["goodsno"],
                        name:this.search_arr[ser_k]["productnm"],
                        info:this.search_arr[ser_k]["productnm_dtc"],
                        price1:Number(this.search_arr[ser_k]["product_money"]).toLocaleString("Ko")+"원",
                        price2:Number(this.search_arr[ser_k]["product_sales"]).toLocaleString("Ko")+"원",
                        img:this.search_arr[ser_k]["product_img"],
                        print:this.search_arr[ser_k]["product_use"]
                    })
                }
                if(ser_k<Math.ceil(arrary_total/viewpage)){
                    this.page_num.push(Number(ser_k)+1);
                }
                no2--;
            };
        },
        print_list_pd(data){
            let arrary_total = data.length;
            let no2 = arrary_total;
            this.view_list = "yes";
            for(let pd_k in data){
                if(pd_k>=slice_page1 && pd_k<slice_page2){
                    this.pd_arr.push({
                        no:no2,
                        idxs:data[pd_k]["pidx"],
                        code:data[pd_k]["goodsno"],
                        name:data[pd_k]["productnm"],
                        info:data[pd_k]["productnm_dtc"],
                        price1:Number(data[pd_k]["product_money"]).toLocaleString("Ko")+"원",
                        price2:Number(data[pd_k]["product_sales"]).toLocaleString("Ko")+"원",
                        img:data[pd_k]["product_img"],
                        print:data[pd_k]["product_use"]
                    })
                }
                if(pd_k<Math.ceil(arrary_total/viewpage)){
                    this.page_num.push(Number(pd_k)+1);
                }
                no2--;
            };
        },
        del_products(idxs){
            if(confirm("상품을 삭제하시겠습니까?")){
                location.href="./product_listdel.php?idxs="+idxs+"&callsign=pdel_sign";
            }
        },
        pd_img_open(img_src){
            window.open(img_src,"","width=500px; height=500px;")
        },
        gopage(pnumber){
            location.href="./admin_product.html?pnm="+this.s_word+"&page="+pnumber;
        },
        go_to_main_list(){
            location.href='./admin_product.html';
        }
    },
    computed: {
        get_pd_list(){
            fetch("./admin_product.json?v="+nos).then((data1)=>data1.json()).then((data2)=>{
                    vue_p_list.print_list_pd(data2);
                    if (decodeURI(location.search).split("?pnm=")[1] != undefined) {
                        this.s_word = decodeURI(location.search).split("?pnm=")[1];
        
                        if(this.s_word.split(/&|=/g)!=""){
                            
                                this.s_word = this.s_word.split(/&|=/)[0];
                                pgno = this.s_word.split(/&|=/)[2];
                                // console.log(this.s_word.split(/&|=/g));
                                vue_p_list.search_word_road(data2);
                        }
                        else{
                            vue_p_list.print_list_pd(data2);
                        }
                    }
                    
            }).catch((err)=>console.log(err));
        }
    }
});
function go_to_input_pd() {
    location.href = "./admin_newproduct.html";
}