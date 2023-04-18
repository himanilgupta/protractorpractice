/**
 * 
 */
//arrayBasics()
function arrayBasics() {
	var company1 = ['synechron','yash','kpit','hexaware']
	var company2 = new Array('synechron','hinjewadi','phase3','pune')
	
	console.log(company1[0])
	console.log(company1)
	console.log(company2)
	
	company1.sort()
	console.log(company1)
	company1.reverse()
	console.log(company1)
	console.log(company1.length)
	delete company1
	console.log(company1)
	console.log(company1.length)
	company1[3] = "chennai"
	company1.push("konkan")
	console.log(company1)
	console.log("lengt1h" in company1)
	for(i=0;i<=company2.length;i++){
		console.log(company2[i])
	}
}

function upperCase(str){
	var array1 = str.split(' ')
	var newArray1 = [] 
	
	for(var x=0;x<array1.length;x++){
		console.log(array1[x])
		newArray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1))
	}
	return newArray1.join(' ')
}

console.log("===="+upperCase("Synechron Address is Hinjewadi, Phase 3"))

const mergeArrays = function(arr1, arr2) {
	return arr1.concat(arr2)
}
arr1=[1,2,3,4,5,56,6]
arr2="Expression"
//	console.log(mergeArrays(arr1,arr2))
	
const array_collection = {
	items:[],
	add(...items){
		this.items.push(...items)
	},
	get(index){
		return this.items[index]
	}
}
array_collection.add('Synechron','WellsFargo','HSBC')
//console.log(array_collection)
//console.log(array_collection.get(2))


const array_methods = ()=>{
	var arr = [1,2,3,4,5,6,2]
	console.log(arr)
	arr.push(7)
	console.log(arr)
	arr.pop()
	console.log(arr)
	arr.shift()
	console.log(arr)
	arr.unshift(1)
	console.log(arr)
	console.log(arr.indexOf(5))
}
//array_methods()

var mergedArray=(arr1,arr2) => arr1.concat(arr2)
//console.log("Merged Array: "+mergedArray(arr1,arr2))

var arrA='arrA',arrB='arrB',arrC='arrC'
//passing array values
var mergeFunction = new Function(arrA,arrB,arrC,'return [...arrA,...arrB,...arrC]')
//passing array object
var mergeFunction1 = new Function(arrA,arrB,arrC,'return [arrA,arrB,arrC]')
//console.log(mergeFunction([1,2],[3,4],[5,6]))
//console.log(mergeFunction1([1,2],[3,4],[5,6]))

const array_iteration = () => {
	var num = [21,37,4,8,33,44]
	num.forEach(function(value) {
		console.log(value)
	})
	var filteredNum = num.filter(arrayFilter)
	function arrayFilter(value){
		return value<=30
	}
	console.log(filteredNum)
//	console.log(num.sort())
	
	num.sort(function(a,b) {
		return a-b
	})
	console.log(num)
	console.log(Math.max.apply(null,num))
	console.log(Math.min.apply(null,num))
}
//array_iteration()
//Self Invoking Function or IIFE (Immediately Invoked Function Expression)
(function(){
	console.log("Woha I am a Self Invoking....")
})()

