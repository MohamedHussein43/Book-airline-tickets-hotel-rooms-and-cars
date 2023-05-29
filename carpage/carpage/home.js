function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function clickFun(){
	var x=document.getElementById("myUL").style.display;
	if(x==="block")
		document.getElementById("myUL").style.display = "none";
	else
		document.getElementById("myUL").style.display = "block";
};
$(document).ready(function(){
  $("#upButton").click(function(){
    $('html ,body').animate({scrollTop : 0},1000);
  });
});


var d=[];
function h()
{
	d[0]=form.pickUp.value;
	d[1]=form.cars.value;
	d[2]=form.cars.value;
var indx=0;
var arry=[d.length];
for (var i=0;i<d.length; i++)
{
	if(d[i]=="")
	{arry[i]=0}
	else
	{arry[i]=1;indx++;}
}
for (var i=0;i<d.length; i++)
{
	if(arry[i]===0)
	{document.getElementById("in"+i).style="border:2px solid red;";}
    else
		{document.getElementById("in"+i).style="border:normal;";}
	if(indx===d.length)
	{alert("congratulation")}

}
}