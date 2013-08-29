window.onload = function(){
  var outGallery = document.getElementById('outer-gallery');
  var oTop = outGallery.offsetTop;
  //open
  var timer = setInterval(function(){
    if(oTop<=0){
      oTop =0;
      clearInterval(timer);
    }else{
      oTop -= 20;
    }
    outGallery.style.top = oTop + 'px';
  },20)

  //click
  var galleries = outGallery.getElementsByTagName('a');
  var gallery = document.getElementById('gallery');
  var imgs = gallery.getElementsByTagName('img');
  var texts = gallery.getElementsByTagName('p');

  var mask = document.getElementById('mask');

  var pop = document.getElementById('pop');
  var imgPop = pop.getElementsByTagName('img')[0];
  var pPop = pop.getElementsByTagName('p')[0];

  imgUrl=[];
  for(var i=0;i<imgs.length;i++){
    imgUrl[i]=imgs[i].src;
  }
  for(var i=0;i<galleries.length;i++){
    galleries[i].index = i;
    galleries[i].onclick = function(){
      mask.style.display = "block";
      pop.style.display = "block";
      imgPop.src = imgUrl[this.index];
      pPop.innerHTML = texts[this.index].innerHTML;
    }
  }
  var closePop = document.getElementById('close');

  closePop.onclick = function(){
    mask.style.display = "none";
    pop.style.display = "none";
  }


}
