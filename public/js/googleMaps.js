function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.8788154, lng:-117.235912};

	// create map object and specify DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 16
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}