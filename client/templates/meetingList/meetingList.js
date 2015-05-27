
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
			return MeetingList.find({}, {sort: {meetingTime: -1,meetingVote: -1}});
		},
		selectedName: function(){
			console.log(this);
			var meeting = MeetingList.findOne(Session.get("selectedMeeting"));
			return meeting && meeting.meetingName;
		}
	});

	Template._meetingItem.helpers({
		selected: function (){
			return Session.equals("selectedMeeting",this._id) ? "selected" : '';
		}
	});

	Template._meetingItem.events({
		'click .meeting-list': function () {
			console.log(this);
			Session.set("selectedMeeting",this._id);
			$(event.currentTarget).addClass("selected");//.siblings().removeClass("selected");
		},
		'click .meeting-count': function () {
			MeetingList.update(this._id,{$inc:{meetingVote: 1}});
		}
	});