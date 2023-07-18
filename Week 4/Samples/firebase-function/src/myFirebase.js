import { initializeApp } from "firebase/app";

// Install the @firebase/database package separately from NPM, and import the necessary functions directly from the modular package.
// By using the modular version of the Firebase Realtime Database package, 
// you should be able to import the necessary functions correctly.
import { getDatabase, ref, set, push, get, update, remove } from "@firebase/database";;


const firebaseConfig = {
  apiKey: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  authDomain: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  databaseURL:
    "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  projectId: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  storageBucket:
    "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  messagingSenderId:
    "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
  appId: "REPLACE THIS WITH THE CODE YOU COPIED FROM THE FIREBASE WEBSITE",
};

initializeApp(firebaseConfig);
const db = getDatabase();

export function MyFirebase() {
  const createUser1 = (name, eml, profilePicURL) => {
    let newUserRef = ref(db, "users/1"); // Generate a new child node with an auto-generated ID
    set(newUserRef, {
      username: name,
      email: eml,
      profile_picture: profilePicURL,
    })
      .then(() => {
        console.log("Added the new user successfully!");
      })
      .catch((reason) => {
        console.log("ERROR: Did NOT add the user. Reason: " + reason);
      });
  };

  /*By using push directly on the usersRef, you generate a new child node with an auto-generated ID. 
  Then, you can use the set function on the newUserRef 
  to set the user data under that newly created node.*/

  const createANOTHERUser = (name, eml, profilePicURL) => {
    const usersRef = ref(db, "users");
    const newUserRef = push(usersRef); // Generate a new child node with auto-generated ID
    set(newUserRef, {
      username: name,
      email: eml,
      profile_picture: profilePicURL,
    })
      .then(() => {
        console.log("Added the BRAND NEW new user successfully!");
      })
      .catch((reason) => {
        console.log("ERROR: Did NOT add the brand new user. Reason: " + reason);
      });
  };

  const getAnObject = (location, callWhenFinished) => {
    let objRef = ref(db, location);
    get(objRef)
      .then((snapshot) => {
        var objectToGet = snapshot.val() || null;
        console.log("read this value in the original handler: " + objectToGet);
        callWhenFinished(objectToGet);
      })
      .catch((error) => {
        console.log("Couldn't get the object: " + error);
        callWhenFinished(null);
      });
  };

  const getListOfObjects = (location, callWhenFinished) => {
    let listRef = ref(db, location);
    get(listRef)
      .then((snapshot) => {
        var listOfUsers = snapshot.val() || [];
        callWhenFinished(Object.values(listOfUsers));
      })
      .catch((error) => {
        console.log("Couldn't get list of objects: " + error);
        callWhenFinished([]);
      });
  };

  const updateObject = (location, updates, callWhenFinished) => {
    let objRef = ref(db, location);
    update(objRef, updates).then(callWhenFinished).catch(callWhenFinished);
  };

  const deleteObject = (location, callWhenFinished) => {
    let objRef = ref(db, location);
    remove(objRef).then(callWhenFinished).catch(callWhenFinished);
  };

  return {
    createUser1,
    createANOTHERUser,
    getAnObject,
    getListOfObjects,
    updateObject,
    deleteObject,
  };
}

