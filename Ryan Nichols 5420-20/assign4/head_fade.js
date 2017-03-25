$(document).ready(function(){
		$("h1").mouseenter(function(){
			$("h1").animate({
			  opacity: '0.5'
			});
		});
	$("h1").mouseleave(function(){
		$("h1").animate({
		  opacity: '1'	
		});
	});
});