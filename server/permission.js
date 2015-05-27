MeetingList.allow({
	'insert': function(userId, doc) {
		return userId;
	},
	'update': function(userId, doc, fileds, modifier) {
		return userId === doc.userId;
	},
	'remove': function(userId, doc){
		return false;
	}
});