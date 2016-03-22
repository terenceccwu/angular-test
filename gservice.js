// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('gservice', [])
    .factory('gservice', function(){

        // Initialize Variables
        // -------------------------------------------------------------
        // Service our factory will return
        var googleMapService = {};

        // Array of locations obtained from API calls
        var locations = [];

        // Selected Location (initialize to center of America)
        var selectedLat  = 22.3782353;
        var selectedLong = 114.1807784;

        var map;

        googleMapService.lat = 0;
        googleMapService.lng = 0;

        // Functions
        // --------------------------------------------------------------
        // Refresh the Map with new data. Function will take new latitude and longitude coordinates.
        googleMapService.init = function(latitude, longitude){

            // Clears the holding array of locations
            locations = [];

            // Set the selected lat and long equal to the ones provided on the refresh() call
            selectedLat = latitude;
            selectedLong = longitude;

            initialize(latitude, longitude);

        };

        googleMapService.refresh = function (lat, lng) {
          map.setCenter({lat: lat, lng: lng});
        };

        // Initializes the map
        var initialize = function(latitude, longitude) {

          // Uses the selected lat, long as starting point
          var myLatLng = {lat: latitude, lng: longitude};

          // If map has not been created already...
          if (!map){

              // Create a new map and place in the index.html page
              map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 10,
                  center: myLatLng
              });
              console.log('created map');
          };

        };

        googleMapService.query = function () {

        }


        // Refresh the page upon window load. Use the initial latitude and longitude
        google.maps.event.addDomListener(window, 'load',
            googleMapService.init(selectedLat, selectedLong));


        googleMapService.map = map;

        return googleMapService;
});
