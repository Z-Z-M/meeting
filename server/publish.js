Meteor.publish('commands',function (){
	return Commands.find({},{sort:{createdAt:-1},limit:1});
});