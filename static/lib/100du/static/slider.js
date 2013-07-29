window.onload = function(){
	//slide
	var subLst = document.getElementById('subway-lst');
	var listA = subLst.getElementsByTagName('a');
	var subDes = document.getElementById('subway-des');
	var desA = subDes.getElementsByTagName('a');
	var desSpan = subDes.getElementsByTagName('span');

	var arrSubway = ['#dd0f0f','#003399','#ff9900','#2564b4','#903077']
	var timer = null;
	var num = 0;

	for(var i=0;i<desA.length;i++){
		desA[i].index = i;
		desA[i].style.borderColor = desSpan[i].style.color = arrSubway[i];
		desSpan[0].style.color = '#fff';
		desA[i].onmouseover = function(){
			clearInterval(timer);			
			showNow(this.index);			
		}
		desA[i].onmouseout = function(){
			autoPlay();			
		}
	}
	autoPlay();
	function autoPlay(){
		timer = setInterval(function(){

			num++;
			if(num == 5){
				num = 0;
			}
			showNow(num);
		},2000)
	}
	
	function showNow(now){
		for(var i=0;i<desA.length;i++){
			desA[i].style.background = "#ededed";
			desA[i].style.color = "#3e3e3e";
			desA[i].style.borderColor = desSpan[i].style.color = arrSubway[i];
		}
		subLst.style.left = -now*324 + 'px';
		desA[now].style.background = arrSubway[now];
		desA[now].style.color = '#fff';
		desSpan[now].style.color = '#fff';
	}

	//showPic
	var hotLst = document.getElementById('hot-lst');
	var hotImg = hotLst.getElementsByTagName('img');
	var arr = [];
	var zIndex = 1;
	for(var i=0;i<hotImg.length;i++){
		arr.push({
			left:hotImg[i].offsetLeft,
			top:hotImg[i].offsetTop
		});
	}
	for(var i=0;i<hotImg.length;i++){
		hotImg[i].index = i;
		hotImg[i].style.position = 'absolute';
		hotImg[i].style.left = arr[i].left + 'px';
		hotImg[i].style.top = arr[i].top + 'px';
		hotImg[i].style.margin = '0';

		hotImg[i].onmouseover = function(){
			zIndex++;
			this.style.zIndex = zIndex;
			startMove(this,{
				width:  150,
				height: 150,
				left:   arr[this.index].left - 36,
				top:    arr[this.index].top - 36
			});
		}
		hotImg[i].onmouseout = function(){
			startMove(this,{
				width:  75,
				height: 75,
				left:   arr[this.index].left,
				top:    arr[this.index].top
			});
		}
	}

}