describe("Covert First letter of a given statement into uppercase", function() {
	// this is a main suite or description of Test suite 


	// this will be called before running each spec
	
	var data=[
		{testdata:"all is well", expected:"All Is Well"},
		{testdata:"Java script is fine", expected:"Java Script Is Fine"},
		{testdata:"Suresh ok", expected:"Suresh OK"},		
	];

	for(let i in data){
		// Spec for sum operation
		it(`should convert first letter of ${data[i].testdata} to Uppercase`, function(){
			let camelCase=upperCase(data[i].testdata);
			console.log(camelCase);
			expect(camelCase).toEqual(data[i].expected);
		});
	}
	
	});
