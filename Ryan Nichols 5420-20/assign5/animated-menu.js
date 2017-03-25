$(document).ready(function(){
 
    //When mouse rolls over
    $(".dropdown .yes").mouseover(function(){
        $(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'})
    });
 
    //When mouse is removed
    $(".dropdown .yes").mouseout(function(){
        $(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
    });
 
});