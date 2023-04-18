/**
 * 
 */
var company1={
		country:"India"
}
var company2={
	name:"Synechron",
	address:"Hinjewadi",
	city:"Pune",
	output:function(){
		console.log(this.name+","+this.address+","+this.city)
	}
}

console.log(company2.name)
console.log(company2.address)
console.log(company2.city)
console.log(company1.country)
company2.output()
for(let c in company2){
	console.log("c."+company2[c])
}

// Object Constructor: function as class
function Company(name,address,city){
	this.name = name
	this.address = address
	this.city = city
	this.output=function(){
		console.log(this.name+","+this.address+","+this.city)
	}
}
obj_company = new Company("Synechron", "Hinjewadi", "Pune")
obj_another_company = new Company("TCS", "Hinjewadi", "Pune")

// Accessing Object Properties

console.log("====Obj_Company====")
console.log(obj_company.name)
console.log(obj_company.address)
console.log(obj_company.city)
obj_company.output()
console.log(obj_another_company.name+","+obj_another_company.address+","+obj_another_company.city)

//add property runtime
obj_company['state'] = "Maharashtra"
console.log("print state: "+obj_company.state)
console.log("print state: "+obj_another_company.state)

//Adding property at runtime accessible to all the objects present for Company

Company.prototype.NoOfEmployee=10000
console.log("print employee: "+obj_company.NoOfEmployee)
console.log("print Employee: "+obj_another_company.NoOfEmployee)

//Two different values for two objects
obj_company.relocateTo="Noida"
obj_another_company.relocateTo="Tamil Nadu"	
console.log(obj_company.relocateTo)
console.log(obj_another_company.relocateTo)

// Delete Object's Property'
delete obj_company.state
console.log("print state: "+obj_company.state)

// Singleton
console.log("====Singleton_Company====")
var single_Company = new function(){
	this.name = ""
	this.address = ""
	this.city = ""
	this.output=function(){
		console.log(this.name+","+this.address+","+this.city)
	}
}

single_Company.name="Mastercard"
single_Company.address="Yerwada"
single_Company.city="Pune"
single_Company.output()
single_Company["country"]="India"
console.log("single_Company.prototype.country: "+single_Company.country)	