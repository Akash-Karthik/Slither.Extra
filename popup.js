$(document).ready(function() {
    var storage = chrome.storage.local;
    
    storage.get(null, function(output){
        if (output["enabled"] == undefined || output["enabled"] == null || output["enabled"] == "true"){
            storage.set({"enabled": "true"});
            $("#toggle").attr('class', "off");
            $("#toggle").text('Disable extension');
        } else {
            $("#toggle").attr('class', 'on');
            $("#toggle").text('Enable extension');
        }
    });
	
	$("#toggle").click(function() {
        storage.get(null, function(output){
            if (output["enabled"] == "true"){
                storage.set({"enabled": "false"});
                $("#toggle").text('Enable extension');
            } else {
                storage.set({"enabled": "true"});
                $("#toggle").text('Disable extension');
            }
			
            $("#toggle").toggleClass("on");
            $("#toggle").toggleClass("off");
        });
	});

	$("#play").click(function() {
		chrome.tabs.create({url: "http://slither.io"});
	});
    
    $("#visit").click(function() {
		chrome.tabs.create({url: "http://slitherplus.io"});
	});
});