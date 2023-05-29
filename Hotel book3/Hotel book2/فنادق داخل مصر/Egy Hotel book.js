var mode;
function modeFun(mode)
{
	if(mode===1){
		var newlink = document.getElementById("link1");
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("href", "Egy Hotel book.css");
	}
	else{
		var newlink = document.getElementById("link1");
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("href", "Egy Hotel book_Dark.css");
	}
}


var sharm;
function bigImgControlSharm(sharm)
{
	if(sharm===1)
		document.getElementById("bigImgSharm").innerHTML ="<img class='bigImg' src='Sharm\\sharm1.jpg'>"
	else if(sharm===2)
		document.getElementById("bigImgSharm").innerHTML ="<img class='bigImg' src='Sharm\\sharm2.jpg'>"
	else if(sharm===3)
		document.getElementById("bigImgSharm").innerHTML ="<img class='bigImg' src='Sharm\\sharm3.jpg'>"
	else if(sharm===4)
		document.getElementById("bigImgSharm").innerHTML ="<img class='bigImg' src='Sharm\\sharm4.jpg'>"
	else if(sharm===5)
		document.getElementById("bigImgSharm").innerHTML ="<img class='bigImg' src='Sharm\\sharm5.jpg'>"
	else if(sharm===6)
		document.getElementById("bigImgSharm").innerHTML ="<img class='bigImg' src='Sharm\\sharm6.jpg'>"
	else if(sharm===7)
		document.getElementById("bigImgSharm").innerHTML ="<img class='bigImg' src='Sharm\\sharm7.jpg'>"
	
	
}


var rateSharm=8.4,reviewsSharm=250;
document.getElementById("rateIntSharm").innerHTML =rateSharm;
if(rateSharm>9.2)
	document.getElementById("rateStringSharm").innerHTML = "Excellent"+"<br>"+"reviews"+reviewsSharm;
else if(rateSharm>=8)
	document.getElementById("rateStringSharm").innerHTML = "Very Good"+"<br>"+"reviews"+reviewsSharm;
else if(rateSharm>=5)
	document.getElementById("rateStringSharm").innerHTML="Good"+"<br>"+"reviews"+reviewsSharm;
else if(rateSharm>=3)
	document.getElementById("rateStringSharm").innerHTML="Not Bad"+"<br>"+"reviews"+reviewsSharm;
else if(rateSharm>=0)
	document.getElementById("rateStringSharm").innerHTML="Bad"+"<br>"+"reviews"+reviewsSharm;



var london;
function bigImgControlLondon(london)
{
	if(london===1)
		document.getElementById("bigImgLondon").innerHTML ="<img class='bigImg' src='Cairo\\cairo1.jpg'>"
	else if(london===2)
		document.getElementById("bigImgLondon").innerHTML ="<img class='bigImg' src='Cairo\\cairo2.jpg'>"
	else if(london===3)
		document.getElementById("bigImgLondon").innerHTML ="<img class='bigImg' src='Cairo\\cairo3.jpg'>"
	else if(london===4)
		document.getElementById("bigImgLondon").innerHTML ="<img class='bigImg' src='Cairo\\cairo4.jpg'>"
	else if(london===5)
		document.getElementById("bigImgLondon").innerHTML ="<img class='bigImg' src='Cairo\\cairo5.jpg'>"
	else if(london===6)
		document.getElementById("bigImgLondon").innerHTML ="<img class='bigImg' src='Cairo\\cairo6.jpg'>"
	else if(london===7)
		document.getElementById("bigImgLondon").innerHTML ="<img class='bigImg' src='Cairo\\cairo7.jpg'>"
}
var rateLondon=7.3,reviewsLondon=1200;
document.getElementById("rateIntLondon").innerHTML =rateLondon;
if(rateLondon>9.2)
	document.getElementById("rateStringLondon").innerHTML = "Excellent"+"<br>"+"reviews"+reviewsParis;
else if(rateLondon>=8)
	document.getElementById("rateStringLondon").innerHTML = "Very Good"+"<br>"+"reviews"+reviewsLondon;
else if(rateLondon>=5)
	document.getElementById("rateStringLondon").innerHTML="Good"+"<br>"+"reviews"+reviewsLondon;
else if(rateLondon>=3)
	document.getElementById("rateStringLondon").innerHTML="Not Bad"+"<br>"+"reviews"+reviewsLondon;
else if(rateLondon>=0)
	document.getElementById("rateStringLondon").innerHTML="Bad"+"<br>"+"reviews"+reviewsLondon;



var paris;
function bigImgControlParis(london)
{
	if(london===1)
		document.getElementById("bigImgParis").innerHTML ="<img class='bigImg' src='Hurghada\\hurghada1.jpg'>"
	else if(london===2)
		document.getElementById("bigImgParis").innerHTML ="<img class='bigImg' src='Hurghada\\hurghada2.jpg'>"
	else if(london===3)
		document.getElementById("bigImgParis").innerHTML ="<img class='bigImg' src='Hurghada\\hurghada3.jpg'>"
	else if(london===4)
		document.getElementById("bigImgParis").innerHTML ="<img class='bigImg' src='Hurghada\\hurghada4.jpg'>"
	else if(london===5)
		document.getElementById("bigImgParis").innerHTML ="<img class='bigImg' src='Hurghada\\hurghada5.jpg'>"
	else if(london===6)
		document.getElementById("bigImgParis").innerHTML ="<img class='bigImg' src='Hurghada\\hurghada6.jpg'>"
	else if(london===7)
		document.getElementById("bigImgParis").innerHTML ="<img class='bigImg' src='Hurghada\\hurghada7.jpg'>"
}
var rateParis=9.3,reviewsParis=220;
document.getElementById("rateIntParis").innerHTML =rateParis;
if(rateParis>9.2)
	document.getElementById("rateStringParis").innerHTML = "Excellent"+"<br>"+"reviews"+reviewsParis;
else if(rateParis>=8)
	document.getElementById("rateStringParis").innerHTML = "Very Good"+"<br>"+"reviews"+reviewsParis;
else if(rateParis>=5)
	document.getElementById("rateStringParis").innerHTML="Good"+"<br>"+"reviews"+reviewsParis;
else if(rateParis>=3)
	document.getElementById("rateStringParis").innerHTML="Not Bad"+"<br>"+"reviews"+reviewsParis;
else if(rateParis>=0)
	document.getElementById("rateStringParis").innerHTML="Bad"+"<br>"+"reviews"+reviewsParis;


$(document).ready(function(){
	$("#sharmCheckBotton").click(function(){
	$("#selectDataSharm").slideToggle("slow");
  });
});


$(document).ready(function(){
	$("#cairoCheckBotton").click(function(){
	$("#selectDataLondon").slideToggle("slow");
  });
});


$(document).ready(function(){
	$("#hurghadaCheckBotton").click(function(){
	$("#selectDataParis").slideToggle("slow");
  });
});
  var d=[];
function roomnoSharm()
{

	d[0]=form.chOut.value;
	d[1]=form.chIn.value;
	d[2]=form.singleDouble.value;
	d[3]=form.singleDouble.value;
	d[4]=form.bedno.value;
	d[5]=form.bedno.value;
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
		if(arry[i]===1)
			{
				if(i<2)
				document.getElementById("in"+i).style.border="1px solid black";
				else
				document.getElementById("in"+i).style.border="none";
			}
		else
			{document.getElementById("in"+i).style.border="2px solid red";}
		if(indx===d.length)
		{document.getElementById("roomNoSharm").innerHTML="Your Room Number :16L<br>You Pay In Hotel";}

}
}

function roomnoLondon()
{

	d[0]=form2.chOut2.value;
	d[1]=form2.chIn2.value;
	d[2]=form2.singleDouble2.value;
	d[3]=form2.singleDouble2.value;
	d[4]=form2.bedno2.value;
	d[5]=form2.bedno2.value;
	var indx=0;
	var arry=[];
	for (var i=0;i<d.length; i++)
	{
		if(d[i]=="")
		{arry[i]=0}
		else
		{arry[i]=1;indx++;}
	}
	for (var i=0;i<d.length; i++)
	{
		if(arry[i]===1)
			{
				if(i<2)
				document.getElementById("inl"+i).style.border="1px solid black";
				else
				document.getElementById("inl"+i).style.border="none";
			}
		else
			{document.getElementById("inl"+i).style.border="2px solid red";}
		if(indx===d.length)
		{document.getElementById("roomNoLondon").innerHTML="Your Room Number :27C<br>You Pay In Hotel";}

}
}

function roomnoParis()
{

	d[0]=form3.chOut3.value;
	d[1]=form3.chIn3.value;
	d[2]=form3.singleDouble3.value;
	d[3]=form3.singleDouble3.value;
	d[4]=form3.bedno3.value;
	d[5]=form3.bedno3.value;
	var indx=0;
	var arry=[];
	for (var i=0;i<d.length; i++)
	{
		if(d[i]=="")
		{arry[i]=0}
		else
		{arry[i]=1;indx++;}
	}
	for (var i=0;i<d.length; i++)
	{
		if(arry[i]===1)
			{
				if(i<2)
				document.getElementById("inp"+i).style.border="1px solid black";
				else
				document.getElementById("inp"+i).style.border="none";
			}
		else
			{document.getElementById("inp"+i).style.border="2px solid red";}
		if(indx===d.length)
		{document.getElementById("roomNoParis").innerHTML="Your Room Number :27C<br>You Pay In Hotel";}

}
}

