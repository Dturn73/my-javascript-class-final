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
				console.log(data);
				$.each(data.items, function(i,object){
					  output =  '<li><iframe src=\"//www.youtube.com/embed/'+object.id.videoId'\"></iframe></li>';
					}).appendTo("#youtube_results");
				});
		});
	});
});
