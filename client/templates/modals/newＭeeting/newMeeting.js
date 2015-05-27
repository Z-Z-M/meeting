AutoForm.hooks({
  'meeting-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      IonKeyboard.close();
      Router.go('meetingList', {_id: result});
    }
  }
});
