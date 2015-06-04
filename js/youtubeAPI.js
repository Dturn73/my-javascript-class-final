$(document).ready(function(){
	
	$("#searchButton").click(function(){
		var search_tags = document.getElementById("searchTerm").value;
			$.getJSON(" https://www.googleapis.com/youtube/v3/search",
			{
				part: "snippet",
				type: "video",
				maxResults: 12,
				q:encodeURIComponent(search_tags).replace(/%20/g, "+"),
				order: "viewCount",
				key: "AIzaSyAqFLcupX93Q2GdCtlNjvbDDf80K4vg18E",
				restriction: "US",
				nojsoncallback: 1
			},function(data){
				$.each(data.items, function(i, object){
					$("<iframe>").attr("src", "//www.youtube.com/embed/" + object.id.videoId)
					.appendTo("#youtube_results");
				});
		});
	});
});
/*https://farm" + photo.farm + ".staticflickr.com/" 
						+ photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg*/