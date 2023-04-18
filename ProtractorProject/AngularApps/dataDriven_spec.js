var dataProvider = require('C:\\Users\\TEMP.TRNROOM10-04.000\\AppData\\Roaming\\npm\\node_modules\\jasmine-data-provider');
var testdata = require('../Testdata.json');
describe("cafetownsend-datadriven", function() {
	beforeEach(function(){
		browser.manage().window().maximize();
		browser.get("http://cafetownsend-angular-rails.herokuapp.com/login");
		browser.manage().timeouts().implicitlyWait(20000);
	});

	dataProvider(testdata,function(data){
		it("Login", function() {		
			console.log("in Login");	
			browser.debugger();
			console.log(data.username + "/" +data.password);
			element(by.model("user.name")).sendKeys(data.username);
			element(by.model("user.password")).sendKeys(data.password);
			element(by.xpath("//button[@type='submit']")).click();
			browser.sleep(3000);
			var x = element(by.css(data.element));
			x.getText().then(function(text){
				expect(text).toEqual(data.msg);
				console.log(data.username+"-"+text+"-"+data.msg);
			});		
		});
	});
})