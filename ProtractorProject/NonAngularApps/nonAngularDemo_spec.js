/**
 * 
 */

describe("NonAngular Website", function() {
	beforeAll(function() {
		browser.driver.ignoreSynchronization = false
		browser.driver.manage().window().maximize()
		browser.driver.get("https://seleniumhq.github.io/selenium/docs/api/java/index.html")
	})
	it("Navigate to Selenium doc site", function() {
		debugger
		browser.driver.getTitle().then(function(title) {
			console.log("Log:"+title)
			expect(title).toBe("Overview")
		})
	})
	it("Get all frames from page", function() {
		debugger
		browser.driver.findElements(by.css("frame[name]")).then(function(frameElements) {
			console.log("Frame count: "+frameElements.length)
			expect(frameElements.length).toBe(3)
		})
	})
	it("Navigate to each frame and list elements in it", function() {
		debugger
		browser.driver.findElements(by.tagName("frame")).then(function(frames) {
			frames.forEach(function(eachFrame){
				eachFrame.getAttribute("name").then(function(nameAttribute){
					console.log("frame name: "+nameAttribute)
					browser.driver.switchTo().frame(nameAttribute)
					browser.driver.findElements(by.tagName("a")).then(function(links) {
						links.forEach(function(eachlink) {
							eachlink.getText().then(function(linkName) {
								console.log(linkName)
							})
						})
					})
					browser.driver.switchTo().defaultContent()
				})
			})
		})
	})
})