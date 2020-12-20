
function multiplyX(x){
	return function(a){
		return multiply(a,x);
	}
}

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

