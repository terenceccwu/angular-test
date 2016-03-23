angular.module('Listener', ['myModule'])
.controller('myController', function ($rootScope, myFactory) {
  var self = this;
  $rootScope.$on('myEvent', function (event,arg) {
    self.hihi = arg.msg;
  });

  this.click = function () {
      console.log("click");
      myFactory.emit();
  }
})



angular.module('myModule', [])
.factory('myFactory', function ($rootScope) {

  return {
    emit: function () {
      console.log("haha");
      $rootScope.$emit('myEvent', {msg: "message"}); //or can use $broadcast
    }
  }
});
