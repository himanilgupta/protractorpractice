function checkCookies() {
	var text = "";
	if (navigator.cookieEnabled == true) {
		text = "Cookies are enabled.";
	} else {
		text = "Cookies are not enabled.";
	}
	document.getElementById("displaytext").innerHTML = text;
}
function submitInput(){
	var a = document.getElementById("name").value;
	var b= document.getElementById("displaytext").innerHTML;
	var c = document.getElementById("textarea").value;
	alert(a+"\n"+b+"\n"+c+"\n\n"+"will be submitted");
}

function changecolor(element) {
	element.value="Type something verrrrrrrrrrrrrrrrrrry short sentence.";	
	element.style.background ="black";
	element.style.color="white";
}
function blurInput() {
	var x = document.getElementById("name");
	x.value = x.value.toUpperCase();
}
function displaySelected() {
	if (document.getElementById("options").value == 1)
		document.getElementById("displaytext").innerHTML = "Please select a colour";
	else if (document.getElementById("options").value == 2)
		document.getElementById("displaytext").innerHTML = "White";
	else if (document.getElementById("options").value == 3)
		document.getElementById("displaytext").innerHTML = "Blue";
	else document.getElementById("displaytext").innerHTML = "Magenta";
}
function changeTextAreaColor(){
	if (document.getElementById("options").value == 2){
		document.getElementById("textarea").style.background="white";
		document.getElementById("textarea").style.color="black";
	}
	if (document.getElementById("options").value == 3){
		document.getElementById("textarea").style.background="blue";
		document.getElementById("textarea").style.color="white";
	}
	if (document.getElementById("options").value == 4){
		document.getElementById("textarea").style.background="magenta";
		document.getElementById("textarea").style.color="white";
	}
}