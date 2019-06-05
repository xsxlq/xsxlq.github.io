var isform = 0;
function checkForm(){
	if(isform == 0)
	return false;
	return true;
}
$(function(){

//	$("#tap1").click(function(){
//		$(".login-menu").hide()
//		$(".visitor-menu").slideDown(500);
//		$(".cy").hide();
//		$(".visitor-cy").slideDown(500);
//	})
//	$("#tap2").click(function(){
//		$(".login-menu").slideDown(1000);
//		$(".visitor-menu").hide()
//		$(".cy").slideDown(1000)
//		$(".visitor-cy").hide();
//	})
	$(".test-sub").click(function(){
		var name = $("#test-name").val();
		var cont = $("#test-cont").val();
		var mytime = new Date();
		var myyear = mytime.getFullYear()
		var mymon = mytime.getMonth()+1;
		var myday = mytime.getDate();
		var myhour = mytime.getHours();
		var myminu = mytime.getMinutes();
		var showTime = 500;
		var click = 0;
		if(name.length == 0||cont.length == 0){
			$("#say-error").slideDown(500);
			
		}else{
			$("#say-error").slideUp(500);
			$(".xsxlq-comment").prepend('<div class="xsxlq-append-comment" style="display: none;"> <span class="name">'+name+' :</span><br /><span class="cont">'+cont+'</span><span class="time">'+myyear+'年'+mymon+'月'+myday+'日  '+myhour+':'+myminu+'</span></div>')
			$(".xsxlq-append-comment").show(500);
			isform = 1;
		}
	})
	$(".like").click(function(){
		var is_like = confirm("喜欢游客留言？");
		if(is_like){
			alert("(*^▽^*)");
		}else{
			alert("o(╥﹏╥)o");
		}
	})
	
	$(".guide-click").click(function(){
		$(".guide").hide();
		alert("*-*-")
	})
	
})



function myTime(){
	var mydate = new Date();
	var myday = 30 - mydate.getDate();
	var myhour = 24- mydate.getHours();
	var mymin = 60 - mydate.getMinutes();
	var mysec = 60- mydate.getSeconds();
	i = myday*24*60*60 + myhour*60*60 + mymin*60 + mysec;
	$("#last-time").text(i);
}
setInterval("myTime()",1000);

//var sink = ["天桥望去行人在人海","每个面孔找另一个人爱","隐形匿在你左边站台","好几次欲言又止说声嗨","哈喽男孩一周加起来","相处还不够一小时大概","如果电梯突然停下来","能换多一点时间呆一块","你好陌生人 会不会奇怪","如果有一天我们亲密到无猜","千万别说爱","让我保持等的姿势继续期待","不熟反而能自在"];
//var n = -1;
//function go(){
//	n++;
//	if(n > 12){
//		n = 0;
//	}
//	document.getElementById("test-cont").value = sink[n];
//	
//}
//var _sink = setInterval("go()",2500);
//var is = 0;
//$(function(){
//	$("#test-cont").focus(function(){
//		clearInterval(_sink);
//		$(this).select();
//		is = 1;
//	})
//	$("#test-name").focus(function(){
//		$(this).select();
//		is = 1;
//	})
//		$(".test-sub").click(function(){
//			if(is == 1){
//				_sink = setInterval("go()",2500);
//				is = 0;
//			}
//		})
//})

// 平滑滚动
$(function(){
	$(".fix-side-menu").click(function(){
	$.scrollTo("#top",550);		
	})
	$(".pageControl").click(function(){
		
		console.log(666)
	})
})
//自动消息--------------------------------
//消息初始配置
iziToast.settings({
    timeout: 3000,
    // position: 'center',
    // imageWidth: 50,
    pauseOnHover: true,
    // resetOnHover: true,
    close: true,
    progressBar: true,
    // layout: 1,
    // balloon: true,
    // target: '.target',
    // icon: 'material-icons',
    // iconText: 'face',
    // animateInside: false,
    // transitionIn: 'flipInX',
    // transitionOut: 'flipOutX',
});

function replyOK(event) {
    //event.preventDefault();

    iziToast.show({
        class: 'test',
        color: 'dark',
        icon: 'icon-contacts',
        title: '消息',
        message: '回复成功',
        position: 'bottomCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: '../img/avatar.jpg',
        imageWidth: 70,
        layout:2,
        iconColor: 'rgb(0, 255, 184)'
    });
}
function msgOK(event) {

    iziToast.show({
        class: 'test',
        color: 'dark',
        icon: 'icon-contacts',
        title: '消息',
        message: '留言成功',
        position: 'bottomCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: 'img/avatar.jpg',
        imageWidth: 70,
        layout:2,
        iconColor: 'rgb(0, 255, 184)'
    });
}
function fileError(event) {

    iziToast.show({
        class: 'test',
        color: 'dark',
        icon: 'icon-contacts',
        title: 'error',
        message: '图片大小',
        position: 'bottomCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: 'img/avatar.jpg',
        imageWidth: 70,
        layout:2,
        iconColor: 'rgb(0, 255, 184)'
    });
}
//------------------------------------------------