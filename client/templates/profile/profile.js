Template.profile.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('userVoteInfo', Meteor.userId());
    //console.log(this.subscription);
  }.bind(this));
};

Template.profile.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
  
/*
  if (!Meteor.loggingIn() && !Meteor.user()) {
    IonModal.open('signIn');
  }
*/

};

Template.profile.helpers({
  user: function () {
    if (Meteor.userId()) {
      return Meteor.user();
    }
  }
});
