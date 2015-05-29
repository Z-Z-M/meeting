Template.settings.events({
  'click [data-action=sign-out]': function (event, template) {
    Meteor.logout(function () {
      $('body').removeClass('modal-open');
      Router.go('/');
    });
  }
});
