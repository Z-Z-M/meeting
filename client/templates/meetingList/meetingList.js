
	Template.meetingList.created = function () {
	  this.autorun(function () {
	    this.subscription = Meteor.subscribe('meetingList');
	  }.bind(this));
	};

	Template.meetingList.rendered = function () {
	  this.autorun(function () {
	    if (!this.subscription.ready()) {
	      IonLoading.show();
	    } else {
	      IonLoading.hide();
	    }
	  }.bind(this));
	};

	Template.meetingList.helpers({
	  meetingList: function () {
	    return MeetingList.find({}, {sort: {meetingTime: -1}});
	  }
	});

