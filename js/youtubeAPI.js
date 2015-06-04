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
					//$("#youtube_results").append(object.id.videoId + " " + object.snippet.title);
					$('<iframe>', {
					   src: "www.youtube.com/" + object.id.videoId,
					   frameborder: 0,
					   scrolling: 'no'
					}).appendTo("#youtube_results");
				});
		});
	});
});
