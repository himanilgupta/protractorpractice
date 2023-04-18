describe("Test MathUtils", function() {
	// this is a main suite or description of Test suite 

var calc;

	// this will be called before running each spec
	beforeAll(function() {
		  calc = new MathUtils();
	});
	beforeEach(function(){
		jasmine.addMatchers({
			TrasactionResult: function(){
				return {
					compare:function(actual, expected){
						var result ={pass:actual===expected};
						
						if(!result.pass){
							result.message="Custom Matchers for math Opeations \nActaul"+actual+":Expected="+expected
						}
						return result;
						
					}
				}
			}
		})
	})

	describe("calc is used to perform basic math operations", function()
		{
		// Spec for sum operation
		it("should be able to calculate sum of 3 and 5", function(){
		expect(calc.sum(3,5)).TrasactionResult(8);	
		//pending one also we keep by usiing peding keywokd.
		});
		
		// Spec for substraction operation
		it("should be able to calculate substract of 10 and 5", function(){
		expect(calc.substract(10,5)).TrasactionResult(15);	
		});
		
		// Spec for divide operation
		it("should be able to calculate dvivide of 3 and 5", function(){
		expect(calc.divide(8,2)).TrasactionResult(4);	
		});
				
		// Spec for multiply operation
		it("should be able to calculate multi of 3 and 5", function(){
		expect(calc.multiply(3,5)).TrasactionResult(15);	
		});
		
		// Spec for factorial operation for positive number
		it("should be able to calculate factorial of 9", function(){
		expect(calc.factorial(9)).TrasactionResult(362880);	
		});
		
		// Spec for factorial operation for negative number
		it("should be able to throw error when the number is negative", function(){
		// expect(calcFactorial()).toThrowError(Error); - this is expanded form
		// and bottom fun is described
		expect(function(){calc.factorial(-8)}).TrasactionResult(Error);
		
		/*
		 * function calcFactorial() {return calc.factorial(-8); }
		 */
		});
		
});
});