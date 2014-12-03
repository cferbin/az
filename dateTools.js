var dateAdd = function(strInterval,  NumDay,  dtDate)  {  
	var  dtTmp  =  new  Date(dtDate); 
	if  (isNaN(dtTmp))  dtTmp  =  new  Date();  
	switch  (strInterval)  {  
	 case  "s":return  new  Date(Date.parse(dtTmp)  +  (1000  *  NumDay));  
	 case  "n":return  new  Date(Date.parse(dtTmp)  +  (60000  *  NumDay));  
	 case  "h":return  new  Date(Date.parse(dtTmp)  +  (3600000  *  NumDay));  
	 case  "d":return  new  Date(Date.parse(dtTmp)  +  (86400000  *  NumDay));  
	 case  "w":return  new  Date(Date.parse(dtTmp)  +  ((86400000  *  7)  *  NumDay));  
	 case  "m":return  new  Date(dtTmp.getFullYear(),  (dtTmp.getMonth())  +  NumDay,  dtTmp.getDate(),  dtTmp.getHours(),  dtTmp.getMinutes(),  dtTmp.getSeconds());  
	 case  "y":return  new  Date((dtTmp.getFullYear()  +  NumDay),  dtTmp.getMonth(),  dtTmp.getDate(),  dtTmp.getHours(),  dtTmp.getMinutes(),  dtTmp.getSeconds());  
	}  
 } 
 
Date.prototype.format = function(format) {
	var o = {
		  "M+" :this.getMonth() + 1, // month
		  "d+" :this.getDate(), // day
		  "h+" :this.getHours(), // hour
		  "m+" :this.getMinutes(), // minute
		  "s+" :this.getSeconds(), // second
		  "q+" :Math.floor((this.getMonth() + 3) / 3), // quarter
		  "S" :this.getMilliseconds()
	}
	if (/(Y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
	}	   
	for ( var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
						: ("00" + o[k]).substr(("" + o[k]).length));
			}
	}
	return format;
}
var addZero = function (temp)  
	{  
	 if(temp<10) 
		return "0"+temp;  
	 else 
		return temp;  
	}  

var getDayOrWeek = function(d){
	var date = new Date(d);
	var dayWeek = [];
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var week = date.getDay();
	switch (week){  
		 case 1: week = "星期一"; break;  
		 case 2: week = "星期二"; break;  
		 case 3: week = "星期三"; break;  
		 case 4: week = "星期四"; break;  
		 case 5: week = "星期五"; break;  
		 case 6: week = "星期六"; break;  
		 default: week="星期日";  
	}
	dayWeek.push(addZero(month));
	dayWeek.push(addZero(day));
	dayWeek.push(week);
	return dayWeek;
}	
var getDateNum = function(leaveStartTime,leaveEndTime){
	var beginTime = leaveStartTime;
	var endTime = leaveEndTime;
	if(beginTime == "" || endTime == ""){
		return ;
	}
	var checkbegin = new Array();
	var checkend =new Array();
	var begin = beginTime.substring(0,10);
	var end = endTime.substring(0,10);
	checkbegin  = begin.split("-");
	checkend = end.split("-");
	beginTime = new  Date(checkbegin[0],checkbegin[1],checkbegin[2]);
	endTime = new Date(checkend[0],checkend[1],checkend[2]);			
	var sDate = parseInt(endTime.getTime())- parseInt( beginTime.getTime());
	var passDate = Math.floor(sDate/(24*3600*1000));
	return passDate;
}
		