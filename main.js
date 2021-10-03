
$(document).ready(function(){


var $aboutmelist = $('ul.aboutmelist');


/*

$('ul.toplist').hover(function(){
    $aboutmelist.css({'position':'absolute'});
	$aboutmelist.slideDown();
},function(){
	$aboutmelist.css({'position':'absolute'});
	$aboutmelist.slideUp();
});
	
*/


$('ul.toplist').on('mouseenter','.aboutmelisttag',function(){
	$aboutmelist.css({'position':'absolute'});
	$aboutmelist.slideDown();

}).on('mouseleave','.aboutmelisttag',function(){
	$aboutmelist.css({'position':'absolute'});
	$aboutmelist.slideUp();

});



$('.selfie').hover(function(e){
	$(e.target).addClass('opacityuse');

},function(e){
	$(e.target).removeClass('opacityuse');

});

$('.selfiecontainer').on('click','.selfie',function(e){
	if(e.target.getAttribute('src')=='photos/selfie1.jpg'){
	$(e.target).attr('src','photos/selfie2.jpg');
    }
    else if(e.target.getAttribute('src')=='photos/selfie2.jpg'){
	$(e.target).attr('src','photos/selfie3.jpg');
    }
    else{
	$(e.target).attr('src','photos/selfie1.jpg');
    }
});



var t1=new TimelineMax();
var $page=$('.selfiecontainer');

//t1.fromTo($page,5,{height:'0%'},{height:'100%', ease:Power2.easeInOut});







});









