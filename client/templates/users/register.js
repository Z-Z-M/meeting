Template.register.events({
    'submit #register-form' : function(e, t) {
      e.preventDefault();
      var username = t.find('#account-username').value
        ,tel = t.find('#account-tel').value
        ,code = t.find('#account-code').value
        ,email = t.find('#account-email').value
        ,password = t.find('#account-password').value;

        // Trim and validate the input

      Accounts.createUser({
        username: username, // unique name
        password: password,
        emails: email,
        profile: {
          // The profile is writable by the user by default.
          tel:tel,
          code:code
        }},
       function(err){
          if (err) {
            // Inform the user that account creation failed
            console.log(err);
          } else {
            // Success. Account has been created and the user
            // has logged in successfully.
            Router.go('/meetingList');
          }
        }
      );
      return false;
    }
  });