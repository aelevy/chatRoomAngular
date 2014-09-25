angular.module("chatRoomApp")
  .factory("chatSvc", function($rootScope,$log,$http,$cookieStore) {

   var users = "/api/collections/chatusers";

   var messages = "/api/collections/chatmsgs";

   var getCurrentUser = $cookieStore.get("currentuser");

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

   var getUsers = function() {
    return $http.get(users);
   };

   var createUser = function(newUser) {
    $cookieStore.put("currentuser", newUser);

    $http.post(users, newUser).then(function(response){

     $rootScope.$broadcast("user:added");
     return newUser;
    });
   };


   //RETURNS
   return{
    getMsgs:getMsgs,
    addMsg: addMsg,
    getUsers: getUsers,
    createUser: createUser,
    getCurrentUser: getCurrentUser
   };
  });
