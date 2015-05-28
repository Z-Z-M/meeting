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
		  			stat="open";
		  		}
		  		if(stat=='open'){
		  		  alert(cmd.command);
		  		  // if(cmd.command=='left'){
		  		  // 	alert('执行向左滚动的函数。');
		  		  // }else{
		  		  // 	alert('执行向左滚动的函数。');
		  		  // }
		  	    }
		  	}

		  });

   });

});
Template.home.rendered = function() {
  IonSideMenu.snapper.disable();
  
};

Template.home.destroyed = function() {
  IonSideMenu.snapper.enable();
};

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
 },
});