/**
 * 
 */
//1. Function 1
var upperCase=function(str){
	var array1=str.split(' ');
	var newarray1=[];
	
	for(var x=0; x<array1.length;x++){
		newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
	}
	return newarray1.join(' ');
	
}
//console.log(uppercase("synehcorn address is hinjewadi, Phase 3"));


//2. Function Expression 

const mergeArrays = function(arr1, arr2){
	return arr1.concat(arr2);
	
}
arr1=[1,2,3]; 
arr2= [4,5,6];

console.log(mergeArrays(arr1, arr2));


//3.ShortHand method definition  - Add/retrive value to/from array 

const array_collection ={
		items:[],
		add(...items){
			this.items.push(...items);
			
		},
		get(index){
			return this.items[index];
		}
}

array_collection.add('Synehcron', 'WellsFargo', 'UBS');
console.log(array_collection.get(2));


//4. Arrow function - Array Methods 

const array_methods=()=>{
	var arr=[0,1,2,3,4,5];
	console.log(arr);
	arr.push(6);
	console.log(arr);
	arr.pop();
	console.log(arr);
	arr.shift();
	console.log(arr);
	arr.unshift(1);
	console.log(arr);
	console.log(arr.indexOf(1));
	
}
array_methods();

var mergedArray=(arr1,arr2)=>arr1.concat(arr2);//arrow lamda function mergeing 
console.log("meragedArray:"+mergedArray(arr1,arr2));

//6. New function - Function Constructor with array spread Operator

var arrA='arrA', arrB='arrB', arrC='arrC';

var mergeFunction=new Function(arrA,arrB,arrC,'return[...arrA,...arrB,...arrC]');

console.log(mergeFunction([1,2],[3,4],[5,6]));

//Other array Methonds 

const array_iteration =()=>{
	var num = [21,37,4,8,33,44];
	num.forEach(function(value){
		console.log(value);
	})
	
	var filterednum=num.filter(arrayFilter);
	function arrayFilter(value){
		return value<=30;
	}
	console.log(filterednum);
	
	num.sort(function(a,b){
		return a-b;
		
		
	});
	console.log(num);
	console.log(Math.max.apply(null,num));//or Math.max(21,37,4,8,33,44) or Math.max(...num)
	
	console.log(Math.min.apply(null,num));
	
}
array_iteration();

//IIFE(Immediately invoked function Expression) or simply Self -invoked function

(function(){
	console.log("I am self invoking function");
})();





