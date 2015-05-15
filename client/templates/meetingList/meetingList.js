	var tempStatus = {
	  status: '',
	  current: '',
	}

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
			console.log(tempStatus);
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
		'click .my-class': function () {
			console.log(this);
			tempStatus.status = 'selected';
			tempStatus.current = this;
			Session.set("selectedMeeting",this._id);
		},
		'click .meeting-count': function () {
			MeetingList.update(this._id,{$inc:{meetingVote: 1}});
		}
	});