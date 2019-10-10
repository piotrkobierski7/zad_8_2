'use strict';

var output = document.getElementById('output');

output.innerHTML = 'Click the button!' + '<br><br>' + output.innerHTML; 

var button_CtoF = document.getElementById('C-F');
var button_FtoC = document.getElementById('F-C');

var temperatureC,temperatureF;

function cTempIntoF(temperatureC){
	var temperatureF;
	return temperatureF=1.8*temperatureC+32;
}

function checkInfo(temperatureC){
  	if(temperatureC < 0){ 
    	return ' At this temperature water freezes';
	}else if(temperatureC < 100){
  		return ' At this temperature water is in liquid form';
	}else{ 
  		return ' At this temperature water is in gas form';
  	}
}

function fTempIntoC(temperatureF){
	var temperatureC;
	return temperatureC=(temperatureF - 32)/1.8;
}


function showInfo(typeOfDegree, temperature){
	var tempC;
	if (!isNaN(temperature)) {
		output.innerHTML = 'Temperature in Celsius degrees is '+
		(tempC=typeOfDegree === 'C' ? temperature : fTempIntoC(temperature))
		+ '<br><br>' + 'Temperature in Fahrenheit degrees is '+
		typeOfDegree === 'F' ? temperature : cTempIntoF(temperature) 
		+ '<br><br>' + checkInfo(tempC) + '<br><br>'+ '***************'  + '<br><br>' + output.innerHTML;
	} else {
    output.innerHTML = temperature +' is not a number'+ '<br><br>'+ output.innerHTML;
 }
}


button_FtoC.addEventListener('click', function() {
	var temperature = window.prompt('What is the temperature in Fahrenheit degree?');
  	showInfo('F',temperature);
});

button_CtoF.addEventListener('click', function() {
	var temperature = window.prompt('What is the temperature in Celsius degree?');
  	showInfo('C',temperature);
});

