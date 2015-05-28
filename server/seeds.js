/*
Meteor.startup(function() {
	var users = [
		{
			username:"zzskyfsih",
			password:"123456",
			emails: [{
				address: 'nick@gamail.io',
				verified: false
			}],	
			profile:{
				//name: 'nickw'
				tel:'13718693172',
          		code:'asdf8'
			}
		}
	];

	var meetingList = [
		{
			meetingName: '项目1',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-15 05:14:50'
		},
		{
			meetingName: '项目15',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-15 15:15:50'
		},		
		{
			meetingName: '项目14',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-14 05:14:50'
		},		
		{
			meetingName: '项目13',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-13 05:13:50'
		},		
		{
			meetingName: '项目12',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-09 05:14:50'
		},		
		{
			meetingName: '项目11',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-12 05:12:50'
		},		
		{
			meetingName: '项目10',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-11 05:11:50'
		},		
		{
			meetingName: '项目9',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-15 06:14:50'
		},		
		{
			meetingName: '项目8',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-15 05:14:50'
		},		
		{
			meetingName: '项目1',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-15 05:14:50'
		},		
		{
			meetingName: '项目2',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-15 05:13:49'
		},		
		{
			meetingName: '项目3',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-14 05:14:50'
		},		
		{
			meetingName: '项目4',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-16 05:14:50'
		},		
		{
			meetingName: '项目5',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-13 05:14:00'
		},		
		{
			meetingName: '项目6',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-10 18:14:50'
		},		
		{
			meetingName: '项目7',
			meetingVotes: 0,
			tagline:'项目测试测试',
			meetingTime:'2015-05-15 05:14:50'
		}
	];

	if(Meteor.users.find({}).count() === 0) {
		_(users).each(function (user){
			Meteor.users.insert(user);
		});
	}

	var author = Meteor.users.find().fetch()[0];

	if (MeetingList.find({}).count() === 0) {
		_(meetingList).each(function (list){
			MeetingList.insert({
				userId: author._id,
				meetingName: list.meetingName,
				meetingVotes: list.meetingVote,
				tagline:list.tagline,
				meetingTime:list.meetingTime,
				createdAt:moment().format("YYYY-MM-DD HH:mm:ss")
			});
		});
	 }
});
*/