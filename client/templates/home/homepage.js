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

		  		  if(cmd.command=='left'){

		  		  }else{

		  		  }
		  	  }
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
 }
});



