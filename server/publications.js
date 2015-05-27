Meteor.publish("meetingList", function () {
	return MeetingList.find();
});

Meteor.publish('meetingSearch', function(query) {
  check(query, String);

  if (_.isEmpty(query)) {
    return this.ready();
  }

  return MeetingList.search(query);
});

Meteor.publishComposite('userVoteInfo', function(_id) {
  return {
    find: function() {
      return Meteor.users.find({_id: _id});
    },
    children: [
      {
        find: function(user) {
          return MeetingList.find({_id: {$in: user.profile.votedMeetingIds}}); 
        }
      }
    ]
  };
});

Meteor.publish('commands',function (){
  return Commands.find({},{sort:{createdAt:-1},limit:1});
});