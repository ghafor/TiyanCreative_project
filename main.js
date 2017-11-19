
$(document).ready (function() {
    
    new WOW().init();
  
    
});

//setting for the slideshow
var mylist = document.getElementsByClassName("mylist1");
var myhex = document.getElementsByClassName("hexagon-in2");
var names = ["img/portfolio1.png","img/portfolio2.png","img/portfolio3.png","img/portfolio4.png","img/portfolio5.png","img/portfolio6.png","img/portfolio7.png","img/portfolio8.png","img/portfolio9.png","img/portfolio10.png","img/portfolio11.png","img/portfolio12.png","img/portfolio13.png"];
shuffle(names);
var mytimer = setInterval(changeImage,2400);
var myshuffle = setInterval(shuffle,2400);
function shuffle(){
	o = names;
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
}

index = 0;
function changeImage (){

		if(index >3) { mylist[index-1].style.backgroundColor="white";index = 0;}
		mylist[index++].style.backgroundColor="black";
		mylist[index-2].style.backgroundColor="white";
	for(var i=0;i<myhex.length;i++){
		myhex[i].style.backgroundImage = "url('"+names[i]+"')";

		
	}
}


//end of slide show


//validating the message part
function checkmethod(txt){
	var mytext = document.getElementById(txt).value;
	
	var n = mytext.search(/</i);
	var n1 = mytext.search(/>/i);
	if(n != -1 || n1 != -1){
		document.getElementById(txt).value = "";
		alert("you can not insert a tag inside!!!");
	}

}

//end of validating the message part
