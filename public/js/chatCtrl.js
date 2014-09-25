angular.module("chatRoomApp")
 .controller("chatCtrl", function ($rootScope, $scope, $location, $routeParams, $interval, chatSvc) {

  //MESSAGES//
  $interval(function() {
  chatSvc.getMsgs().then(function (msgs){
   $scope.msgs = msgs.data;
  })
 }, 500);

  $scope.addMsg = function (msg){
   chatSvc.addMsg ({
    author: $scope.currentUser,
    content: msg.content,
   }).then(function (){
    $location.path("/");
   })
   $scope.msg = {}
  };


//USERS//
 chatSvc.getUsers().success(function(users){
  $scope.users = users.data;
 });

 $scope.createUser = function(newUser) {
  chatSvc.createUser(newUser);
  $location.path("/");
 };

  //LISTENERS//
  $rootScope.$on("message:added", function () {
    chatSvc.getMsgs().then(function (msgs) {
      $scope.msgs = msgs.data;
    });
 });

  $rootScope.$on("user:added", function(){
   $scope.currentUser = chatSvc.getCurrentUser.name;
   console.log(chatSvc.getCurrentUser)
  });

});
