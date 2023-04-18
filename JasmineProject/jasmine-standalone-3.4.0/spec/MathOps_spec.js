describe("Test MathUtils", function() {
	// this is a main suite

	var calc;

	// this will be called before running each spec
	beforeAll(function() {
		calc = new MathUtils();
	});
	beforeEach(function() {
		jasmine.addMatchers({
			mathMatcher:function(){
				return{
					compare:function(actual,expected){
						var result={pass:actual===expected}
						if(!result.pass){
							result.message = "Failure in calculation of\nActual="+actual+":Expected="+expected
						}
						return result
					}
				}
			}
		})
	})

	describe("calc is used to perform basic math operations", function()
		{
		// Spec for sum operation
		it("should be able to calculate sum of 3 and 5", function(){
		expect(calc.sum(3,5)).toEqual(8);
		expect(calc.sum(3,5)).mathMatcher(8);
		});
		
		// Spec for substraction operation
		it("should be able to calculate substract of 10 and 5", function(){
		expect(calc.substract(10,5)).toEqual(5);
		expect(calc.substract(10,5)).mathMatcher(5);
		});
		
		// Spec for divide operation
		it("should be able to calculate dvivide of 3 and 5", function(){
		expect(calc.divide(8,2)).toEqual(4);
		expect(calc.divide(8,2)).mathMatcher(4);
		});
				
		// Spec for multiply operation
		it("should be able to calculate multi of 3 and 5", function(){
		expect(calc.multiply(3,5)).toEqual(15);	
		});
		
		// Spec for factorial operation for positive number
		it("should be able to calculate factorial of 9", function(){
		expect(calc.factorial(9)).toEqual(362880);	
		});
		
		// Spec for factorial operation for negative number
		it("should be able to throw error when the number is negative", function(){
		// expect(calcFactorial()).toThrowError(Error); - this is expanded form
		// and bottom fun is described
		expect(function(){calc.factorial(-8)}).toThrowError(Error);
		
		/*
		 * function calcFactorial() {return calc.factorial(-8); }
		 */
		});
		
});
});