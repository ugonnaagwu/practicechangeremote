
import React, { useRef, useState } from "react";
import {MyFirebase} from "./myFirebase"



export default function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const updateNameRef = useRef(null);
  const [user1, setUser1] = useState({
    username: "NO NAME YET",
    email: "No email yet",
    profile_picture: "No profile picture yet",
  });
  const [allUsers, setAllUsers] = useState([]);

  const displayUser1NameOnPage = (newUser1) => {
    if (newUser1 === null) {
      alert("Error - didn't receive an object!");
      return;
    }
    setUser1(newUser1);
  };

  const displayUserListOnPage = (users) => {
    if (users.length === 0) {
      alert("Error - didn't receive the list of users!");
      return;
    }

    setAllUsers(Object.values(users));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "Name: " + nameRef.current.value + " Email: " + emailRef.current.value
    );

    MyFirebase().createANOTHERUser(
      nameRef.current.value,
      emailRef.current.value,
      ""
    );
  };

  const updateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      "Name: " + nameRef.current.value + " Email: " + emailRef.current.value
    );

    MyFirebase().updateObject(
      "/users/1",
      { username: updateNameRef.current.value },
      () => {
        alert("Updated the user's name!");
        setUser1((prevState) => ({
          ...prevState,
          username: updateNameRef.current.value,
        }));
      }
    );
  };

  const displayRemoveUserResult = (err) => {
    if (err === null) {
      alert("Something went wrong when trying to remove the user!" + err);
      return;
    }

    alert("Successfully removed the user!");
    // Reset user1 state to default values
    setUser1({
      username: "NO NAME",
      email: "NO EMAIL",
      profile_picture: "NO PICTURE",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Demo</h1>
        Examples:
        <ol>
          <p>
            <button
              onClick={() =>
                MyFirebase().createUser1("Alice", "Alice@A.com", "https://....")
              }
            >
              Create User #1
            </button>
          </p>
          <p>
            <form onSubmit={submitHandler}>
              User's name: <input type="text" ref={nameRef} />
              <br />
              User's email: <input type="text" ref={emailRef} />
              <br />
              <input
                type="submit"
                value="Click to add another user, with this info!"
              />
            </form>
          </p>
          <li>
            <p>User #1's name: {user1.username}</p>
            <button
              onClick={() =>
                MyFirebase().getAnObject("/users/1", displayUser1NameOnPage)
              }
            >
              Get User #1's name
            </button>
          </li>
          <p>
            <button
              onClick={() =>
                MyFirebase().getListOfObjects("/users", displayUserListOnPage)
              }
            >
              Get all Users
            </button>
          </p>
          {allUsers.map((nextUser) => (
            <ul key={nextUser.username}>
              <li>
                <b>{nextUser.username}</b>
                <ul>
                  <li>{nextUser.email}</li>
                  <li>
                    {nextUser.profile_picture
                      ? nextUser.profile_picture
                      : "No picture available"}
                  </li>
                </ul>
              </li>
            </ul>
          ))}
          <p>
            <form onSubmit={updateSubmitHandler}>
              Change the name of user #1{" "}
              <input type="text" ref={updateNameRef} />
              <br />
              <input type="submit" value="Update user #1 to use this name!" />
            </form>
          </p>
          <li>
            <button
              onClick={() =>
                MyFirebase().deleteObject("users/1", displayRemoveUserResult)
              }
            >
              Remove user #1
            </button>
          </li>
        </ol>
      </header>
    </div>
  );
}
