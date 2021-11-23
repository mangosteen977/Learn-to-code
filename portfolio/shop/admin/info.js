/*환경설정체크(config.html)*/
function info_ok(){
    //사업자번호 (-)제외 숫자 10~12자리
    let ck_info_cpno = info.info_cpno.value.replaceAll("-","").length;
    if(ck_info_cpno<10 || ck_info_cpno>12){
        alert("사업자등록번호를 다시 확인해주세요. 사업자번호는 '-' 제외 10~12자리 숫자입니다.");
        return false;
    }
    else{
        info.action = "./admin_info_ok.php";
        return true
    };
};
function use_point(){
    let ck_point_use = document.getElementById("point_use").checked;
    if(ck_point_use == true){
        document.getElementById("info_point1").disabled = false;
    }
    else{
        document.getElementById("info_point1").disabled = true;
    }
};
