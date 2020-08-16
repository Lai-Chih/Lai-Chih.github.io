
function DigitalTime1() 
{ 
    var deadline= new Date("05/25/2018") //生效倒數計時 
    var symbol=" GDPR 生效" 
    var now = new Date() 
    var diff = -480 - now.getTimezoneOffset() //是台北時間和當地時間的時間差(以分鐘為單位) 
    var leave = (deadline.getTime() - now.getTime()) + diff*60000 //getTime()以毫秒為單位 60000=1000(毫秒)*60
//            console.log(now.getTime())
    var day = Math.floor(leave / (1000 * 60 * 60 * 24)) 
    var hour = Math.floor(leave / (1000*3600)) - (day * 24) 
    var minute = Math.floor(leave / (1000*60)) - (day * 24 *60) - (hour * 60) 
    var second = Math.floor(leave / (1000)) - (day * 24 *60*60) - (hour * 60 * 60) - (minute*60)

//            var deadline_2= new Date("05/25/2018") //开幕后计时 
//            var symbol_2="8月13日" 
//            var now_2 = new Date() 
//            var diff_2 = -480 - now.getTimezoneOffset() //是北京时间和当地时间的时间差 
//            var leave_2 = (now_2.getTime() - deadline_2.getTime()) + diff_2*60000 
//            var day_2 = Math.floor(leave_2 / (1000 * 60 * 60 * 24)) 
//            var hour_2 = Math.floor(leave_2 / (1000*3600)) - (day_2 * 24) 
//            var minute_2 = Math.floor(leave_2 / (1000*60)) - (day_2 * 24 *60) - (hour_2 * 60) 
//            var second_2 = Math.floor(leave_2 / (1000)) - (day_2 * 24 *60*60) - (hour_2 * 60 * 60) - (minute_2*60) 

//    var LiveClock1=document.getElementById("LiveClock1")
//            day=day+1; 
//            day_2=day_2+1; 
    
    var days=document.getElementById("days")
    var hr=document.getElementById("hr")
    var mins=document.getElementById("mins")
    var sec=document.getElementById("sec")
    var counting=document.querySelector('.counting')
    var time=document.querySelector('.time')

    if (day>1) //還未生效 
    { 
        //LiveClock1.innerHTML = "现在"+symbol+"天" 
        //LiveClock1.innerHTML = "<font class=fon1>距"+symbol+"还有<font color=FF0000>"+day+"</font>天</font>" 
//        LiveClock1.innerHTML = "現在離"+symbol+"還有 "+day+" 天 "+hour+" 小时 "+minute+" 分 "+second +" 秒 "
        days.innerHTML = day
        hr.innerHTML = hour
        mins.innerHTML = minute
        sec.innerHTML = second
        setTimeout("DigitalTime1()",1000) 
    } 
    if (0<day<1) //快要生效 
    { 
//        LiveClock1.innerHTML = "現在離"+symbol+"還有 "+"0 天 "+hour+" 小时 "+minute+" 分 "+second +" 秒 "
        //LiveClock1.innerHTML = "<font class=fon1>"+symbol+"开幕已有<font class=fon2>"+day_2+"</font>天</font>"
        days.innerHTML = day
        hr.innerHTML = hour
        mins.innerHTML = minute
        sec.innerHTML = second
        setTimeout("DigitalTime1()",1000) 
    } 
    if (day<0) //已經生效 
    { 
        //LiveClock1.innerHTML = "现在"+symbol+"天" 
//        LiveClock1.innerHTML = "<font class=fon1>GDPR 已正式生效</font>" 
        counting.removeChild(time)
        counting.innerHTML = "<p>GDPR 已正式生效</p>"
        setTimeout("DigitalTime1()",1000) 
    } 
//            if (day<0 & day_2>19) //奥运会结束 
//            { 
//                //LiveClock1.innerHTML = "现在离"+symbol+"还有"+day+"天"+hour+"小时"+minute+"分"+second +"秒" 
//                LiveClock1.innerHTML = "<font class=fon1>2008北京奥运会已全部结束</font>" 
//                setTimeout("DigitalTime1()",1000) 
//            } 
} 
DigitalTime1()
    