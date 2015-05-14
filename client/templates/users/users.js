// users = new Mongo.Collection('users');
// users.attachSchema(new SimpleSchema({
// 	phone: {
// 	type: String,
// 	label: "phone",
// 	max: 200
// 	},
// 	nick: {
// 	type: String,
// 	label: "nick"
// 	},
// 	code: {
// 	type: Number,
// 	label: "code",
// 	min: 4
// 	},
// 	email: {
// 	    type: String,
// 	    regEx: SimpleSchema.RegEx.Email,
// 	    label: "email"
// 	}
// }));
  Template.users.events({
  	'click #code': function () {
      $('#code-text').val('8888');
    },
    'click #submit': function () {
      window.location = '../account';
    }
  });