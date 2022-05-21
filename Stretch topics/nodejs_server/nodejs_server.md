# Using Node.js/Express.js API Server



## Learning objectives

* TNTs will understand the difference between front-end and back-end components
* TNTs will be able to create a new 'backend' using Node.js
* TNTs will be able to GET, POST, PUT, DELETE information in their Node.js database using basic API commands.
* TNTs will be able to access their Firebase database programmatically, including the normal CRUD operations

## Instructional session (60 minutes)

### Lesson Overview

1. Let's look at what a Node.js server is 
   1. Look at the composition of a simple server
   2. APIs
2. What *should* you decide your Node.js does?
3. How do we access the server from an external app?
   1. How to set up your server
   2. API of your server
   3. Overview of our approach to interacting and accessing our server
   4. GET
   5. POST

### What is Node.js

Node.js is a Javascript server engine built on top of the Chrome V8 Javascript Engine. What Node.js does is it allows you to set up an API server for anything you build to interact with. While you can use Node.js servers to return static data or responses, you can think of them as a way for your front-end application to pass the responsibility, delegation, and the working with certain requests. Some apps/websites do work by internally implementing the middleware, but it is dependent on the development team and their architectural preferences. What are some examples of reasons you would use a Node.js API server?


Ex: Returning static information blocks, route requests to the correct service (i.e. authentication, profile info, storage, microservices), compound and modularize requests (i.e. when you send a request to the API server it has multiple endpoints that should be hit to build a response back to the client). 

### What is Express.js?

Express is a framework built on top of Node.js. As described by Express.js, "Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love." Essentially you can think of Express.js as the equivalent of using React to build a website. We *could* build a website using pure HTML, Javascript, and CSS, but React simplifies that process with a bunch of under-the-hood tools. Express works in a similar capacity, building on top of the pure Node.js framework to simplify things on our end.

### Let's look at a simple Node.js server:

1. To start, we will need to create a new project. If you do not, make sure you have Node.js installed already. You can do so at [https://nodejs.org/en/](https://nodejs.org/en/).

2. Now we need to create a new project for our server. On your computer, create a folder/directory where we will initialize this. For example, let's call it nodejs_practice. This can be done in terminal using the `mkdir nodejs_practice` command. Once created, use `cd nodejs_practice`. 

3. In that folder, run the command `npx express-generator`. If `express` cannot be found, run `npm install -g express-generator` and then `express -h` to verify it's working.

4. Run the command `express --view=pug nodejs_practice_app`. This will create our Express.js application off the boilerplate template (good thing we don't have to do this ourselves right?).

5. Let's get into our application. Call `cd nodejs_practice_app`.

6. Once in the application folder, run `npm install` to get al the dependencies that are needed.

7. If you want to see what we have so far, run `npm start` to spin up the Express.js server. Check out https://localhost:3000 and what you see!

8. If you go to any other endpoint, like https://localhost:3000/help/, what do you see? What about https://localhost:3000/users/?

9. Before we proceed with linking up, let's make one minor change. `Ctrl+C` to end the session. In the `bin` folder, look for a file called `www`. On line 15, change the port number from 3000 to 3010. You can change it to whichever port you choose, but we want to make sure it is distinct from the default ports on React to avoid any collision when we launch in localhost.

10. To get started now, let's add an endpoint for later. Add the following code snippet to the `routes/index.js` file:

```js
router.get("/home", (req, res) => {
  res.json({ message: "The home endpoint has been hit." });
});
```


#### Exercise:

For this topic we will be creating our API server, adding some routes, and experimenting with returns to a React App

### Let's look at what JSON is

There's a [rather lengthy article in Wikipedia about JSON which includes a lot of solid examples to browse through](https://en.wikipedia.org/wiki/JSON).  
The 'tree view' of the document (in our document database) is a typical example of how to think about JSON files.  

There's a couple of important points to remember when working with JSON files:

1. JSON files are very similar to object literals in JavaScript (and therefore similar-ish to object literals in JavaScript) but there are differences.  For example, and object literal in JS does not need to put quotes around the field names...

   ```javascript
   let objectLiteral = {
     name: "A",
     email: "A@A.com"
   }
   ```

   ...but JSON files do need the quotes::

   ```json
   {
     "name": "A",
     "email": "A@A.com"
   }
   ```

2. There's no rules enforcing a certain structure, nor limiting what you can do with this.

   - On the one hand this is nice because you can add extra information or fields to any given part of the document, which can be handy (especially in web application development, because the browser will send the server a bunch of strings and these strings may or may not be consistent each time).
   - On the other hand computers are best at doing the exact same thing over and over, so when you've got a document that may have variations in the structure that may complicate your code

3. You CANNOT have circular references in the document

   - There are ways around this.  For example, instead of a reference you could put in an ID number, and then put stuff into the document in way that allows you to look up objects by ID number.

4. You CANNOT put comments into JSON files (at least officially)
   - Because this was intended as a format for one program to send information to another program there's no way to add comments.  :(
   - Some developers, if they are sending/receiving JSON objects internally, may have patterns and practices to pass "comments" around. One example is defining a particular property that contains "comments" for the object but this is not a customary or standard practice.

### What *should* you use a server for?

Normally when you run an instance of an app, it only has a local state that is usually wiped after each exit. A server can supplement that in the following ways:

- It can return items, states, or statuses that you may want to change independently of an app. Some examples are timed components like purchase windows or "drops". A person can manipulate the front-end of a website to potentially "unlock" timed features, but can't with a server and clock controlled by you. Can you think of other examples of this?

- It can modularize your platform. Sometimes only client-end or server-end code needs to be updated. Having your code modularized and deployed separately can reduce downtime or need to bring entire applications down for minor changes. Why else would you want to separate the server functionality from the front-end?

- It can connect your front-end as a "middle layer" to other services and datastores. Using APIs you can have your server act as the delegator between a client and your other services you don't want the client to access directly. Rather than a client being able to see the whole database and pick out their info **(VERY BAD SECURITY AND PRIVACY PRACTICE!)**, the server can do the searching, processing, and deliver only what the client should have access for. 

### How do we access the server from code? (Setting Up React App)

If you already have a React app available to practice and experiment with, we suggest doing so. However, it is not recommended to do so in a production instance to avoid issues while learning. The following steps will run through the steps if you don't have one already for practice.

1. In the root folder of this exercise, run `npx create-react-app nodejs_react_example`. This will create a new React app in the same directory. After doing so, `cd` into the app and run npm i to properly install packages.

2. In the `package.json` file of the React app, add the following `"proxy": "http://localhost:3010"` so we eliminate the need for providing this full endpoint in the app.

3. Go to `src/App.js` in the React app. If you are using your own project, then use any component you'd like. Here, we will use `React.useEffect()` to make our call. Should your component be class based, this is `componentDidMount()`.

4. Add this to your component:

```js
  const [serverData, setServerData] = React.useState(null);

  React.useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => setServerData(data.message));
  }, []);
```

In the render, add this:

```jsx
    <p>{!serverData ? "Fetching from the server..." : serverData}</p>
```

5. Start up both your Express.js server and your React app with `npm start`. Note that you will need to run this within the directory of each.

6. Look at `localhost:3000` and see your changes!


### How do we send things to the server? (POST Request)

1. In your Express.js server, we'll need to add a few things. First, run `npm install --save body-parser` in the directory of the Express.js server. In the app.js file, we need to add:

```js
const bodyParser = require("body-parser");
```

as well as

```js
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

2. Within the `index.js` file of the server, let's add an endpoint for an incoming POST request:

```js
router.post("/submit", (req, res) => {
  var name = req.body.name
  console.log("Entered Name: " + name)
  res.json({message: "Your response has been submitted with name: " + name})
  res.end()
})
```

3. In our React app, let's add some new states we'll need:

```js
  const [name, setName] = React.useState("");
  const [formSubmitResponse, setFormSubmitResponse] = React.useState(null)
```

4. Now add an event handler for when we send and receive a server response:

```js
  const handleSubmit = (event) => {
    fetch("/submit", {
      method: 'POST',
      body: JSON.stringify({
        name: name
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then((data) => setFormSubmitResponse(data.message))
    .catch(err => {
      console.error(err)
    });

    event.preventDefault();
  }
```

5. Let's add the simple form to our application:

```js
    <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </label>
        <input type="submit" />
        </form>
    <p>{!formSubmitResponse ? "" : formSubmitResponse}</p>
```

6. Finally, let's restart our React app and server. Keep note that as it stands, the Express.js server does not refresh automatically when we make changes. You will have to press `Ctrl+C` and then run `npm start` again.

7. Play with your app and watch your server to see what happens!

### Summary

By this point of the topic you should now have an Express.js server from which you can build upon. You cna now GET and POST to an Express.js server using the built-in `fetch` API in React.

At this point, you have the necessary groundwork to split some of your components between the server and client. To further build your knowledge, experiment with making your server forward requests between your apps and database or functions!
