import firebase from "firebase";
import "firebase/auth";
import history from '../History'

    export class Auth {

    signInUsingGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

          firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log('user ===', user);
        // IdP data available in result.additionalUserInfo.profile.
          // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log('inside the catch, error===', error);
      });
    }  

    signInWithEmailPassword(email, password) {
        // [START auth_signin_password]
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            history.push('/welcome')
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode+errorMessage)
          });
        // [END auth_signin_password]
      }
      
    //You can replace the function signature with
    //function signInWithEmailPassword(email, pass)
    signUpWithEmailPassword(email, password) {
        // [START auth_signup_password]
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
            history.push('/welcome')
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode+errorMessage)
            // Might give call back depending on error
          });
        // [END auth_signup_password]
      }
      
    signOut() {
        // [START auth_sign_out]
        firebase.auth().signOut()
        .then(() => {
          // Sign-out successful.
          console.log('signout successful')
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
        // [END auth_sign_out]
      }
      
    currentUser() {
        // [START auth_current_user]
        const user = firebase.auth().currentUser;
      
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // ...
          return user
        } else {
          // No user is signed in.x`
          return undefined
        }
        // [END auth_current_user]
      }


    // Currently Unused:
    // authStateListener() {
    //     // [START auth_state_listener]
    //     firebase.auth().onAuthStateChanged((user) => {
    //       if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         //var uid = user.uid;
    //         // ...
    //       } else {
    //         // User is signed out
    //         // ...
    //       }
    //     });
    //     // [END auth_state_listener]
    //   }
}
