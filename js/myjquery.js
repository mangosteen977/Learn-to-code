let timer;
function slideUp(mid){
    let objects = document.getElementById(mid);
    let heights = objects.offsetHeight; //Number
    timer = setInterval(slide,10);
    function slide(){
        heights--;
        if(heights<0){
            clearInterval(timer);
            objects.style.display="none"
            document.getElementById("open").style.display="block";
        }
        else{
            objects.style.height=heights+"px";
            objects.style.overflow="hidden";
        }
    };
}
/* offset : 오브젝트의 크기, 위치 값 가져옴.
    offsetHeight/offsetWidth.... */

//slideDown plug
function slideDown(mid){
    let objects = document.getElementById(mid);
    let heights = objects.offsetHeight; //Number
    timer = setInterval(slide,10);
    function slide(){
        heights++;
        if(heights>=100){
            clearInterval(timer);
        }
        else{
            objects.style.display="block"
            objects.style.height=heights+"px";
            objects.style.overflow="hidden";
        }
    };
};