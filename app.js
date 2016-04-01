function plusTwo(num){
	return num+2;
}
function moduloThree(num){
	return num%3;
}
function timesTwo(num){
	return num*2;
}

console.log("4 modulo 3 times 2 plus 2 = " + plusTwo(timesTwo(moduloThree(4))));
