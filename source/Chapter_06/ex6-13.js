function subClass(obj) {
	// 최상위 클래스 Function을 상속받음
	var parent = this === window ? Function : this; // Node.js의 경우 global을 사용.
	var F = function() {};

	// 클래스 내의 정의된 생성자 호출
	// _init 생성자 함수
	var child = function() {
		var _parent = child.parent;
		
		if (_parent && _parent !== Function) {
			_parent.apply(this, arguments);
		}
		
		if (child.prototype._init) {
			child.prototype._init.apply(this, arguments);
		}
	};

	
	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
	child.parent = parent;
	child.subClass = arguments.callee; // 현재 호출 된 함수

	// 자식 클래스 확장
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			child.prototype[i] = obj[i];
		}
	}

	return child;
}

