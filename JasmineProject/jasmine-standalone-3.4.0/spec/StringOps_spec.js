/**
 * 
 */
describe("Validate Various String Operations", function() {
	beforeAll(function() {
		stringValidate = new StringUtil()
	})
	it("Hello World for jasmine", function() {
//		stringValidate["helloWorld"] = function() { return "Hello Jasmine" }
		expect(stringValidate.helloWorld()).toEqual("Hello Jasmine")
	})
	it("Validate Blank string to be true", function() {
		expect(stringValidate.is_Blank("")).toBeTruthy()
	})
	it("Validate Blank string to be false", function() {
		expect(stringValidate.is_Blank("asdf")).toBeFalsy()
	})
	it("Validate Reverse string Operation", function() {
		expect(stringValidate.ReverseString("reverse")).toBeFalsy()
		expect(stringValidate.ReverseString("naman")).toBeTruthy()
	})
})

describe("Verify Array Util Operations", function() {
	beforeAll(function() {
		array = new ArrayUtils()
	})
	it("Verify Array Util Upper Case functionality", function() {
		expect(array.upperCase("synechron address is hinjewadi, phase 3")).toBe(("Synechron Address Is Hinjewadi, Phase 3"))
	})
	it("Verify Array Util All Upper Case functionality", function() {
		expect(array.upperCaseAll("synechron address is hinjewadi, phase 3")).toBe(("Synechron Address Is Hinjewadi, Phase 3").toUpperCase())
	})
})