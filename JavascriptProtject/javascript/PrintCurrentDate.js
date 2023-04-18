/**
 * 
 */

let today = new Date()
var day = today.getDay()
var month = today.getMonth()
var milisecond = today.getMilliseconds()
var daylist = ["Sun","Mon", "Tue","Wed","Thu","Fri","Sat","Sun"]
var monthList = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
console.log("Today is:"+daylist[day]+", and month: "+monthList[month])
console.log("Today is:"+day+", and month: "+month)

var hour = today.getHours()
var minute = today.getMinutes()
var second = today.getSeconds()
var period = (hour <= 12)?"PM":"AM"
hour = (hour>=12)?hour-12:hour

if(hour===0&&period==='PM'){
	if(minute===0&&second===0){
		hour=12
		period='Noon'
	} else {
		hour=12
		period='PM'
	}
}
console.log("What's the time now: "+hour+":"+minute+":"+second+":"+milisecond+":"+period)