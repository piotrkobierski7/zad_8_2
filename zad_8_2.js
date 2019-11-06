'use strict';
var output = document.getElementById('output');
output.innerHTML = 'Click the button!' + '<br><br>' + output.innerHTML; 
var button_CtoF = document.getElementById('C-F');
var button_FtoC = document.getElementById('F-C');
var tempOffsetFahr = 32; //static numbers for C->F formula
var tempMultipleFahr = 1.8; //static numbers for C->F formula
var boilingPointC = 100;
var freezingPointC = 0;
function cTempIntoF (temperatureC) {
	var temperatureF;
	return temperatureF=tempMultipleFahr*temperatureC+tempOffsetFahr;
}

function checkInfo (temperatureC) {
  	if (temperatureC < freezingPointC){ 
    	return ' At this temperature water freezes';
	} else if (temperatureC < boilingPointC) {
  		return ' At this temperature water is in liquid form';
	} else { 
  		return ' At this temperature water is in gas form';
  	}
}

function fTempIntoC (temperatureF) {
	var temperatureC;
	return temperatureC = (temperatureF - tempOffsetFahr)/tempMultipleFahr;
}

function showInfo (typeOfDegree, temperature) {
	var tempC;
	if (!isNaN (temperature)) {
		tempC = typeOfDegree === 'C' ? temperature : fTempIntoC(temperature);
		output.innerHTML = 'Temperature in Celsius degrees is '+ tempC
		+ '<br><br>' + 'Temperature in Fahrenheit degrees is '
		+ cTempIntoF (tempC) + '<br><br>' + checkInfo (tempC) + '<br><br>'
		+ '***************'  + '<br><br>' + output.innerHTML;
	} else {
    	output.innerHTML = temperature +' is not a number'
    	+ '<br><br>'+ output.innerHTML;
 	}
}

button_FtoC.addEventListener ('click', function() {
	var temperature = window.prompt(
		'What is the temperature in Fahrenheit degree?'
		);
  	showInfo('F',temperature);
});

button_CtoF.addEventListener ('click', function() {
	var temperature = window.prompt(
		'What is the temperature in Celsius degree?'
		);
  	showInfo('C',temperature);
});


