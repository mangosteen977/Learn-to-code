export let a = function (imgfile) {
    let v = new FileReader(); //파일리더 함수: 첨부파일을 읽음

    v.onload = (z) => { //암호코드화 완료 후 로드되면 함수 실행 됨.
        document.getElementById("imgs").style.display = "block";
        document.getElementById("imgs").src = z.target.result;//해당 경로 전체를 말함
    }
    v.readAsDataURL(imgfile);//c:\바탕화면 => 암호 코드화 함.
}
document.querySelector("#img_file").addEventListener("change", function (imgdata) {
    //이미지미리보기는 무조건 change를사용함.
    a(imgdata.target.files[0]);
    //이미지 첨부시 배열로 출력 됨. [0]==name
});