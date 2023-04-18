/**
 * 
 */
describe("Convert First Letter of a given Statement into Uppercase", function() {
	var data = [
		{testdata:"all iss well",expected:"All Iss Well"},
		{testdata:"javascript is fine",expected:"Javascript Is Fine"},
		{testdata:"kungfu panda",expected:"Kungfu Panda"}
	]
	beforeAll(function() {
		arrayToUpper = new ArrayUtils()
	})
	for(let i in data){
		it(`Verify Array Util All Upper Case of ${data[i].testdata}`, function() {
			let camelCase = arrayToUpper.camelCaseAll(data[i].testdata)
			console.log(camelCase)
			expect(camelCase).toEqual(data[i].expected)
		})
	}
})