Meteor.methods({
	'MeetingList.vote': function (_id) {
		if (!Meteor.user()) {
			return;
		}

		if(_(Meteor.user().profile.votedMeetingIds).include(_id)){
			return;
		}
		MeetingList.update({_id:_id}, {$inc: {meetingVotes: 1}, $addToSet: {voterIds:this.userId}});
		Meteor.users.update({_id: this.userId},{$addToSet: {'profile.votedMeetingIds': _id}});
	}
});