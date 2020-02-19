// 42p 내용 보충
var foo = {
	num : 1
}
var dummy = 'num'

console.log(dummy)
console.log(foo[dummy])

// for in 
var donghyun = {
	age : 26,
	name : 'dongdong'
}


for(info in donghyun){
	console.log(info + ' = '+ donghyun[info])
}

