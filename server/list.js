
	Meteor.startup(function(){
		if(MeetingList.find().count() < 10){
			var meetingNames = ["项目1","项目2","项目3","项目4","项目5","项目6","项目7","项目8","项目9","项目10","项目11"];
			_.each(meetingNames, function (name){
				MeetingList.insert({
					 meetingName:name,
					 meetingTime:moment().format("YYYY-MM-DD HH:mm:ss"),
					 meetingVote:Math.floor(Random.fraction() * 10) * 5
				});
			});
		}

		Meteor.publish("meetingList", function () {
		  //if (this.userId === 'superuser') {
			return MeetingList.find({},{sort: {meetingTime:-1}});
		  //} else {
		   // return [];
		  //}
		});

	});