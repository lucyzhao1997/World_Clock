$(document).ready(function(){
	function selector() {
	  var currentDate = new Date();
	  var timeToronto = currentDate.getTime();
	  var timeUTC = timeToronto + 4*60*60*1000;
	  var city = document.getElementById('city');
	  var timeDifference = city.options[city.selectedIndex].value;
	  var cityOrder = city.options[city.selectedIndex].value;
	  
	  var timeCity = timeUTC + timeDifference*60*60*1000;
	  currentDate = new Date(timeCity);
		
	  var hour = currentDate.getHours();
	  var min = currentDate.getMinutes();
	  var sec = currentDate.getSeconds();
	  
	  if (hour < 10) hour = "0" + hour;
	  if (min < 10) min = "0" + min;
	  if (sec < 10 ) sec = "0" + sec;
	  
	  var timeElement = document.getElementById('time');
	  timeElement.innerText = hour + ":" + min + ":" + sec;
	  
	  var year = currentDate.getFullYear();
	  var month = currentDate.getMonth() + 1;
	  var day = currentDate.getDate();
	  
	  if (month < 10) month = "0" + month;
	  if (day < 10) day = "0" + day;
	  
	  var weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuarday'];
	  var week = weekArray[currentDate.getDay()];
	  var dateElement = document.getElementById('date');
	  dateElement.innerText = year + "/" + month + "/"
	 + day + " " + week;
	}
	selector();
	setInterval(selector,1000);
});