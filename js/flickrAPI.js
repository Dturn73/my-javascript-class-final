$(document).ready(function(){
	alert("Enter a search term in the box\nand click the search button.\nThis will get information\nfrom Flikr, FaceBook, and YouTube\nmatching your search criteria.\nTry Cute Kittens!!!");
	$("#searchButton").click(function(){
		$("#images").empty();
		var search_tags = document.getElementById("searchTerm").value;
		console.log(search_tags);
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
					.addClass("img-rounded")
					.appendTo("#images");
					if(i==69) return false;
				});
		});
	});
});

/*$.getJSON("https://api.flickr.com/services/rest?/", {
			method: "flickr.photos.search",
			api_key:"247bf29fe02247d6925913da59c2bd04",
			tags:"cat",
			format: "json"
		},function(data){
			console.log("hello world");
			console.log(data);
		});*/
