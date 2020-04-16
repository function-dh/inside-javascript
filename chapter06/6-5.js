var person = {
	name : "zzoon",
	getName : function() {
		return this.name;
	},
	setName : function(arg) {
		this.name = arg;
	}
};

function create_object(o) {
	function F() {};
	F.prototype = o; // F.prototype = person의 값이 들어감;
	// F.prototype.name,
	// F.prototype.getname,
	// F.prototype.setname,
	return new F();
}

var student = create_object(person);
// var student = new F(); person의 속성이 들어간 new F()를 반환 받는다


console.log(student.getName());   // zzoon
student.setName("me");
console.log(student.getName());  // me