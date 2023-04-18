describe("Covert First letter of a given statement into uppercase", function() {
	
	
	beforeEach(function(){
		jasmine.addMatchers({
			toEqualCamelCase: function(){
				return {
					compare:function(actual, expected){
						var result ={pass:actual===expected};
						
						if(!result.pass){
							result.message="Failure in converting to camel case\nActaul"+actual+":Expected="+expected
						}
						return result;
						
					}
				}
			}
		})
	})
	
	it("To CamelCase", function(){
			let camelCase=upperCase("synechron hinjewadi branch");
		console.log(camelCase);
		expect(camelCase).toEqualCamelCase("Synechron Hinjewadi Branch");
		
	});
	
	
	});
