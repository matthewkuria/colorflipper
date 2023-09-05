const colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue","violet","white","indigo"];
const btn = document.getElementById("btn");
const color= document.querySelector(".color");
const bcolor = document.querySelector(".bcolor");
const bcolor1 = document.querySelector(".bcolor1");
const divElement = document.getElementById("hero");
const divElement1 = document.getElementById("hero1");

btn.addEventListener('click',function(){
	//get random number between 0 and 3
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = color[randomNumber];
	color.textContent = colors[randomNumber];
	bcolor.textContent = colors[randomNumber];
	bcolor1.textContent = colors[randomNumber];
	divElement.style.backgroundColor = colors[randomNumber];
	divElement1.style.backgroundColor = colors[randomNumber];
});


function getRandomNumber(){
	return Math.floor(Math.random() * colors.length);
}