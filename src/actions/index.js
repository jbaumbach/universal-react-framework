import alt from '../alt';
import Firebase from 'firebase';
import Config from '../config';

class Actions {
  // Actions in Alt are defined by the function name here.  They all follow the same
  // basic pattern.
  login(args) {
    return (dispatch) => {
      var fb_Main = new Firebase(Config.firebaseUrl());
      fb_Main.authWithOAuthPopup('google', (err, user) => {
        if (err) {
          // something not great happened
          return;
        }
        
        // Call the callback with our user.  So, Alt will have a 'login' event,
        // that when happens, passes a user object.  Pretty cool.
        dispatch(user);
      });
    }
  }  
}

// This wires up all the actions for us.  That's the good part of Alt library's implementation
// of Flux.  Less boilerplate and stuff to remember to do.  That means less bugs.
export default alt.createActions(Actions);
