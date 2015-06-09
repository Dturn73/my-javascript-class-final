$(document).ready(function(){
	$(".clickable").on({
					//sets css properties for the current img being moused over
		mouseover: function(){
			$(this).css({
				'cursor': 'pointer',
				'border-color': '#bada55'
			});
		},
		//function undoes the css above on mouse out
		mouseout: function(){
			$(this).css({
				'cursor': 'default',
				'border-color': 'orange'
			});
		}
	});
});
//0d0e7c385192462bb67dad742af4d7d8