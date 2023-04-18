/**
 * 
 */
StringUtil = function() {
	this.helloWorld = function() { return "Hello Jasmine" }
}
StringUtil.prototype.is_Blank = function(input) {
	if(input.length === 0)
		return true
	else
		return false
}
StringUtil.prototype.Palindrome = function (str){
	debugger
	if(typeof str!=='string'){
		console.log('Its not a string')
		return false
	}
	var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
	var ccount = 0
	if(cstr===""){
		console.log("No String Found")
		return false
	}
	if((cstr.length)%2===0){
		ccount = (cstr.length)/2
	}else{
		if((cstr.length)===1){
			console.log("Entry is Palindrome")
			return true
		} else {
			ccount = (cstr.length-1)/2
		}
	}
	for(var x=0;x<ccount;x++){
		debugger
//		let k = cstr.slice(-1-x)[0]
		let k = cstr.substr(-1-x,1)
		if(cstr[x]!=k){
			console.log("The String "+str+" is not a palindrome.")
			return false
		}
	}
//	console.log(`The String ${str} is palindrome`)
	return true
}

StringUtil.prototype.ReverseString=(cstr)=>{
	rstr=cstr.split('').reverse().join('')
//	rstr=[...cstr].reverse().join('')
//	console.log(cstr+"\n"+rstr)
//	cstr==rstr?console.log(`${cstr} is a palindrome`):console.log(`${cstr} is not a palindrome`)
//	return cstr==rstr?(`${cstr} is a palindrome`):(`${cstr} is a palindrome`)
	return cstr==rstr?true:false
}
ArrayUtils = function(){
}

ArrayUtils.prototype.upperCase = function(str){
	var array1 = str.split(' ')
	var newArray1 = [] 
	
	for(var x=0;x<array1.length;x++){
		console.log(array1[x])
		newArray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1))
	}
	return newArray1.join(' ')
}

ArrayUtils.prototype.upperCaseAll = function(str) {
	return str.toUpperCase()
}
ArrayUtils.prototype.camelCaseAll = function(str) {
	var array1 = str.split(' ')
	var newArray1 = [] 
	
	for(var x=0;x<array1.length;x++){
		console.log(array1[x])
		newArray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1))
	}
	return newArray1.join(' ')
}
