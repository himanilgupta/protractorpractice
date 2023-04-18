/**
 * 
 */
describe("Parent Describe-1: Test MathUtils", function() {
	// this is a main suite

	var calc;
	console.log("Executed Parent Describe-1")
	// this will be called before running each spec
	beforeAll(function() {
		calc = new MathUtils();
	});
	

	fdescribe("Describe-1: calc is used to perform basic math operations", function()
		{
		console.log("Executed Describe-1")
		beforeEach(function() {
			calc["pi"] = Math.PI
			calc["power"] = function(num) {
				return (typeof num!== 'number'||typeof num == 'NaN'||isNaN(parseInt(num, 10)))|| parseInt(Number(num)!== num) ? true : false
			}
		})
		// Spec for sum operation
		fit("should be able to calculate sum of 3 and 5", function(){
		expect(calc.sum(3,5)).toEqual(8);
		expect(calc.pi).toContain("3.141592653589793")
		});
		
		// Spec for substraction operation
		xit("should be able to calculate substract of 10 and 5", function(){
		expect(calc.substract(10,5)).toEqual(5);
		expect(calc.power(5))
		});
	});
	xdescribe("Describe-2: Calculate Divide and Multiply", function() {
		console.log("Executed Describe-2")
		beforeEach(function() {
			calc["isInteger"] = function(num){
				return (typeof num!== 'number'||typeof num == 'NaN'||isNaN(parseInt(num, 10)))|| parseInt(Number(num)!== num) ? true : false
			}
		})
		// Spec for divide operation
		fit("should be able to calculate dvivide of 3 and 5", function(){
		expect(calc.divide(8,2)).toEqual(4);
		expect(calc.isInteger(0.9)).toBeTruthy()
		});
				
		// Spec for multiply operation
		it("should be able to calculate multi of 3 and 5", function(){
		expect(calc.multiply(3,5)).toEqual(15);	
		});
	})
	
	fdescribe("Describe-3: Calculate factorial", function() {
		console.log("Executed Describe-3")
		beforeEach(function() {
		})
		// Spec for factorial operation for positive number
		xit("should be able to calculate factorial of 9", function(){
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
	})
});

describe("Parent Describe-2: calc is used to perform basic math operations", function()
{
	beforeAll(function() {
		calc = new MathUtils();
	});
	console.log("Executed Parent Describe-2")
	beforeEach(function() {
		calc["pi"] = Math.PI
		calc["power"] = function(num) {
			return (typeof num!== 'number'||typeof num == 'NaN'||isNaN(parseInt(num, 10)))|| parseInt(Number(num)!== num) ? true : false
		}
	})
	// Spec for sum operation
	fit("should be able to calculate sum of 3 and 5", function(){
	expect(calc.sum(3,5)).toEqual(8);
	expect(calc.pi).toBe("3.141592653589793")
	});
	
	// Spec for substraction operation
	xit("should be able to calculate substract of 10 and 5", function(){
	expect(calc.substract(10,5)).toEqual(5);
	expect(calc.power(5))
	});
});