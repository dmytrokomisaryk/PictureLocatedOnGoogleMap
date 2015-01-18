Map = {
	initialize: function (location) {
		var lat = location[0],
   		lng = location[1];
	    this.location = new google.maps.LatLng(lat, lng);
	    return this;
	},

	show: function () {
		var divForMap = document.getElementById("map_canvas")
		this.map = new google.maps.Map(divForMap, this.options());
		this.showMarker();
	},

	options: function () {
		return {
	        zoom: 15,
	        center: this.location
	    }
	},

	showMarker: function () {
		new google.maps.Marker({
			position: this.location,
			map: this.map
		});
	}
}
