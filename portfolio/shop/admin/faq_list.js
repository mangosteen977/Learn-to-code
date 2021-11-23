/*폰트크기조절*/
function fontclass(part) {
    let plus_cs = "";
    if (part == "1") {
        plus_cs = "section";
        document.getElementById("faq").className = plus_cs;
    }
    else {
        if (part == "2") {
            document.getElementById("faq").classList.remove("font_view3");
            plus_cs = "font_view2";
        }
        else {
            document.getElementById("faq").classList.remove("font_view2");
            plus_cs = "font_view3";
        }
        document.getElementById("faq").className += " " + plus_cs;
    }

}
let open_a_text_num = 0;
//한페이지에 10개씩 출력 조절
const viewpage = 10; //한페이지 당 출력 될 목록의 갯수
let pgno = 1;
let faq_vue = new Vue({
    el:"#faq",
    data:{
        faq_data:[],
        pageing_num:[],
        cate:"",
        search_faq_list:"",
        ea:""
    },
    methods:{
        faq_insert(){
            location.href="faq_write.html"; 
        },
        view_all_list(){
            location.href="admin_faq.html";
        },
        open_qna_a_text(idx){
            if(open_a_text_num==0){
                document.getElementById("a_text"+idx).style.display="table-row";
                document.getElementById("a_img"+idx).style.transform="rotateX(180deg)"
                open_a_text_num++;
            }
            else{
                document.getElementById("a_text"+idx).style.display="none";
                document.getElementById("a_img"+idx).style.transform="rotateX(0deg)"
                open_a_text_num--;
            }
        },
        search_faq(){
            if(!this.search_faq_list){
                alert("검색어를 입력해주세요");
            }
            else{
                location.href = "./admin_faq.html?sword="+this.search_faq_list;
            }
        },
        cates(){
            location.href = "./admin_faq.html?cate="+this.cate;
        },
        page(page){
            location.href = "./admin_faq.html?sword="+this.search_faq_list+"&page="+page;
        },
        faq_view(fno){
            location.href="./admin_faqview.html?fidx="+fno;
        }
    },
    components:{

    },
    computed:{
        get_faq_list(){
            fetch("./admin_faq.json?v=<?=$v?>").then((data)=>data.json())
            .then((data2)=>{
                this.faq_data = data2;
                let search_vals = location.search.split(/&|=/g);
                this.ea = data2.length;
                this.pageing_num = Math.ceil(this.ea/viewpage);

                if(search_vals[0]=="?sword"){
                    this.search_faq_list = decodeURI(search_vals[1]);
                    this.faq_data = this.faq_data.filter(function(array,node,all){
                        let ser = array.fqtext.indexOf(decodeURI(search_vals[1]));
                        if(ser!=-1){
                            return array.fqtext
                        }
                    });
                    this.ea = this.faq_data.length;
                    this.pageing_num = Math.ceil(this.ea/viewpage);
                    if(search_vals[2]=="page"){
                        pgno = search_vals[3];
                    }
                }
                if(search_vals[0]=="&page="){
                    pgno = search_vals[3];
                }
                if(search_vals[0]=="?cate"){
                    this.faq_data = this.faq_data.filter(function(array,node,all){
                        if(array.category==search_vals[1]){
                            return array.category
                        }
                    });
                    this.pageing_num = 1;
                }
                this.faq_data = this.faq_data.slice(viewpage*(pgno-1),viewpage*pgno);
            }).catch((error)=>console.log(error))
        }
    }
})