Template.settings.events({
  'click [data-action=sign-out]': function (event, template) {
  	event.preventDefault();
    Meteor.logout(function () {
      $('body').removeClass('modal-open');
      Router.go('/');
    });
  }
});
