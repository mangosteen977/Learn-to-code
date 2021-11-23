$(function(){
   //div+div
   $("#tags>span").click(function(){
      let $now = $(this).index();
      $(".imgs").css("display","none");
      $(".imgs").eq($now).css("display","block");
   });
});
//div>span*4
function btn_animal(nodes){
   if(nodes==0){
      document.getElementById("sidebannerdivdog").style.zIndex = "10";
      document.getElementById("sidebannerdivcat").style.zIndex = "100";
      document.getElementById("dog_tag").style.backgroundColor = "white";
      document.getElementById("cat_tag").style.backgroundColor = "#ccc";
   }
   else{
      document.getElementById("sidebannerdivdog").style.zIndex = "100";
      document.getElementById("sidebannerdivcat").style.zIndex = "10";
      document.getElementById("dog_tag").style.backgroundColor = "#ccc";
      document.getElementById("cat_tag").style.backgroundColor = "white";
   }
}