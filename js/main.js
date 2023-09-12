var getRandomNumber = function(size){
	return Math.floor(Math.random() * size);
}

var width = 800;
var height = 800;

var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height),
};

var clicks = 0;
var clickLimits = 49;

var getDistance = function(event, target){
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function(distance){
	if(distance < 10){
		return "Обожжешься!";
	}	else if(distance < 40){
		return "Очень горячо";
	}	else if(distance < 80){
		return "Горячо";
	}	else if(distance < 160){
		return "Тепло";
	}	else if(distance < 320){
		return "Холодно";
	}	else if(distance < 640){
		return "Очень холодно";
	}	else if(distance < 670){
		return "Очень-очень холодно";
	}	else{
		return "Замерзнешь!";
	}
};



$("#map").click(function(event){
	clicks++;
	if(clicks > clickLimits){
		alert("Ты не смог найти клад! не расстраивайся: " + clicks);
		return;
	}
	var distance = getDistance(event, target);
	var distanceHint = getDistanceHint(distance);
	$("#distance").text(distanceHint);
	$("#clicks-remaining").text(clickLimits - clicks + ": Осталось кликов");
	if(distance < 8){
		alert("Клад найден! Сделано кликов: " + clicks);
		return;
	} 
	
});