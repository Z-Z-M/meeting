Router.route('/', {
  name: 'home'
});
Router.route('users/login/', {
  name: 'login'
});
Router.route('users/register/', {
  name: 'register'
});
Router.route('meetingList/', {
  name: 'meetingList'
});


Router.route('profile/', {
  name: 'profile'
});


var requireLogin = function() {
	//console.log(Meteor.userId()); 
	if (! Meteor.userId()) {
		//Router.go('login');
		this.render('login');
		this.layout('');
	} else {
		this.next();
		//Router.go('meetingList');
		//this.render('meetingList')
	}
}

Router.onBeforeAction(requireLogin, {except: ['home','register']});