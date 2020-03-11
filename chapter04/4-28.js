var test = new MyName(10);
var test1 = new MyName(100);

function MyName(num){
	this.num = num
	console.log(this)
}
MyName.prototype.numnum = 2
console.log(test.num)
console.log(test1.num)