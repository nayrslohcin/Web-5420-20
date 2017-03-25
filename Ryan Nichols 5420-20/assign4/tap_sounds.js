	$(document).ready(function(e) {
		$('img[usemap]').rwdImageMaps();
		
//		$('area').on('click', function() {
//			alert($(this).attr('alt') + ' clicked');
//		});
		
		$('area').on('mouseenter', function() {
//			alert($(this).attr('alt') + ' entered');
			$("#tapsounds_now").get(0).play();
		})
		$('area').on('mouseleave', function() {
//			alert($(this).attr('alt') + ' entered');
			$("#tapsounds_now").get(0).pause();
		})
	});



//$(document).ready(function(){
//	$("#tapsounds").mouseenter(function(){
//	  $("#tapsounds_now").get(0).play();
//  });
//	$("#tapsounds").mouseleave(function(){
//		$("#tapsounds_now").get(0).pause();
//	});
//});