var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("mainBtn");
var lBtn = document.getElementById("lBtn");
var rBtn = document.getElementById("rBtn");




body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"; 
	css.textContent = body.style.background + ";";


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
};



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


function getRandomColor() {
	var letters = '0123456789abcdef';
	var randomColor = '#';
	for (var i = 0; i < 6; i++) {
		randomColor += letters[Math.floor(Math.random() * 16)];
	}
	return randomColor;
}


function setRandomBackground() {
	color1.value = getRandomColor();
	color2.value = getRandomColor(); 
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")"; 

	css.textContent = body.style.background + ";";
}

function printOut() {
	prompt("Good evening everyone!")
}

function setLRandomBackground() {
	color1.value = getRandomColor();
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")"; 

	css.textContent = body.style.background + ";";
}

function setRRandomBackground() {
	color2.value = getRandomColor();
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")"; 

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", setRandomBackground);
lBtn.addEventListener("click", setLRandomBackground);
rBtn.addEventListener("click", setRRandomBackground);


