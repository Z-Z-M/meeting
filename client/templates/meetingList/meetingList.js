	UI.registerHelper('formatTime', function(context, options) {
  		if(context)
    		return moment(context).format('YYYY-MM-DD HH:mm:ss');
	});
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
		},
		hasVotedClass: function () {
			if( !Meteor.user() ){
				return;
			}
			if(_(Meteor.user().profile.votedMeetingIds).contains(this._id)){
				return 'has-voted';
			}
		}
	});

	Template._meetingItem.events({

		'click .meeting-list': function (event, template) {
			
			Session.set("selectedMeeting",this._id);
			$(event.currentTarget).addClass("selected");
		},
		'click .meeting-list': function () {
			//console.log(this);
			Session.set("selectedMeeting",this._id);
			$(event.currentTarget).addClass("selected");
		},
		'click .meeting-count': function (event, template) {
			event.preventDefault();
/*
			if(!Meteor.user()){
				IonModal.open('signIn');
				return;
			}
*/			console.log(this._id);
			Meteor.call('MeetingList.vote',this._id);
			
		}
	});