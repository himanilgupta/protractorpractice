/**
 * 
 */
var dataProvider = require('C:\\Users\\TEMP.TRNROOM10-04.000\\AppData\\Roaming\\npm\\node_modules\\jasmine-data-provider');
var testdata = require('../Testdata1.json');
var login = require('../PageObjects/ctsLoginPage.js')

describe("cafetoonsend with Page Object", function() {
	beforeAll(function() {
		browser.manage().window().maximize()
		browser.get("http://cafetownsend-angular-rails.herokuapp.com")
		browser.manage().timeouts().implicitlyWait(20000)
	})
	dataProvider(testdata,function(data){
		it("Login", function() {		
			console.log("in Login");	
			browser.debugger();
			console.log(data.username + "/" +data.password);
			login.setUser(data.username)
			login.setPassword(data.password)
			login.submit()
			browser.sleep(3000);
			var usernameElement = element(by.css("#greetings"))
			usernameElement.getText().then(function(txt) {
				console.log("Logged in user: "+txt)
				expect(txt).toBe(data.msg)
			})
		});
	});
	it("Create Employee", function() {
		login.createEmployee("Rakesh","Suresh","1990-10-10","test@test.com")
		console.log("entered username and password")
//		element(by.css("button.main-button")).click()
	})
	
	it("Verify new employee in employees list and Delete it", function(){
		login.selectEmpName()
		login.deleteBtn().click()
		let alert = browser.switchTo().alert()
		alert?alert.accept():console.log("No Such Alert displayed")
	})
	
})