/**
 * 
 */
//Function toi check whether a string is blank or not

is_Blank =function(input){
	if(input.lenght==0)
		return true;
	else
		return false;
	
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));
console.log(Palindrome("Hello"));
//Function that check whether a passed string is palindrome ?

function Palindrome(str){
	//Change the string into lower case and remove all non-alphanumeric charters 
//	debgger;
	if(typeof str!='string'){
		console.log("Not a String");
		
		return false;
	}
	var cstr=str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	
	var ccount=0;
	//Check whether the string is empty or not 
	
	if(cstr===""){
		console.log("Nothing found!");
		return false;
	}
	//Check if the length of the string is even or odd
	if((cstr.length)%2===0){
		ccount=(cstr.lenght)/2;
		
	}else{
		//if the lenght of the string is 1 then it becomes a palindrome
		if(cstr.length===1){
			console.log("Entry is a Palindrome");
			return true;
			
		}else{
			//if the length of the string is odd ignore middle charter
			ccount=(cstr.length-1)/2;
			
		}
	}
	//Loop through to check the first charter to the last charter and then move next 
	for(var x=0;x<ccount;x++){
//		debugger;
//		Compare charters and drop then if they do not math 
		//let k=cstr.slice(-1-x)[0];
		let k=cstr.substr(-1-x,1);
		if(cstr[x]!=k){
			console.log("The String"+str+"is not a palindrom");
			
			return false;
		}
	}
	console.log(`The Sting ${str} is a palindrome`);
	return true;
}
console.log("Another Method");
ReverseString=(cstr)=>{
//	rstr=cstr.split('').reverse().join('');
	rstr=[...cstr].reverse().join('');
	console.log(cstr+"\n"+rstr);
	cstr==rstr?console.log(`${cstr}is a palindrome`):console.log(`${cstr} is not a palindrome`);
	
}

ReverseString("Mahasatra");

