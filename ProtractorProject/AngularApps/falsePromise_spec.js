/**
 * 
 */
describe("cafetoonsend", function() {
	beforeAll(function() {
		browser.manage().window().maximize()
		browser.get("http://cafetownsend-angular-rails.herokuapp.com")
		browser.manage().timeouts().implicitlyWait(20000)
	})
	it("Login to application", function() {
		var ele = element(by.model("user.name"))
		ele.sendKeys("Luke")
		ele = element(by.model("user.password"))
		ele.sendKeys("Skywalker")
		console.log("entered username and password")
		element(by.css("button.main-button")).click()
	})
	it("Verify username logged in", async function() {
		var usernameElement = await element(by.css("#greetings")).getText()
		console.log("Logged in user: "+usernameElement)
		expect(usernameElement).toBe("Hello Luke")
	})
	xit("Retrive employees list", function(){
		var emplist = element.all(by.css("[ng-repeat='employee in employees']"))
		emplist.count().then((count)=>{
			console.log("#Employees: "+count)
			emplist.each(function(element, index){
				element.getText().then((text)=>{
//					console.log(index,text)
				})
			})
		})
	})
	xit("Create Employee", function() {
		var labelElement 
		element(by.id("bAdd")).click()
		labelElement = element(by.model("selectedEmployee.firstName"))
		labelElement.sendKeys("Ramesh")
		labelElement = element(by.model("selectedEmployee.lastName"))
		labelElement.sendKeys("Suresh")
		labelElement = element(by.model("selectedEmployee.startDate"))
		labelElement.sendKeys("1989-12-25")
		labelElement = element(by.model("selectedEmployee.email"))
		labelElement.sendKeys("test@test.com")
		element(by.css(".formFooter button.main-button[ng-show='isCreateForm']")).click()
		console.log("entered username and password")
//		element(by.css("button.main-button")).click()
	})
	
	xit("Verify new employee in employees list and Delete it", function(){
		var deleteBtn = element(by.id("bDelete"))
		var emplist = element.all(by.css("[ng-repeat='employee in employees']"))
		expect(emplist.getText()).toContain("Ramesh Suresh")
		emplist.each(function(element, index){
			element.getText().then((text)=>{
				if(text === "Ramesh Suresh"){
					emplist.get(index).click()
					deleteBtn.click()
					let alert = browser.switchTo().alert()
					alert.accept()
				}
			})
		})
	})
	xit("Delete Employee", function() {
		
	})
	
})