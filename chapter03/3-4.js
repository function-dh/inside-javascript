var _student1 = new school()

function school(){
	console.log('test')
}
school.prototype.sum = function(num){
	console.log(num+1);
}

_student1.sum(2)