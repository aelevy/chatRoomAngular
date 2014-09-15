angular.module("chatRoomApp")
  .factory("chatSvc", function($rootScope,$log,$http){
   var users = "/api/collections/chatusers";

   var messages = "/api/collections/chatmsgs";

   //MESSAGES//
   var getMsgs = function (){
    return $http.get(messages);
   };

   var addMsg = function (msg){
    return $http.post(messages, msg).then(function (response){
     $rootScope.$broadcast("message:added");
     $log.info("message added");
    })
   };

   //USERS//


   //RETURNS
   return{
    getMsgs:getMsgs,
    addMsg: addMsg,
   };
  });
