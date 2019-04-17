var tmpl = {
	head:function(title){
		var str = "<div class='panel'><div class='panel-head'>";
		str+=title+"</div>";
		return str;
	},
	body:function(content){
		var strContent ="<div class='panel-body'><p>&nbsp;&nbps;&nbsp;&nbsp;"+content;
		strContent+="</p></div>";
		return strContent;
	},
	foot:function(ts){
		var strfoot = "<div class='panel-foot'><div class='timeStamp'>"+ts+"</div>";
		strfoot+="</div>";
		return strfoot;
	}
} 

function getTime(){
	var myDate = new Date();
	var time =myDate.getFullYear();
	time+=" - "+(myDate.getMonth()+1);
	time+=" - "+(myDate.getDate());
	time+=" "+(myDate.getHours());
	time+=" :"+(myDate.getMinutes());
	return time;
	
}

function edit(){
	var content = $("#txtarea").text();
	if(content==""||content==null){
		alert("没话可说吗?");
	}
	
	$("#toXY").click(function(){
		var title = "周小全对王小莹说:"
		var myDate = new Date();
		var timeStamp = getTime();
		var html = head(title)+body(content)+foot(timeStamp);
		$("#messageBoard").html(html);
	})
	$("#toXQ").click(function(){
		var title = "王小莹对周小全说:"
		var myDate = new Date();
		var timeStamp = getTime();
		var html = head(title)+body(content)+foot(timeStamp);
		$("#messageBoard").html(html);
	})
}