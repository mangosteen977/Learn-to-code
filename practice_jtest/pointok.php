<meta charset="utf-8">
<?php

    $mb_id = $_POST['mb_id'];
    $po_content = $_POST['po_content'];
    $po_point = is_numeric($_POST['po_point']);
    $po_exp = $_POST['po_exp'];

    if($po_point==""){
        echo ("<script>alert('올바른 데이터가 아닙니다.'); history.go(-1);</script>");
    }   
    else{
        if($mb_id=="" || $po_content==""){
            echo ("<script>alert('올바른 데이터가 아닙니다.'); history.go(-1);</script>");
        }
        else{
            echo ("<script>alert('정상적으로 포인트가 반영 되었습니다.'); history.go(-1);</script>");
        }
    }
?>