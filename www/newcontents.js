$(function(){
    let $pd_html1,$pd_htm2="";
    let $pd_no=1;
    let $pd_nd=0;
    let $pd_tt= ["게임덱후들(유민상,김준현)","44층 지하던전","켠왕켜놩(켠김에왕까지-허준)","핑거게임(신동엽, 장도연)","플레이어2 (이수근,이진호, 이용진, 이이경, 이진호, 정혁, 황치열, 김동현)"];
    while($pd_no<7){
        //썸넬이미지출력
        $pd_html1 = "<img src='./contents/mini"+$pd_no+"-black.png'>";
        $pd_html2 = "<img src='./contents/mini"+$pd_no+"-color.png'>";
        $("#pd_con>li").eq($pd_nd).append($pd_html1);
        $("#pd_con>li").eq($pd_nd).append($pd_htm2);
    
        //썸넬 이미지 타이틀출력
        $("#pd_con>li").eq($pd_nd-1).attr("title",$ddd) 
        var $ddd= $pd_tt[$pd_nd];    
        //console.log($ddd);
        $pd_no++;
        $pd_nd++;
    
    }
    
    
    var $imgnode;
    $("#pd_con>li").mouseover(function(){
        $imgnode = $(this).index();
        $("#pd_con>li>img").eq($imgnode).attr("src","./contents/mini"+Number($imgnode+1)+"-color.png");
        // console.log($imgnode);  
    
    });
    $("#pd_con>li").mouseleave(function(){
        $imgnode = $(this).index();
        $("#pd_con>li>img").eq($imgnode).attr("src","./contents/mini"+Number($imgnode+1)+"-black.png");
    });
    });
    