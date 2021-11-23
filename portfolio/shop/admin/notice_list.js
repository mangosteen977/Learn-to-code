/*폰트크기조절*/
function fontclass(part) {
    let plus_cs = "";
    if (part == "1") {
        plus_cs = "section";
        document.getElementById("notice_vue").className = plus_cs;
    }
    else {
        if (part == "2") {
            document.getElementById("notice_vue").classList.remove("font_view3");
            plus_cs = "font_view2";
        }
        else {
            document.getElementById("notice_vue").classList.remove("font_view2");
            plus_cs = "font_view3";
        }
        document.getElementById("notice_vue").className += " " + plus_cs;
    }

}
//한페이지에 5개씩 출력 조절
const viewpage = 5; //한페이지 당 출력 될 목록의 갯수
let pgno = 1;//페이징넘버 기본값
let notice_vues = new Vue({
    el:"#notice_vue",
    data:{
        notice_arr:[],
        page_num:[],
        ea:0,
        notice_data:false,
        search_notice_word:""
    },
    methods:{
        go_to_notice_write(){
            location.href = "./notice_write.html";
        },
        del_notice(){
            if(confirm("정말로 삭제하시겠습니까?")){
                notice_list_frm.action="./notice_del.php";
                notice_list_frm.submit();
            }
        },
        page_click(num){
            location.href = "./admin_notice.html?search="+this.search_notice_word+"&page="+num;
        },
        go_to_notice_modify(sidx){
            location.href = "./notice_modify.html?sidx="+sidx;
        },
        search_notice_data(){
            if(!this.search_notice_word){
                alert("검색할 공지사항 제목을 입력해주세요.");
            }
            else{
                location.href = "./admin_notice.html?search="+this.search_notice_word;
            }
        },
        view_all_notice_data(){
            location.href = "./admin_notice.html";
        }
    },
    computed:{
        data_load(){
            fetch("./admin_notice.json?v="+nos).then((data)=>data.json())
            .then((data2)=> {
                this.notice_data = true;
                this.ea = data2.length;
                this.page_num =  Math.ceil(data2.length/viewpage);
                this.notice_arr = data2;
                //페이징넘버,검색값 가져오기
                let page_now = location.search.split(/&|=/);
                if(page_now[1]!=undefined){
                    this.search_notice_word = decodeURI(page_now[1]);
                    this.notice_arr = data2.filter(function(arr,no,arrays){
                        let filter_word = arr.subject.indexOf(decodeURI(page_now[1]));
                        if(filter_word!=-1){
                            return arr.subject;
                        }
                    });
                    this.ea = this.notice_arr.length;
                    this.page_num =  Math.ceil(this.ea/viewpage);
                }

                if(page_now[3]!=undefined){
                    pgno = page_now[3];
                    this.ea = data2.length-(viewpage*(page_now[3]-1));
                }
                //페이징넘버, 검색값에 따른 배열 정렬
                this.notice_arr = this.notice_arr.slice(viewpage*(pgno-1),viewpage*pgno);
            })
            .catch((error)=>console.log(error))
        }
    }
})