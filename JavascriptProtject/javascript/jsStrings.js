/**
 * 
 */
is_Blank = function(input) {
	if(input.length === 0)
		return true
		else
			return false
}
console.log(is_Blank(""))
console.log(is_Blank("abd"))
function Palindrome(str){
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
	console.log(`The String ${str} is palindrome`)
	return true
}
//Palindrome('naman')
//Palindrome('1234321')
//Palindrome('asdfasdfadsfa')
//Palindrome('abcdddcba')
//Palindrome(234234324234)
//Palindrome('abcdcba')

ReverseString=(cstr)=>{
	rstr=cstr.split('').reverse().join('')
//	rstr=[...cstr].reverse().join('')
	console.log(cstr+"\n"+rstr)
	cstr==rstr?console.log(`${cstr} is a palindrome`):console.log(`${cstr} is not a palindrome`)
}

ReverseString("maharashtra")
ReverseString("maharashtra")
ReverseString('naman')
ReverseString('1234321')
ReverseString('asdfasdfadsfa')
ReverseString('abcdddcba')
//ReverseString(234234324234)
ReverseString('abcdcba')