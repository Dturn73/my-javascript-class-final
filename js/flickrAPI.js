$(document).ready(function(){
	//alert("Enter a search term in the box\nand click the search button.\nThis will get information\nfrom Flickr, FaceBook, and YouTube\nmatching your search criteria.\nTry Cute Kittens!!!");
	$("#searchButton").click(function(){
		$("#images").empty();
		var search_tags = document.getElementById("searchTerm").value;
		$.getJSON("https://api.flickr.com/services/rest",
			{
				method: "flickr.photos.search",
				api_key:"247bf29fe02247d6925913da59c2bd04",
				tags: search_tags,
				text: search_tags,
				content_type: 7,
				format: "json",
				nojsoncallback: 1
			},function(data){
				$.each(data.photos.photo, function(i,photo){
					$("<img/>").attr("src", "https://farm" + photo.farm + ".staticflickr.com/" 
						+ photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg")
					.addClass("img-rounded clickable")
					.appendTo("#images");
					if(i==69) return false;
					$(".clickable").on({
						//sets css properties for the current img being moused over
						mouseover: function(){
							$(this).css({
								'cursor': 'pointer',
								'border-color': 'white'
							});
						},
						//function undoes the css above on mouse out
						mouseout: function(){
							$(this).css({
								'cursor': 'default',
								'border-color': 'orange'
							});
						},
						click: function(){
							this.src = "https://farm" + photo.farm + ".staticflickr.com/" 
						+ photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg"
							window.open(this.src,"_top")
						}

					});
				});
		});
	});
});
