/**
 * 
 */

newMatcher = function(){};

newMatcher.prototype.match = function() {
	return{
		compare:function(actual,expected){
			var result={pass:actual===expected}
			if(!result.pass){
				result.message = "Failure in converting to Camel Case\nActual="+actual+":Expected="+expected
			}
			return result
		}
	}
}