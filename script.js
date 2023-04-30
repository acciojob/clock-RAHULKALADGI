//your JS code here. If required.
var date = new Date();
var d = date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()+", ";
const dateTime = new Date().toLocaleTimeString('en-US', {
	hour: 'numeric', minute: 'numeric', second: 'numeric' ,hour12: true
	})
	document.getElementById("timer").innerHTML = d+dateTime;