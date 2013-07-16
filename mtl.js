$(document).ready(function() {
	
	$.getJSON("data.json", function(data) {	
		
		// Québec ------------------------------------------------------------------------------------------------------------------------
		
		// data.cuisines.quebec.length
		// data.cuisines.quebec[i].notes
		
		$("#eat > .cuisines").append("<div class=\"row first\">");
		for (var i = 0; i < 3; i++) {
			$("#eat > .cuisines > .first").append("<div class=\"span4 block" + i + "\">");
			$("#eat > .cuisines > .first > .block" + i).append("<h5>" + data.cuisines.quebec[i].name);
			$("#eat > .cuisines > .first > .block" + i).append("<p>" + data.cuisines.quebec[i].hood);
			$("#eat > .cuisines > .first > .block" + i).append("<p>" + data.cuisines.quebec[i].moment);
			for (var j = 0; j < data.cuisines.quebec[i].notes.length; j++) {
				$("#eat > .cuisines > .first > .block" + i).append("<p>" + data.cuisines.quebec[i].notes[j]);
			}
			$("#eat > .cuisines > .first > .block" + i).append("<ul>");
			$("#eat > .cuisines > .first > .block" + i + " > ul").append("<li><a href=\"" + data.cuisines.quebec[i].url.link + "\">" + data.cuisines.quebec[i].url.text);
			$("#eat > .cuisines > .first > .block" + i + " > ul").append("<li><a href=\"" + data.cuisines.quebec[i].address.link + "\">" + data.cuisines.quebec[i].address.text);
			$("#eat > .cuisines > .first > .block" + i + " > ul").append("<li>" + data.cuisines.quebec[i].phone);
		};
		
		$("#eat > .cuisines").append("<div class=\"row second\">");
		for (var i = 3; i < 6; i++) {
			$("#eat > .cuisines > .second").append("<div class=\"span4 block" + i + "\">");
			$("#eat > .cuisines > .second > .block" + i).append("<h5>" + data.cuisines.quebec[i].name);
			$("#eat > .cuisines > .second > .block" + i).append("<p>" + data.cuisines.quebec[i].hood);
			$("#eat > .cuisines > .second > .block" + i).append("<p>" + data.cuisines.quebec[i].moment);
			for (var j = 0; j < data.cuisines.quebec[i].notes.length; j++) {
				$("#eat > .cuisines > .second > .block" + i).append("<p>" + data.cuisines.quebec[i].notes[j]);
			}
			$("#eat > .cuisines > .second > .block" + i).append("<ul>");
			$("#eat > .cuisines > .second > .block" + i + " > ul").append("<li><a href=\"" + data.cuisines.quebec[i].url.link + "\">" + data.cuisines.quebec[i].url.text);
			$("#eat > .cuisines > .second > .block" + i + " > ul").append("<li><a href=\"" + data.cuisines.quebec[i].address.link + "\">" + data.cuisines.quebec[i].address.text);
			$("#eat > .cuisines > .second > .block" + i + " > ul").append("<li>" + data.cuisines.quebec[i].phone);
		};
		
		/*
		$("#eat > .cuisines").append("<div class=\"row second\">");
		for (var i = 3; i < 6; i++) {
			$("#eat > .cuisines > .second").append("<div class=\"span4 block" + i + "\">");
			$("#eat > .cuisines > .second > .block" + i).append("<h5>" + data.cuisines.quebec[i].name);
			$("#eat > .cuisines > .second > .block" + i).append("<p>" + data.cuisines.quebec[i].hood);
			$("#eat > .cuisines > .second > .block" + i).append("<p>" + data.cuisines.quebec[i].moment);
			$("#eat > .cuisines > .second > .block" + i).append("<p><a href=\"" + data.cuisines.quebec[i].url.link + "\">" + data.cuisines.quebec[i].url.text);
			$("#eat > .cuisines > .second > .block" + i).append("<p><a href=\"" + data.cuisines.quebec[i].address.link + "\">" + data.cuisines.quebec[i].address.text);
			$("#eat > .cuisines > .second > .block" + i).append("<p>" + data.cuisines.quebec[i].phone);
			$("#eat > .cuisines > .second > .block" + i).append("<p>" + data.cuisines.quebec[i].notes);
		};
		*/
	});
});