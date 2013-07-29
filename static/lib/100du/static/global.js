var awards = ['生肖贵宾卡',
'野菜薄饼',
'百事可乐',
'傻姑拌时蔬',
'50元代金券',
'20元代金券',
'酸辣蕨根粉丝',
'刨冰豆花'];

function award(num) {
  var a = num;
  if(num > 360) {
    a = num - parseInt(num/360) * 360;
  }

  console.log(a);
  /*
  switch (a) {
      case 0: 
      case 360:
      alert(awards[0]);
      break;

      case 22.5:  
      alert(awards[7]);
      break;

      case 45:
      alert(awards[6]);
      break;

      case 67.5:
      alert(awards[5]);
      break;

      case 90:
      alert(awards[4]);
      break;

      case 112.5:
      alert(awards[3]);
      break;

      case 135:
      alert(awards[2]);
      break;

      case 157.5:
      alert(awards[1]);
      break;

      case 180:
      alert(awards[0]);
      break;

      case 202.5:
      alert(awards[7]);
      break;

      case 225:
      alert(awards[6]);
      break;

      case 247.5:
      alert(awards[5]);
      break;

      case 270:
      alert(awards[4]);
      break;

      case 292.5:
      alert(awards[3]);
      break;

      case 315:
      alert(awards[2]);
      break;

      case 337.5:
      alert(awards[1]);
      break;

  }*/
}
//main
$(document).ready(function(){
  var num = 0;
  var _go;
  function clock (num) {
    $("#rotate_target").rotate(num+12);
  }

  $('#stop').click(function(){
    clearInterval(_go);
    award(num);
    $("#go").removeAttr('disabled');
  });

  $('#go').click(function(){
    _go = setInterval(function(){clock(num);num += 22.5;}, 40);
    $(this).attr('disabled', 'disabled');
  });
});


