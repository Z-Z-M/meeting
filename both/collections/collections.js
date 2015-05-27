MeetingList = new Mongo.Collection('meetingList');

Commands  = new Mongo.Collection("commands");

Commands.allow({
		insert:function(){
			return true;
		}

});