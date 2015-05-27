Meteor.users.before.insert(function (userId, doc){
	doc.profile.votedMeetingIds = [];
});

Meteor.users.helpers({
	votedMeetings: function () {
		return MeetingList.find({_id: {$in: this.profile.votedMeetingIds}});
	}
});