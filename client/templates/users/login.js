  Template.login.events({

    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var username = t.find('#logni-username').value
        , password = t.find('#login-password').value;
        //console.log(password)
        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function(err){
          if (err){
            console.log(err.reason);
          }else{
            //console.log('ok')
            Router.go('/meetingList');
          }
      });
         return false; 
    }
  });