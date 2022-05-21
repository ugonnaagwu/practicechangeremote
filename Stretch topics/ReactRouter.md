
# Stretch: More on React Router

## Week 5

React Router is a library of navigational components. It is a declarative way of implementing navigation. The way we implemented navigation from one page to the other in YourShare using a state and props was not standard; it was highly manual. It is particular important for single-page applications developed with React. React Router enables routing from one page component to the other. Routing is the ability of showing to the user different pages based on an url or by clicking on an element. React Router allows static and dynamic routing. 

* Static routing means that the routes are declared as part of the app initialization before any rendering takes place.
* Dynamic routing means that that routing takes place as the app is rendering, not outside the running app. More than one piece of dynamic data can be passed to determine the route. With dynamic routing, the app can know how to respond to any possible url.

React Router provides different routing components in the following categories: 

* Routers, like `<BrowserRouter>`, and `<HashRouter>`
* Navigation, like `<Link>`, `<NavLink>`, and `<Redirect>`
* Route matchers, like `<Route>`, and `<Switch>`

## Learning objectives

* TNTs will learn how to do multi-page navigation in React using React Router
* TNTs will experiment with dynamic routing 
* TNTs will learn how data can be passed from one page to the next one
* TNTs will learn about how React Router Hooks provide specific ways of handling the router state
* TNTs will put React Router to work 

## Time required and pace

* [10 Minutes]: Review of React Router and main components
* [10 Minutes]: React Router hooks 
* [30 Minutes]: Example 1 - Basic navigation and demo of the use of different hooks to handle routing
* [20 minutes]: Try it on your own
* [30 Minutes]: Example 2 - A shopping app using fake data from the Fake Store API 
* [20 minutes]: Try it on your own
* [Remainder of the time]: Use React Router in your own app and get help
  
## References

* [React Router quick Start](https://reactrouter.com/web/guides/quick-start)
* [React Router API](https://reactrouter.com/web/api/Hooks)
* [Using hooks with react router](https://blog.logrocket.com/using-hooks-with-react-router/)
* [Browser Router Vs. Hash Route](https://medium.com/@daniel.hramkov/browserrouter-vs-hashrouter-e8bf1c3824ce)
* [Bootstrap Navbar](https://react-bootstrap.github.io/components/navbar/)
* [Bootstrap Form](https://react-bootstrap.github.io/components/forms/)
* [fakeStoreApi](https://fakestoreapi.com/docs)

## Videos

* [React Router Introduction](https://www.youtube.com/watch?v=Law7wfdg_ls&t=1032s)
* [React Router Store Example](https://www.youtube.com/watch?time_continue=63&v=cKnc8gXn80Q&feature=emb_logo)

## Installation

* Be sure to be in the correct directory.
* ```npm install```
* Install react-router-dom in the app, ```npm install react-router-dom```
* As we will be using Bootstrap React, we will need to install react-bootstrap ```npm install react-bootstrap bootstrap@4.6.0``` 
* For fetching data online in the fakeStoreApi, we will need to install react-asyn ```npm install react-async --save``` 

## React Router

Implementing navigation goes through:
* Choosing a router
* Creating the routes
* Navigating between routes using links

### Router

In the code below, the router is `<BrowserRouter>`. `<BrowserRouter>` is used for an app that will respond to dynamic requests (any possible urls). `<HashRouter>` is used for static websites (predefined urls).

Router components can only have a single child element. So, we use the `<App>` component to render the remainder of the application.

### Routes
  
`<Route>` expects `path` as a prop. A route has 3 props that define what should be rendered: 
* `component` - renders a React component
* `render` - function that returns a React element. It is useful for inline rendering
* `children` - function that returns a React element and renders the children regardless whether the route's path matches the current location

In the code below, there are 6 routes. Some of them are static and other dynamic.

Here is a static route url:

```JSX
<Route path="/contact" exact component={DefaultContact} />
```

Based on this code, we will be able to go to the url: `localhost:3000/contact`.

Here are 2 dynamic route urls:

```JSX
<Route path="/about/:name" component={About} />
<Route path="/contact/:name/:city" component={Contact} />
```

In the dynamic routes, `/about` and `/contact` are the path and do not change. `:name` and `:city` change based on user's actions such as clicking a link or typing an input. They are `params` and can be accessed using `props.match.params.name` and `props.match.params.city`.

We will be able to use: `localhost:3000/about/John` or `localhost:3000/contact/John/NYC`. The fist route has one route parameter while the other one has two.

Here is a route defined using the `render` prop. All urls that do not match the routes will result in a 404 error message.

```JSX
<Route render={() => <h3>404: Page not found</h3>} />
```

```JSX
import { BrowserRouter as Router , Route, Switch, Link} from "react-router-dom" 
...
    <Container>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/about/${name}`}>About</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to={`/contact/${name}/${city}`}>Contact</Link>
          </li>
        </ul>
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:name" component={About} />
          <Route path="/contact" exact component={DefaultContact} />
          <Route path="/contact/:name/:city" component={Contact} />
          <Route path="/counter" component={Counter} />
          <Route render={() => <h3>404: Page not found</h3>} />
        </Switch>
      </Router >
    </Container>
```

### Switch

`<Switch>` is used to group routes. It will iterate over its `<Route>` children and render the one that matches the current pathname. We want to have only one route at a time. To restrict a match, we use the `exact` keyword.

If we consider the url `localhost:3000/contact` or `localhost:3000/contact/John`, the pathname `/contact` will match both. 
```JSX
<Route path="/contact" component={DefaultContact} />
<Route path="/contact/:name/:city" component={Contact} />
```

We need to use `exact` if we only want to match `/contact`.

```JSX
<Route path="/contact" component={DefaultContact} />
<Route path="/contact/:name/:city" component={Contact} />
```

### Links

Links tell the app how to navigate between pages. `<Link>` prevents from loading the whole page. It only loads what is specified in the link. It is different from using the anchor tag `<a>`. It updated the url and renders the appropriate page.

`<Link>` uses the prop `to` to describe the location to navigate to. 

In a navigation bar (`<Navbar>` in Bootstrap React), we use `<Nav.Link>` instead of `<Link>`.

### Redirect

`<Redirect>` navigates to a new location. The new location will override the current one in the history stake. `to` is used to redirect to a url.

About.js

```JSX
<Redirect to="/" />
```

### Match

A match object contains information about how a `<Route path>` matched the URL. match objects contain the following properties:

  * params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
  * isExact - (boolean) true if the entire URL was matched (no trailing characters)
  * path - (string) The path pattern used to match. Useful for building nested `<Route>s`
  * url - (string) The matched portion of the URL. Useful for building nested `<Link>s`

## React Router Hooks

* **useParams** - returns an object of key/value pairs of URL parameters. It is used to access `props.match.params` of the current `<Route>`.

params can also be accessed using `props.match.params.nameofparameter`.

In the code below, we display the value of `name` from the url `localhost:3000/about/John` when `name` is John.

App.js

```JSX
<Route path="/about/:name" component={About} />
```

About.js

```JSX
const About = (props) => (
  <Container>
    <h3>About is here</h3>
    Name: {props.match.params.name}
   </Container>
)  
```

or

```JSX
const About = (props) => {
const {name} = useParams();
return(
  <Container>
    <h3>About is here</h3>
    Name: {name}
  </Container>
)
}
```

* **useLocation** - returns the location object that represents the current url. 

In the code below, we display the value of the current url in the console. 

Contact.js

```JSX
const Contact = (props) => {
    const { pathname } = useLocation();
    
    return (
      <Container>
        <h3>Contact is here</h3>
        <div><em>Look at the url</em></div>
        <Button onClick={() => { console.log("We are at " + pathname); >Click me!</Button>
      )
```

* **useHistory** - provides access to the history instance that may be used to navigate. history refers to the browser history.

history objects have the following properties and methods:

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

In the code below, the state of the counter is passed to `Home` and the user is redirected to `Home`. In Home, we can now display the value related to the state. To do this, we need to use `props.location.state` or a `useHistory` hook.

Counter.js

```JSX
const Counter = (props) => {

    // Declare a new state state variable and the function to change the state
    // Destructuring
    const [count, setCount] = useState(0);
    const appHistory = useHistory();
    ...
    const goHome = () => {
        appHistory.push('/', count); 
    };
    ...

   return (
        <Container>
            ...
            <Button onClick={goHome}>Click me! </Button>
        </Container>
     )
}   
```

Home.js 

```JSX
const Home = (props) => {
  const count = useHistory();
 
  return (
    <Container>
      <h3>Home is here</h3>
      <div>Counter value is: { }
        {count.state}
      </div>
      <Container>
      )
}
```

### Example 1

This is a basic example that shows the components and the hooks in action.

The code is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/router-javascript-demo).

If you want to follow along the live demo, you can use the skeleton of the code [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/router-javascript-demo-skeleton).

### Example 2

This is a more comprehensive example `FabShop` that presents a store selling diverse items. The app permits to register, displays all the items of the store, provides detail information on each item, and presents the developers of the app.

The items from the store will be retrieved from [fakeStoreApi](https://fakestoreapi.com/).

The code is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/router-nav-demo).

In this example, you will be able to practice:

* how to use a `<Navbar>` and set up routes
* how to use the data of a form after submission in a new page
* how to use fakeStoreAPI to add some data 
* how to use dynamic routes to display detail information on an item

One thing to notice in the code of `FabShop` is the use of fakeStoreAPI. 

fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. Explore fakeStoreAPI.

For example, if you need to access 5 products, you use the following code:

```JSX
fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))
```

To use this in your component, you need to use `async` and `await`. `async` is used when you are accessing data from the web. `await` will wait for the end of the operation. However, the user will not be stopped and can use the app.

The JSon of an item is the following:

```JSX
                {
                    id:1,
                    title:'...',
                    price:'...',
                    category:'...',
                    description:'...',
                    image:'...'
                }
```

`useEffect` is used to execute an async function. It will executed only when the component mount ([] as a parameter).

```JSX
 const Shop = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => { fetchItems() }, []);
  
    const fetchItems = async () => {
      const data = await fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => res.json())
      console.log(data)
      setItems(data);
    }
    ...
 }
```
