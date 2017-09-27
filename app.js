var todaysInfo = new Date();
var dayDate = todaysInfo.getDate();
 var day = todaysInfo.getDay()
var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
              'Friday', 'Saturday'];
var month = todaysInfo.getMonth() + 1;
var year = todaysInfo.getFullYear();

var hour = todaysInfo.getHours();
var minute = todaysInfo.getMinutes();
var second = todaysInfo.getSeconds();

if (minute < 10) {
  minute = "0" + minute;
}

if (hour > 12) {
  hour = hour - 12;
  second = second + " PM"
}
else if (hour < 12) {
  second = second + " AM"
}
console.log(todaysInfo);
console.log(daylist[day]);


document.write("Today is " + daylist[day] + " " + dayDate + "/" + month +
 "/" + year + " "
  + hour + " : " + minute + " : " + second)