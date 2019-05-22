$(document).ready(function(){
	var hour;
	function selector() {
	  var currentDate = new Date();
	  var timeToronto = currentDate.getTime();
	  //calculate the UTC time
	  var timeUTC = timeToronto + 4*60*60*1000;
	  var city = document.getElementById('city');
	  var timeDifference = city.options[city.selectedIndex].value;
	  //var cityOrder = city.options[city.selectedIndex].value;
	  
	  //calculate the time for each city by the scale factor
	  var timeCity = timeUTC + timeDifference*60*60*1000;
	  currentDate = new Date(timeCity);
		
	  hour = currentDate.getHours();
	  var min = currentDate.getMinutes();
	  var sec = currentDate.getSeconds();
	  
	  //format the numbers to be properly aligned
	  var tempHour =hour;
	  if (hour < 10) tempHour = "0" + tempHour;
	  if (min < 10) min = "0" + min;
	  if (sec < 10 ) sec = "0" + sec;
	  
	  //assign the time at the template
	  var timeElement = document.getElementById('time');
	  timeElement.innerText = tempHour + ":" + min + ":" + sec;
	  
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
	//call the method for regular interval of time
	selector();
	imageProcess();
	function imageProcess(){
		var images =[
			{
				color:"black",
				url:'data/twilight.jpg'
			},
			{
				color:"black",
				url:'data/noon.jpg'
			},
			{
				color:"white",
				url:'data/night.jpg'
			}
			
		];
		var url;
		var color;
		var index;
		if(hour<=10 & hour >5){	
			index = 0;		
		}
		else if(hour<18 & hour >=11){
			index =1;
		}
		else{
			index = 2;
		}
		url = images[index]["url"];	
		color = images[index]["color"];	
		$('body').css('background-image', 'url('+ url + ')');
		$('body').css('color', color);
	}
	setInterval(selector,1000);
	setInterval(imageProcess,1000);
});
