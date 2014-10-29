$(document).ready(function() {
	$('#origin').click(function(){
		$('#circle_resize').attr('r','40');
		$('#circle_resize').attr('cx','150');
		$('#circle_resize').attr('cy','150');
	});
	$('#bigger').click(function(){
		$('#circle_resize').attr('r','80');
	});
	$('#smaller').click(function(){
		$('#circle_resize').attr('r','20');
	});
	$('#left').click(function(){
		$('#circle_resize').attr('cx','50');
	});
	$('#right').click(function(){
		$('#circle_resize').attr('cx','250');
	});
	$('#up').click(function(){
		$('#circle_resize').attr('cy','50');
	});
	$('#down').click(function(){
		$('#circle_resize').attr('cy','250');
	});
	$('#change_border').click(function(){
		var color = $('#color_border').val();
		$('#change_rect').attr('stroke',color)
	});
	$('#change_fill').click(function(){
		var color = $('#color_fill').val();
		$('#change_rect').attr('fill',color)
	});
	$('#change_text').click(function(){
		var content = $(this).siblings('input[type="text"]').val();
		$('#change_content').text(content);
	});
	$('#change_shape1').click(function(){
		$('#change_shape').attr('d','M0 50 C150 150 100 -50 300 50');
	});
	$('#change_shape2').click(function(){
		$('#change_shape').attr('d','M0 50 C-40 100 100 -50 50 100');
	});
	$('#change_shape3').click(function(){
		$('#change_shape').attr('d','M0 50 100 150');
	});
	$('#change_shape4').click(function(){
		$('#change_shape').attr('d','M30 150 100 50 ');
	});
	$('#change_shape5').click(function(){
		$('#change_shape').attr('d','M100 50 C40 100 100 -50 30 100');
	});
	$('#change_shape6').click(function(){
		$('#change_shape').attr('d','M50 50 C40 20 10 30 100 30');
	});
});