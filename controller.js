var gmap = angular.module('gmap', ['gservice'])
.controller('MapController', ['gservice', '$scope',function (gservice, $scope) {
  var self = this;
  this.lat = 22.3782353;
  this.lng = 114.1807784;

  this.refresh = function () {
    gservice.refresh(this.lat, this.lng);
  }

  gservice.map.addListener('click', function (event) {
    self.lat = event.latLng.lat();
    self.lng = event.latLng.lng();
    gservice.map.setCenter({lat: self.lat, lng: self.lng});
    $scope.$apply();
    console.log("applied");
  });

  // gservice.click(self);


  this.click = function () {
    console.log(typeof self.lat);
  }
  [
    {name: 'place1', time: '10:00'},
    {name: 'place2', time: '11:00'},
    {name: 'place3', time: '12:00'},
  ]

}]);
