/*검색버튼 submit*/
function search(){
    if(!sform.search_text.value){alert("검색 내용을 입력하세요."); return false;}
    else{return true;}
};
/*검색 값 input에 적용*/
function search_data(){
    let search_data2 = location.search;
    let s_data2 = search_data2.split("=");
    if(search_data2!=""){
        document.getElementById("spart").value = s_data2[1].split("&")[0];
        document.getElementById("board_search_option").value = decodeURI(s_data2[2]);
    }
};
function go_page(part,bname){
    switch(part){
        case 1:
            location.href="./admin_bmodify.html?boardnm="+bname;
        break;
        case 2:

        break;
    }
};