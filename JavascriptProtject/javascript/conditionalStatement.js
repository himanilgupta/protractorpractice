var x=3
var y=0
var z=7
console.log("And Operator")
if(x>y && x>z){
	if(y>z) {
		console.log(x+","+y+","+z)
	} else {
		console.log(x+","+z+","+y)
	}
} else if (y>x&&y>z) {
	if(x>z){
		console.log(y+","+x+","+z)
	}else{
		console.log(x+","+z+","+y)
	}
}else if (z>x&&z>y){
	if(x>y){
		console.log(z+","+x+","+y)
	}else {
		console.log(y+","+z+","+x)
	}
}
console.log("OR Operator")
if(x>y || x>z){
	if(y>z) {
		console.log(`${x},${y},${z}`)
	} else {
		console.log(`${x},${z},${y}`)
	}
} else if (y>x||y>z) {
	if(x>z){
		console.log(`${y},${x},${z}`)
	}else{
		console.log(`${x},${z},${y}`)
	}
}else if (z>x||z>y){
	if(x>y){
		console.log(`${z},${x},${y}`)
	}else {
		console.log(`${y},${z},${x}`)
	}
}