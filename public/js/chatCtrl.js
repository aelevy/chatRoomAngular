angular.module("chatRoomApp")
 .controller("chatCtrl", function ($rootScope, $scope, $location, $routeParams, chatSvc) {

  //MESSAGES//
  chatSvc.getMsgs().then(function (msgs){
   $scope.msgs = msgs.data;
  });

  $scope.addMsg = function (msg){
   chatSvc.addMsg ({
    author: msg.author,
    content: msg.content,
   }).then(function (){
    $location.path("/");
   })
  };





  //LISTENERS//
  $rootScope.$on("message:added", function () {
    chatSvc.getMsgs().then(function (msgs) {
      $scope.msgs = msgs.data;
    });
 });

});
