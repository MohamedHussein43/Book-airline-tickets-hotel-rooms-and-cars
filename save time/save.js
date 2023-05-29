function changeCSS() {

  

    var newlink = document.getElementById("tetsttt");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "save1.css");


}
function changeCSSs() {

  

    var newlink = document.getElementById("tetsttt");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "save2.css");


}

$(document).ready(function(){
  $("#upButton").click(function(){
    $('html ,body').animate({scrollTop : 0},1000);
  });
});