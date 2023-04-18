/**
 * 
 */
console.log("Demo for various loop functions in javascript")
console.log("For Loop")
for(let i=0;i<=5;i++){
	if(i===0){
		console.log(i+" is Even")
	} else if (i%2===0) {
		console.log(i+" is Even")
	} else {
		console.log(i+" is Odd")
	}
}

console.log("While Loop")
x=0
while(x<=5){
	if(x===0){
		console.log(x+" is Even")
	} else if (x%2===0) {
		console.log(x+" is Even")
	} else {
		console.log(x+" is Odd")
	}
	x++
}
console.log("Do while Loop")
x=0
do{
	if(x===0){
		console.log(x+" is Even")
	} else if (x%2===0) {
		console.log(x+" is Even")
	} else {
		console.log(x+" is Odd")
	}
	x++
}while(x<=5){
	if(x===0){
		console.log(x+" is Even")
	} else if (x%2===0) {
		console.log(x+" is Even")
	} else {
		console.log(x+" is Odd")
	}
	x++
}