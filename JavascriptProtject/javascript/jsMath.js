/**
 * 
 */

jsMath = function() {}

jsMath.random = function(min,max){
	if(min==0&&max==0) return 0
	return min+Math.floor(Math.random()*(max-min+1))
}

jsMath.isInteger=function(num){
	return (typeof num!== 'number'||typeof num == 'NaN'||isNaN(parseInt(num, 10)))|| parseInt(Number(num)!== num) ? true : false
}

console.log(jsMath.random(2,10))
console.log(jsMath.isInteger(7.45))
console.log(jsMath.isInteger(-7))
console.log(jsMath.isInteger(0))
console.log(jsMath.isInteger("23"))
console.log(jsMath.isInteger("add"))
console.log(jsMath.isInteger(NaN))

jsMath.miscFunction = function(){
	console.log(Math.round(3.557))
	console.log(Math.pow(3))
	console.log(Math.PI)
}

jsMath.miscFunction()

jsMath.addTwoNum = function(a,b) {
	if(a==0&&b==0) return 0
	console.log("Addition: "+a+Math.floor(Math.random()*(a-b+1)))
	console.log("Multiplication: "+a*Math.floor(Math.random()*(a-b+1)))
}
jsMath.addTwoNum(5,3)