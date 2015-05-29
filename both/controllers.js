AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

HomeController = AppController.extend({
	layoutTemplate: ''
});

loginController = AppController.extend({
	layoutTemplate: ''
});

registerController = AppController.extend({
	layoutTemplate: ''
});

ProfileController = AppController.extend({});

MeetingListController = AppController.extend({
	waitOn:function(){
		return Meteor.subscribe('meetingList');
	},
	data:function(){
		return {meetingList:MeetingList.find({},{sort:{creatAt:-1}})};
	}
});
