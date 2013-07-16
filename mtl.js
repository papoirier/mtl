$(document).ready(function() {
	
	$.getJSON("data.json", function(data) {
		
		var span = "span4";
		var first = "first";
		var second = "second";
		
		// FOOD section
		
		var moment = "One goes there for: ";
		var hood = "Located in: ";
		var ulNotes = "<ul class =\"notes\">";
		var ulContact = "<ul class =\"contact\">";
		
		
		
		// Québec ------------------------------------------------------------------------------------------------------------------------
		
		/*
		 * name
		 * hood
		 * moment
		 * contact > url[]
		 * contact > address[]
		 * contact > phone
		 * notes[]
		 */
		
		
		$("#eat > .cuisines").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			$("#eat > .cuisines > .first").append("<div class=\"span4 block" + i + "\">");
			$("#eat > .cuisines > .first > .block" + i).append("<h5>" + data.cuisines.quebec[i].name);
			$("#eat > .cuisines > .first > .block" + i).append("<p>" + data.cuisines.quebec[i].hood);
			$("#eat > .cuisines > .first > .block" + i).append("<p>" + data.cuisines.quebec[i].moment);
			$("#eat > .cuisines > .first > .block" + i).append("<p><a href=\"" + data.cuisines.quebec[i].url.link + "\">" + data.cuisines.quebec[i].url.text);
			$("#eat > .cuisines > .first > .block" + i).append("<p><a href=\"" + data.cuisines.quebec[i].address.link + "\">" + data.cuisines.quebec[i].address.text);
			$("#eat > .cuisines > .first > .block" + i).append("<p>" + data.cuisines.quebec[i].phone);
			$("#eat > .cuisines > .first > .block" + i).append("<p>" + data.cuisines.quebec[i].notes);
		};
		
		$("#eat > .cuisines").append("<div class=\"row second\">");
		for (var i = 3; i < 6; i++) {
			//$("#eat > .cuisines > .row").empty()
			
			$("#eat > .cuisines > .second").append("<h5>" + data.cuisines.quebec[i].name);
			$("#eat > .cuisines > .second").append("<p>" + data.cuisines.quebec[i].hood);
			$("#eat > .cuisines > .second").append("<p>" + data.cuisines.quebec[i].moment);
			$("#eat > .cuisines > .second").append("<p><a href=\"" + data.cuisines.quebec[i].adrLink + "\">" + data.cuisines.quebec[i].adrText);
			$("#eat > .cuisines > .second").append("<p>" + data.cuisines.quebec[i].phone);
			$("#eat > .cuisines > .second").append("<p>" + data.cuisines.quebec[i].notes);
		};

	});
});