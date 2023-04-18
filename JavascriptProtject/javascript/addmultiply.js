/**
 * 
 */
function add()
{
	num1 = document.getElementById("firstNumber").value
	num2 = document.getElementById("secondNumber").value
	document.getElementById("result").innerHTML=parseInt(num1,10)+parseInt(num2,10)
}
function multiply()
{
	num1 = document.getElementById("firstNumber").value
	num2 = document.getElementById("secondNumber").value
	document.getElementById("result").innerHTML=num1*num2
}