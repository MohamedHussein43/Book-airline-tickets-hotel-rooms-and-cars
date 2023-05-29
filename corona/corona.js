function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "block";
  }
}
            /* ligh & dark mood*/
function changeCSS() {

  

    var newlink = document.getElementById("tetsttt");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "corona.css");


}
function changeCSSs() {

  

    var newlink = document.getElementById("tetsttt");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "corona2.css");


}

$(document).ready(function(){
  $("#upButton").click(function(){
    $('html ,body').animate({scrollTop : 0},1000);
  });
});