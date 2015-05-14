AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

HomeController = AppController.extend({
	layoutTemplate: ''
});

UsersController = AppController.extend({});

MeetingListController = AppController.extend({});
