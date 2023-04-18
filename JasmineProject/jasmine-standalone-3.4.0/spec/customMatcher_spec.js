/**
 * 
 */
describe("Convert First Letter of a given Statement into Uppercase", function() {
	beforeEach(function() {
		arrayToUpper = new ArrayUtils()
		jasmine.addMatchers({
			validateCamelCase:function(){
				return{
					compare:function(actual,expected){
						var result={pass:actual===expected}
						if(!result.pass){
							result.message = "Failure in converting to Camel Case\nActual="+actual+":Expected="+expected
						}
						return result
					}
				}
			},
		    checkCamelCase:function() { 
		    	customMatch = new newMatcher()
		    	return customMatch.match() 
	    	}
		
		})
	})
	var data = [
		{testdata:"all iss well",expected:"All Iss Well"},
		{testdata:"javascript is fine",expected:"Javascript Is Fine"},
		{testdata:"kungfu panda",expected:"Kungfu Panda"}
	]
	it("To Camel Case", function() {
		expect("test").validateCamelCase("test")
		
	})
	
	for(let i in data){
		it(`validateCamelCase matcher`, function() {
			let camelCase = arrayToUpper.camelCaseAll(data[i].testdata)
//			console.log(camelCase)
			expect(camelCase).validateCamelCase(data[i].expected)
		})
	}
	for(let i in data){
		it(`my matcher`, function() {
			let camelCase = arrayToUpper.camelCaseAll(data[i].testdata)
			expect(camelCase).checkCamelCase(data[i].expected)
		})
	}
})