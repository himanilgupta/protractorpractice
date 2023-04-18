/**
 * 
 */
describe("Angular JS Material", function() {
	beforeAll(function() {
		browser.manage().window().maximize()
		browser.get("https://material.angularjs.org/latest/demo/autocomplete")
		browser.manage().timeouts().implicitlyWait(20000)
	})
	it("Select favorite State", function() {
		var textbox = $("[ng-model='$mdAutocompleteCtrl.scope.searchText']")
		textbox.sendKeys("a")
		browser.sleep(2000)
		$$(".md-autocomplete-suggestions li").then(function(states){
			textbox.sendKeys(protractor.Key.DOWN)
			browser.sleep(1000)
			textbox.sendKeys(protractor.Key.DOWN)
			browser.sleep(1000)
			textbox.sendKeys(protractor.Key.ENTER)
			browser.sleep(2000)
			console.log("State Selected")
		})
	})
})