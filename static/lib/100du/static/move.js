function startMove(obj, json, fn) {
	clearInterval(obj.iTimer);
	var iCur = 0;
	var iSpeed = 0;
	obj.iTimer = setInterval(function() {
		
		var iBtn = true;
		
		for (var attr in json) {
			if (attr == 'opacity') {
				iCur = Math.round(css(obj, 'opacity') * 100);
			} else {
				iCur = parseInt(css(obj, attr));
			}
			
			iSpeed = (json[attr] - iCur) / 8;
			
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if (iCur != json[attr]) {
				iBtn = false;
				
				if (attr == 'opacity') {
					obj.style.opacity = (iCur + iSpeed) / 100;
					obj.style.filter = 'alpha(opacity='+(iCur + iSpeed)+')'
				} else {
					obj.style[attr] = iCur + iSpeed + 'px';
				}
				
			}
			
		}
		
		if (iBtn) {
			clearInterval(obj.iTimer);
			fn && fn();
		}
		
	}, 150);
}

function css(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}