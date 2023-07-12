# React Router

## Week 3, Lesson 3

React router is a library that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine.

React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.

There are three primary categories of components in React Router:

* routers, like `<BrowserRouter>`, and `<HashRouter>`
* navigation, like `<Link>`, `<Navigate>`
* route matchers, like `<Route>`, and `<Routes>`

## Learning objectives

* TNTs will learn how to do simple, multi-page navigation in React using React Router
* TNTs will be able to easily add links after designing the webpage
* TNTs will explore Adaptive Layouts for Navigation UI Design of React apps

## Time required and pace

* [20 Minutes]: Explain React Router different components
* [30 Minutes]: Explore and Create a simple multiPage navigation using react-router-Dom (Example 1)
* [30 Minutes]: Explore React Router: How to do simple, multi-page navigation in React with React router and BootStrap Navbar
* [1 hour] - Exercise: Start coding up the page navigation
  
## References

1. [React Router quick Start](https://reactrouter.com/en/main)
2. [Using hooks with react router](https://blog.logrocket.com/using-hooks-with-react-router/)
3. [Browser Router Vs. Hash Route](https://medium.com/@daniel.hramkov/browserrouter-vs-hashrouter-e8bf1c3824ce)
4. [Bootstrap Navbar](https://react-bootstrap.github.io/docs/components/navbar)
5. [Bootstrap Form](https://react-bootstrap.github.io/docs/forms/overview)

## Some key terms we use with React Route

- ***URL*** - The URL in the address bar. A lot of people use the term "URL" and "route" interchangeably, but this is not a route in React Router, it's just a URL.

- ***Segment*** - The parts of a URL or path pattern between the / characters. For example, "/users/123" has two segments.

- ***Location*** - This is a React Router specific object that is based on the built-in browser's window.location object. It represents "where the user is at". It's mostly an object representation of the URL but has a bit more to it than that.

- ***Location State*** - A value that persists with a location that isn't encoded in the URL. Much like hash or search params (data encoded in the URL), but stored invisibly in the browser's memory.

- ***History*** - An object that allows React Router to subscribe to changes in the URL as well as providing APIs to manipulate the browser history stack programmatically.

- ***History Stack*** - As the user navigates, the browser keeps track of each location in a stack. If you click and hold the back button in a browser you can see the browser's history stack right there.

- ***History Action*** - One of POP, PUSH, or REPLACE. Users can arrive at a URL for one of these three reasons. A push when a new entry is added to the history stack (typically a link click or the programmer forced a navigation). A replace is similar except it replaces the current entry on the stack instead of pushing a new one. Finally, a pop happens when the user clicks the back or forward buttons in the browser chrome.

- ***Client Side Routing (CSR)*** - A plain HTML document can link to other documents and the browser handles the history stack itself. Client Side Routing enables developers to manipulate the browser history stack without making a document request to the server.

- ***URL Params*** - The parsed values from the URL that matched a dynamic segment.

- ***Router*** - Stateful, top-level component that makes all the other components and hooks work.

- ***Route Config*** - A tree of routes objects that will be ranked and matched (with nesting) against the current location to create a branch of route matches.

- ***Route*** - An object or Route Element typically with a shape of { path, element } or `<Route path element>`. The path is a path pattern. When the path pattern matches the current URL, the element will be rendered.

- ***Route Element - Or `<Route>`***. This element's props are read to create a route by `<Routes>`, but otherwise does nothing.

- ***Outlet*** - A component that renders the next match in a set of matches.

- ***Match*** - An object that holds information when a route matches the URL, like the url params and pathname that matched.

- ***Matches*** - An array of routes (or branch of the route config) that matches the current location. This structure enables nested routes.

## Session Setup

* [ ] First, install create-react-app and make a new project with it. ```npx create-react-app demo-app```
* [ ] Install React Router from the public npm registry with either `npm or yarn`. Since we’re building a web app, we’ll use react-router-dom
```npm install react-router-dom``` We are using 6.14.1 version.

### Example 1

In this small example we will build an app that have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different `<Link>s`, the router renders the matching `<Route>`.

React router gives us components [Routes,Route,Link,BrowserRouter] which help us to implement the routing.

***To create the first route using React Router library, open src/App.js file and add the following import statement:***
``` JSX
// after other import statements
import { BrowserRouter as Router } from 'react-router-dom';
```
This is the first component to import from the react-router-dom library. It is used to wrap different routes. It uses the HTML5 history API to keep track of routes history in the React app. The Router part in the above snippet is the alias that makes it easier to write. It is recommended to import and use it at the top level component in a React app’s component hierarchy:

***The next component to import from react-router-dom is the new `Routes`:***

```JSX
import { BrowserRouter as Router, Routes } from 'react-router-dom';
```
This new element is an upgrade of the previous `Switch` component in React Router v5. It includes features like relative routing and linking, automatic route ranking, nested routes, and layouts. 

***The last component from react-router-dom required is called `Route`*** . It is responsible for rendering the UI of a React component:

```JSX
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
```

It has a prop called `path` which always matches the current URL of the application. The second required prop is called `element` that tells the Route component when a current URL is encountered and which React component to be rendered. 


```JSX
import { BrowserRouter as Router , Route, Routes, Link} from "react-router-dom" 
```

* **`<BrowserRouter>` tags**: Set up your app to work with React Router by wrapping the app in `<BrowserRouter>` element.We refer to it here as `<Router>`. Everything that gets rendered goes inside the `<BrowserRouter>` element tag.

#### Remember ####

- ***Router*** - Stateful, top-level component that makes all the other components and hooks work.

- ***Route*** - An object or Route Element typically with a shape of { path, element } or `<Route path element>`. The path is a path pattern. When the path pattern matches the current URL, the element will be rendered.

- ***Route Element - Or `<Route>`***. This element's props are read to create a route by <Routes>, but otherwise does nothing.


Note: Behind the scenes a `<Link>` renders an `<a>` with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.

***Let’s implement the routing.***

In the Route component, we need to pass the two props

* path: it means we need to specify the path.
* element: which component user needs to see when they will navigate to that path.

```JSX
In App.js

    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Category />} />
    <Route path="/about" element={<Products />} />
```

We will also add simple 3 function components one for each page to App.js

```JSX
In APP.js

//Home Page function Component
function Home() {
  return <h2>Home</h2>;
}

//About Page function Component
function About() {
  return <h2>About</h2>;
}

//User Page function Component
function Users() {
  return <h2>Users</h2>;
}
```

Now if you enter manually localhost:3000/users you will see *Users* component is rendered.


***Adding Navigation using Link component***
React Router provides a `<Link>` component to create links in your application. Wherever you render a `<Link>`, an anchor `(<a>)` will be rendered in your HTML document.
So it provides declarative, accessible navigation around your application.

Normally we use the Link component from react-router-dom as shown below:

```JSX
<Link to="/About">About</Link>
```

After adding navigation you will see the routes are rendered on the screen. if you click on the users you will see url is changing and Users component is rendered.

```JSX
<ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/users">Users</Link>
    </li>
</ul>
```

***Route Matcher***


In React Route v6 `Routes` replaced `<Switch>`to prevents bugs due to manually putting routes in the wrong order in a `<Switch>`. It includes features like relative routing and linking, automatic route ranking, nested routes, and layouts. 

```JSX
// in v5
<Router>
  <Switch>
    <Route exact path="/">
            <Home />
        </Route> 
        <Route path="/about">
            <About />
        </Route>
        <Route path="/users">
            <Users />
        </Route>
        <Route>
            <PageNotFound />
        </Route>
  </Switch>
</Router>

or

<Router>
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/products" component={Category} />
    <Route path="/about" component={Products} />
    <Route path="*" component={PageNotFound} />
  </Switch>
</Router>

```

``` JSX
// in v6
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Category />} />
    <Route path="/about" element={<Products />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</Router>  
```
We'll need to define the `PageNotFound` component, too:

```JSX
function PageNotFound() {
  return <h2>Page not found!</h2>;
}
```
#### Please note ####

In the simple-route-sample example, in the index.js file, we are going to wrap our App component with the Router component instead of the App.js.

```JSX
In index.js

React.DOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
```
**A few important things to notice about v6 in this example:**

- `<Route path>` and `<Link to>` are relative. This means that they automatically build on the parent route's path and URL so you don't have to manually interpolate match.url or match.path
- `<Route exact>` is gone. Instead, routes with descendant routes (defined in other components) use a trailing * in their path to indicate they match deeply
You may put your routes in whatever order you wish and the router will automatically detect the best route for the current URL. This prevents bugs due to manually putting routes in the wrong order in a `<Switch>`

- In React Router v6 we switched from using v5's `<Route component>` and `<Route render>` APIs to `<Route element>`. in V5 React did not provide any way for us to get the information from the `<Route>` to your route element, so we had to invent clever ways to get both the route data and your own custom props through to your elements: component, render props, passProps higher-order-components ... until hooks came along!


<!-- Old information for V5
## Route Components props

The Route components have three route props

* [match](https://reactrouter.com/web/api/match): A match object contains information about how a `<Route path>` matched the URL. match objects contain the following properties:

  * params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
  * isExact - (boolean) true if the entire URL was matched (no trailing characters)
  * path - (string) The path pattern used to match. Useful for building nested `<Route>s`
  * url - (string) The matched portion of the URL. Useful for building nested `<Link>s`
* [location](https://reactrouter.com/web/api/location): Locations represent where the app is now, where you want it to go, or even where it was.
* [history](https://reactrouter.com/web/api/history): history objects typically have the following properties and methods:
  * length - (number) The number of entries in the history stack
  * action - (string) The current action (PUSH, REPLACE, or POP)
  * location - (object) The current location. May have the following properties:
    * pathname - (string) The path of the URL
    * search - (string) The URL query string
    * hash - (string) The URL hash fragment
    * state - (object) location-specific state that was provided to e.g. push(path, state) when this location was pushed onto the stack. Only available in browser and memory history.
  * push(path, [state]) - (function) Pushes a new entry onto the history stack
  * replace(path, [state]) - (function) Replaces the current entry on the history stack
  * go(n) - (function) Moves the pointer in the history stack by n entries
  * goBack() - (function) Equivalent to go(-1)
  * goForward() - (function) Equivalent to go(1)
  * block(prompt) - (function) Prevents navigation (see the history docs)
-->


### Example 2: Create a BootStrap Navbar with React Router

Unless you are some CSS guru, you could end up spending countless hours tinkering around to make your NavBar responsive across different devices. One quick solution that I have found very effective is the use of the front-end framework React Bootstrap. In the next example, we will show you how I took advantage of this framework when building web apps.

We are going to create a `AppRouter.js` file where we are going to create a Navigation component.
First we need to make sure to add react-bootstrap to the project node modules.

```JSX
npm install react-bootstrap bootstrap
```

At the top of your index.js file you'll want to include the following:

```JSX
import 'bootstrap/dist/css/bootstrap.min.css'; // without this the navbar won't look right (or work :) )
```
At the top of your AppRouter.js file you'll want to include the following: 
```JSX 
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
```

### React Navbar

A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more

Here’s what you need to know before getting started with the Navbar:

* Use the `expand` prop to allow for collapsing the Navbar at lower breakpoints.
* `Navbars` and their contents are fluid by default. Use optional containers to limit their horizontal width.
* Use spacing and flex utilities to size and position content
* A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.

```JSX
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
```

Now let’s talk a little bit about the components and some of the key props we used here. The Nav and Nav.Link components are pretty straight forward. The `Navbar.Toggle`, and `Navbar.Collapse` components that we wrapped around our Nav component, will collapse and expand our Nav content behind a button, when we are viewing the page in a small screen. 

<table style="border: none">
    <tr align="center">
        <td><img src="images/Bootstrap-Navigation-Collapse.png" alt="Clone, Pull and Push" width="80%"> </td>

</tr>
</table>

In our Navbar component, the fixed=’top’ prop will position our NavBar affixed at the very top and make it scroll with the page. The `collapseOnSelect` prop *will make the Navbar collapse automatically once the user selects an item from our Nav list (when the page is being viewed in a small screen).*

With the Navigation component all configured, we can import it and have it rendered by our App component.

In your `AppRouter.js` file, we’ll need to import the `Navbar, Nav, and Container` components form our `React Bootstrap library`.

Then we’ll use these components in the return statement of our Navigation component.

```JSX
In AppRouter.js
import { Navbar, Nav, Container } 
from 'react-bootstrap';
```

### Setup a 404 Page in your Router

#### What is a 404 page?

A 404 page is also called not found page it means when a user navigates to the wrong path that doesn’t present in the website we need to show the not found page.

let’s create a Not found component.

```JSX

NotFound.js

import React from "react";
import errorPage from "../Images/errorPage.jpeg";
import "../App.css";

const NotFound = () => (
  <div>
    <h2>404 error: Page not found</h2>
    <div>
      <img className="imgStyle" src={errorPage} alt={"404 error"} />
    </div>
  </div>
);
export {NotFound};
```

```JSX
AppRouter.js

 <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Panda" element={<PandaPic />} />
        <Route path="/SeeTurtle" element={<SeaTurtle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
```

Let’s check it now by manually entering wrong path localhost:3000/posts.

### Pass additional data while redirecting to a route in React

Normally we use the Link component from react-router-dom as shown below:

```JSX
<Link to="/register">Register</Link>
```

So when we click on the Register link, it will redirect to the /register route, but Link also allows us to pass additional data while redirecting.

#### **Pass `<Link>` state as separate prop** ####
The Link component in v6 accepts state as a separate prop instead of receiving it as part of the object passed to so you'll need to update your Link components if they are using state:

```JSX
import { Link } from "react-router-dom";


<Link to="/home" state={state} />
```
The state value is still retrieved in the linked component using `useLocation()`

```JSX
function Home() {
  const location = useLocation();
  const state = location.state;
  return <div>Home</div>;
}
```
## React Route's Hooks ##
React Router’s `useNavigate()`, `useParams()` and `useLocation()` hooks provide useful capabilities for accessing routing-related functionality in our React components, including navigating to different routes, accessing route parameters, and accessing the location object.

Though these are some of the main hooks one may use in their React app, React Router provides many other hooks that provide other functionalities as well.


### useNaigate() hook ###

The `useNavigate` hook returns a function that lets you navigate programmatically,

```JSX
 let navigate = useNavigate();


 const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate("/details", { state },
    );
  };
```

The navigate function has two signatures:

- Either pass a `To` value (same type as `<Link to>`) with an optional second `{ replace, state }` arg or
- Pass the delta you want to go in the history stack. For example, `navigate(-1)` is equivalent to hitting the back button.
- If using `replace: true`, the navigation *will replace the current entry in the history stack instead of adding a new one*.

### useLocation() hook ### 
This hook returns the current `location` object. This can be useful if you'd like to perform some side effect whenever the current location changes. Also, you can use to retrieve the state value sent woth the linked component.

``` JSX
const location = useLocation();
const { username, email, city, phone } =  location.state;
```

### usePrams() hook ###

The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `<Route path>`. Child routes inherit all params from their parent routes.

```JSX
import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
  );
}
```


<!-- V5
***For our app we did:***

```JSX
<Link to={{ 
 pathname: "/register", 
 state: data_you_need_to_pass 
}}>
 Register
</Link>
```

Here, at the place of data_you_need_to_pass, we can pass a string or object, array etc. and in the `/register` route we will get that data in `props.location.state`.
Instead of naming the variable as state, we can use any name but it’s generally called state.

***Using history.push***
Normally, to redirect using the push method, we use it like this:

```JSX
props.history.push('/register');
```

If you need to do some processing before sending the data like removing some values or to trim the values, we can call a handler on submit button click and pass data as shown below

```JSX
props.history.push({ 
 pathname: '/register',
 state: data_you_need_to_pass
});
```
-->
<!-- 
### <NAVLINK> Navigation (or Route Changers)<Redirect>

* React Router provides a `<Link>` component to create links in your application. Wherever you render a `<Link>`, an anchor `(<a>)` will be rendered in your HTML document.`<Link to="/">Home</Link>`
// <a href="/">Home</a>

* The `<NavLink>` is a special type of `<Link>` that can style itself as “active” when its to prop matches the current location.
  
``` JSX

<NavLink to="/react" activeClassName="hurray">
React
</NavLink>
```

When the URL is /react, this renders:
`<a href="/react" className="hurray">React</a>`

 When it's something else:
`<a href="/react">React</a>`
-->

### *Now let's put all together and check our Full Code example [here](https://github.com/tnt-summer-academy/Curriculum-2023/tree/main/Week%203/Samples/react-route-navbar)*

## Class components for React Route ##

You can still use React Router v6 with class components. However, React Router v6 primarily promotes the usage of functional components and hooks.

In functional components, you can use the `useNavigate` hook to access the navigation functionality. For class components, you can achieve similar functionality using the `history` object provided by the `withRouter` higher-order component (HOC) from the `react-router-dom` package.

```JSX
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UserForm extends Component {
  // ... component code ...

  render() {
    // ... render method code ...
  }
}

export default withRouter(UserForm);
```

Here's the updated code in the form of a class component:

```JSX
UserForm.js

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class UserForm extends Component {
  state = {
    username: "",
    email: "",
    city: "",
    phone: "",
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push("/details", { state: this.state });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Registration Form</h1>

          <Form className="register-form" onSubmit={this.handleOnSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                name="phone"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(UserForm);

```
By wrapping the UserForm component with the `withRouter` HOC, it will have access to the `history, location, and match` props provided by `React Router`, even though it's a class component.

```JSX
Details.js

import React from "react";
import { Container } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";

class Details extends React.Component {
  handleGoBack = () => {
    const { history, location } = this.props;
    history.push("/", { state: location.state });
  };

  render() {
    const { username, email, city, phone } = this.props.location.state;

    return (
      <div>
        <Container>
          <NavLink to="/" activeClassName="active" end>
            Go Back
          </NavLink>
          <div className="form-details">
            <div>
              <strong>Username:</strong> {username}
            </div>
            <div>
              <strong>Email:</strong> {email}
            </div>
            <div>
              <strong>City:</strong> {city}
            </div>
            <div>
              <strong>Phone:</strong> {phone}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Details);

```

- The Details component is now a subclass of React.Component.
- The handleGoBack function is defined as an instance method using the class syntax.
- The render method is used to return the JSX markup.
- this.props is used to access the history and location props.
- The NavLink component uses the end prop to specify the exact matching behavior.
- The withRouter HOC is used to inject the history and location props into the Details component.
* Ensure you have the necessary imports (withRouter from react-router-dom) and that your project is properly configured to support class components and React Router v6.


## Exercise [1 hour]

Now that you’ve explored React Router and it’s capabilities, it’s time to start building your own React applications.
In your small group of  five persons. Apply what you've learned today and complete the Navigation for yourShare app using React Router.

## Stretch

In you can check out [these React Router examples](https://github.com/remix-run/react-router/tree/dev/examples) and in your small group discuss the code and see how it can be useful to your prototype app.
