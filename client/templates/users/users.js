  Template.users.events({
  	'click #code': function () {
      $('#code-text').val('8888');
    },
    'click #submit': function () {
      window.location = '../account';
    }
  });