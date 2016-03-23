// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('gservice', [])
    .factory('gservice', function($rootScope){
      var gmap = {};

      var map; //google map Object
      gmap.init = function (lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {lat: lat, lng: lng}
        });
        $rootScope.$emit('gservice:centerChanged', {lat: lat, lng: lng});
      }

        // Refresh the page upon window load. Use the initial latitude and longitude
      google.maps.event.addDomListener(window, 'load',
          gmap.init(22.3782353, 114.180778));

      return gmap;
});
