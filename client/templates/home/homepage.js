<<<<<<< HEAD
=======
angular.module('ionicApp', ['ionic'])

.controller('SlideController', function($scope, $ionicSlideBoxDelegate) {
  
  $scope.myActiveSlide = 1;
  
  $scope.slidePrevious = function() {
    
    $ionicSlideBoxDelegate.previous();
  }
  
  $scope.slideNext = function() {
    
    $ionicSlideBoxDelegate.next();
  }
})



>>>>>>> Ranger
Tracker.autorun(function(){
	Meteor.subscribe('commands');
});

Template.home.onCreated(function(){
   var instance =this;
   instance.autorun(function(){
		  var commands = Commands.find({},{sort:{createdAt:-1}});
		  commands.observe({
		  	added:function(cmd){
		  		var stat=Session.get('status');
		  		if(!stat){
		  			stat="close";
		  		}
		  		if(stat=='open'){
<<<<<<< HEAD
		  		  alert(cmd.command);
		  		  // if(cmd.command=='left'){
		  		  // 	alert('执行向左滚动的函数。');
		  		  // }else{
		  		  // 	alert('执行向左滚动的函数。');
		  		  // }
		  	    }
=======

		  		  if(cmd.command=='left'){

		  		  }else{

		  		  }
		  	  }
>>>>>>> Ranger
		  	}

		  });

   });

});

Template.home.events({
 'click #open-control':function(){
 		Session.set("status","open");
 },
 'click #close-control':function(){
 		Session.set("status","close");
 },
 'click #btn-left':function(){
 		Commands.insert({command:'left',createdAt:new Date()});
 },
 'click #btn-right':function(){
 		Commands.insert({command:'right',createdAt:new Date()});
<<<<<<< HEAD
 },
});
=======
 }
});



>>>>>>> Ranger
