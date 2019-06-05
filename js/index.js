//$(function(){
//	$(".masthead-nav li").click(function(){
//		$(this).addClass("active");
//		$(this).siblings().removeClass();
//	})
//	$(".masthead-nav li:nth-child(2)").click(function(){
//		$(".content1").hide();
//		$(".content2").slideDown(500);
//	})
//	$(".masthead-nav li:nth-child(1)").click(function(){
//		$(".content1").slideDown(500);
//		$(".content2").hide();
//	})
//})
var i = 0;
function colorStyle(){
	if(i>3){
		i = 0;
	}
	var moreColor = ["#AA59FF","#FF583E","#F93EFF","#545DF2"]
	document.body.style.backgroundColor = moreColor[i];
	document.getElementById("think").style.color = moreColor[i];
	document.getElementById("think").style.borderColor = moreColor[i];
	document.getElementById("about").style.color = moreColor[i];
	i++;
}
setInterval("colorStyle()",3500);
window.onscroll = function() {
    var Top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(Top> 600){
		document.getElementById("about").style.transform = "translateY(-3.5em)";
		document.getElementById("about").style.opacity = "1";
	}else{
		document.getElementById("about").style.transform = "";
		document.getElementById("about").style.opacity = "0";
	}
}
//		function getScroll1(){
//				var Top = document.documentElement.scrollTop;
//				console.log(Top);
//				if(Top> 600){
//					alert("*-*-*");
//					document.getElementById("about").style.transform = "translateX(4em)";
//				}else{
//					document.getElementById("about").style.transform = "";
//				}
//			}
var iMusuc = 0;
function myTime(){
	var mydate = new Date();
	var myday = mydate.getDate();
	var myhour = mydate.getHours();
	var mymin = mydate.getMinutes();
	var mysec = mydate.getSeconds();
	if(mymin<10){
		mymin = "0"+mymin;
	}
	if(mysec<10){
		mysec = "0"+mysec;
	}
	var icon = "♫";
	switch(iMusuc % 8){
		case 0:
			var t = myhour+":"+mymin+":"+mysec;
		break;
		case 1:
			var t = icon+":"+mymin+":"+mysec;
		break;
		case 2:
			var t = myhour+":"+icon+":"+mysec;
		break;
		case 3:
			var t = myhour+":"+mymin+":"+icon;
		break;
		case 4:
			var t = myhour+":"+mymin+":"+mysec;
		break;
		case 5:
		case 6:
		case 7:
			var t = myhour+":"+mymin+":"+mysec;
		break;
	}
	iMusuc++;
	if(iMusuc>100){
		iMusuc=0;
	}
	document.getElementById("think").value = t;
}
setInterval("myTime()",500);