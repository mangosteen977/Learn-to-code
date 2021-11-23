//입력
export let faqink = function(part){
    if(part.path[0].id=="faq_inok"){
        var qa = CKEDITOR.instances.fatext.getData();
        if(!frm_faq.fcate.value){
            alert("카테고리를 선택하세요.");
        }
        else if(!frm_faq.fqtext.value){
            alert("질문 내용을 입력하세요.");
            frm_faq.fqtext.focus();
        }
        else if(!qa){
            alert("답변 내용을 입력하세요.");
            CKEDITOR.instances.fatext.focus();
        }
        else{
            frm_faq.action="./faq_writeok.php";
            frm_faq.submit();
        }
    }
    else if(part.path[0].id=="faq_list"){
        location.href="./admin_faq.html";
    }
}
document.querySelector("#faq_inok").addEventListener("click",faqink);//등록
document.querySelector("#faq_list").addEventListener("click",faqink);//리스트

//수정
export let faq_modify = function(){
    var qa = CKEDITOR.instances.fatext.getData();
    if(!frm_faq.fcate.value){
        alert("카테고리를 선택하세요.");
    }
    else if(!frm_faq.fqtext.value){
        alert("질문 내용을 입력하세요.");
        frm_faq.fqtext.focus();
    }
    else if(!qa){
        alert("답변 내용을 입력하세요.");
        CKEDITOR.instances.fatext.focus();
    }
    else if(confirm("정말로 수정하시겠습니까?")){
        frm_faq.action="./faq_modifyok.php";
        frm_faq.submit();
    }
};
document.querySelector("#faq_modifyok").addEventListener("click",faq_modify);//수정
//삭제
export let faq_del = function(){
    var qa = CKEDITOR.instances.fatext.getData();
    if(!frm_faq.fcate.value){
        alert("카테고리를 선택하세요.");
    }
    else if(!frm_faq.fqtext.value){
        alert("질문 내용을 입력하세요.");
        frm_faq.fqtext.focus();
    }
    else if(!qa){
        alert("답변 내용을 입력하세요.");
        CKEDITOR.instances.fatext.focus();
    }
    else if(confirm("정말로 삭제하시겠습니까?")){
        frm_faq.action="./faq_delok.php";
        frm_faq.submit();
    }
};
document.querySelector("#faq_delok").addEventListener("click",faq_del);//삭제

//값출력
export let print_faq = function(data){
    frm_faq.fcate.value=data[0]["category"];
    frm_faq.fqtext.value=data[0]["fqtext"];
}