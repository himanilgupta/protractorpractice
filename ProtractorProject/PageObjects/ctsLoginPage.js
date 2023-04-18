/**
 * 
 */
LoginPage = function() {
	var userName = element(by.model("user.name"))
	var userPassword = element(by.model("user.password"))
	var submitBtn = $("[type='submit']")
	this.deleteBtn = function(){return element(by.id("bDelete"))}
	var emplist = $$("[ng-repeat='employee in employees']")
	var addEmpBtn = element(by.id("bAdd"))
	var firstName = element(by.model("selectedEmployee.firstName"))
	var lastName = element(by.model("selectedEmployee.lastName"))
	var startDate = element(by.model("selectedEmployee.startDate"))
	var email = element(by.model("selectedEmployee.email"))
	var createEmpBtn =	element(by.css(".formFooter button.main-button[ng-show='isCreateForm']"))
	
	this.setUser=(name)=>userName.sendKeys(name)
	this.setPassword=(password)=>userPassword.sendKeys(password)
	this.submit=(name)=>submitBtn.click()
	this.selectEmpName=function(){
//		emplist.first().click()
//		var givenIndex
//		emplist.count().then((count)=> {
//			console.log("count: "+count)
//			givenIndex=count-1
//			})
//		emplist.filter(function(element, index) {
//			if(index==givenIndex){
//				element.getText().then(function(text){
//					console.log(`Selected Employee Name = ${text}-${index}`)
//				})
//			}
//		}).click()
		emplist.last().click()
	}
	
	this.createEmployee= function(fname,lname,date,mail) {
		addEmpBtn.click()
		firstName.sendKeys(fname)
		lastName.sendKeys(lname)
		startDate.sendKeys(date)
		email.sendKeys(mail)
		createEmpBtn.click()
	}
}
module.exports = new LoginPage()