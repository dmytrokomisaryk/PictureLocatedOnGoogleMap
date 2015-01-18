Gallery = {
	initialize: function () {
		this.initializeSelectedPicture();
     	this.observeSelectingPicture();
     	this.observeScrolling();
  },

  initializeSelectedPicture: function () {
  	setTimeout(function () {
  		var firstImg = $('#picture-container li:first img')
     	 $("#content").css("background-image", "url(" + $(firstImg).attr("src") + ")");
  	}, 1000)
  },

  observeSelectingPicture: function () {
 		$("#picture-box img").click(function () {
      		$("#content").css("background-image", "url(" + $(this).attr("src") + ")");
    	});
  },

  observeScrolling: function () {
  	var imageContainer = $("#picture-container");
  	imageContainer.find('ul').on('mousewheel', function (e, delta) {
        this.scrollLeft -= (delta * 50);
        e.preventDefault();
    });
  }
}