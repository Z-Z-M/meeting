MeetingList.allow({
	'insert': function(userId, doc) {
		//console.log(userId);
		return userId;
	},
	'update': function(userId, doc, fileds, modifier) {
		return userId === doc.userId;
	},
	'remove': function(userId, doc){
		return false;
	}
});

Uploads.allow({
	'insert': function(userId, doc) {
		//console.log(userId);
		return userId;
	},
	'update': function(userId, doc, fileds, modifier) {
		//return userId === doc.userId;
		return true;
	},
	'remove': function(userId, doc){
		return false;
	},
	'download': function(userId, doc){
		return true;
	}
});