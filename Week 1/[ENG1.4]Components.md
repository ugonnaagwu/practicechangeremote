# Components

## Week 1, Lesson 5

This lesson explores the purpose of a React component, how a component works and how its methods function

## Learning objectives

- TNTs will be able to describe the purpose of a React component
- TNTs will understand how a component's key methods function
- TNTs will practice conceptualizing components and their structure

## Time required and pace

Total time: 1 hour

- 60 minutes - **Instructional Session - Discussion and Lecture**
  - 10 minutes - Discuss component types
  - 10 minutes – Review basic component's ideas
  - 10 minutes – Explain component's lifecycle
  - 15 minutes - Components discussion in groups
  - 15 minutes - Components discussion as a class

## Session Details (60 minutes)

### Component Description (10 minutes)

At its simplest, a component is an object that returns a Javascript XML Element (JSX Element) which is rendered on the screen. Components are the building blocks of a React App, independent and reusable, much like HTML elements are for web pages.

#### Key Component Ideas

- Stateless Components
- Component Data: _Properties_, _State_, _Children_
- Types of Components: _Class vs. Function_
- Component Lifecycle Methods

### Component Types (10 minutes)

- Class components
- Function components

#### Class Component

1. Render (required): This method returns the JSX element to be displayed by the class. It runs whenever the component's view updates.
2. Properties (optional): They are arguments passed into the component from its parent components. They cannot be changed by the component.
3. State (optional): They only exist within the components. Changing them causes the component to update.
4. Children (optional): Components nested inside the parent's JSX tags
5. Besides _render()_, class can include a constructor, lifecycle method calls and other additional methods.

#### Class Component Example

     class Tile extends React.Component {

        render() {
            return ( <div>Hello World</div>)
        }
      }


#### Stateful Component With Props and Common Lifecycle Method

     class Tile extends React.Component {

          //this is called first (1)
          constructor(props) {
              super(props)
              this.state = {
                  size: props.width * props.height
              }
          }
          
          //DO NOT USE THIS, IT HAS BEEN DEPRECATED AND UNSAFE
          //when it existed, this was called second (2)
          componentWillMount() {
              //do stuff here before component is mounted in DOM tree
          }
          
          //this is called fourth (4)
          componentDidMount() {
              //Do stuff here after component is mounted in DOM tree
          }
          
          //this is called sixth (6)
          componentDidUpdate() {
              //Do stuff here after component state has changed in DOM tree
              //Ex: this.setState({size: 0})
          }
          
          //this is called eight (8)
          componentWillUnmount() {
              //Do stuff here after component is unmounted
              //Could be cleanup or service calls
              //Ex: log("User destroyed the tile. Maybe it's alive somewhere else")
              //Ex: this.database.tileDestroyed(userId, Date.now())
          }

          //during first pass this is called third (3)
          //during second pass (after componentDidMount), it is called fifth (5)
          //after an update, this is called seventh (7)
          render() {
              return ( <div>This is tile {this.props.name} with ID {this.props.id} of size {this.state.size} </div>)
          }
      }

#### Rendering Other Components in a Component

    import React, { Component } from "react"
    import { Header } from "./Header"
    import { PhotoGrid } from "./PhotoGrid"

    //assume each import is a separate component that was built

    class HomePage extends React.Component {

        render() {
            return (
                <div id="home-page-container">
                  <Header/>
                  <PhotoGrid numberOfPhotos={5} />
                </div>
            )
        }
     }




#### Function Component

1. Originally simple, stateless components; expected to return the JSX element to be displayed.
2. Properties (optional): These arguments are passed in from the component's parent similarly to passing parameters to a function. They cannot be changed in the component.
3. UseState: A hook function that returns a state variable, giving function components a way to manipulate a state the way class components do.

#### Function Components Examples (two common syntax)

##### A. Standard Function Syntax

    function App(props) {

        return <div><h1>My App</h1> <Tile/></div>

    }

##### B. Lambda Function (Arrow Function) Syntax

    let App = (props) => <div><h1>My App</h1> <Tile/></div>

### LifeCycle Methods (10 minutes)

These are methods that are triggered through out a components existence from when they're constructed to when they are dismissed.

[Life Cycle Diagram](https://github.com/tnt-summer-academy/Curriculum/blob/main/Week%201/images/Lifecycle-methods.png)

[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Session Discussion (30 minutes | 15 minutes in groups, 15 minutes as a class)

In your team channels, discuss the following; be prepared to share an insight or example with the class. Keep in mind the following:

- Investigate a couple of websites you use regularly; be prepared to share some good candidates for Views and Components that you identified in the websites.

- Think about examples from your experience where you have built up a larger thing from smaller pieces. Can you make an analogy that reflects a stateless Component? a stateful Component? a reusable Component?

- As a group, imagine your daily schedule and activities as a set of components, e.g., Wake up, Exercise, Breakfast, .... Group the schedule under the following areas to present:
  - **Stateless** and **stateful** components
  - Component **properties** vs. **state**
  - **Re-usable** components
  - Components made up of other components (**composition**)

### Stretch Exercise Setup - MyTNT App (15 minutes)

- Identify components and composition: Tile, Card, Item in the [MyTNT App](https://github.com/tnt-summer-academy/Exercises/tree/main/Week_2/ENG2.1-myTNT) layout

![completed MyTNT App layout](https://github.com/tnt-summer-academy/Curriculum/blob/main/Week%201/MyTNT-component-model.png)

- Review GitHub process: Clone•Branch•Commit•Push•Pull Request

- Explore Code
  - Identify Function and Class Components, props, state, and children
  - Examine use of TypeScript Interfaces with Properties and State
  - Examine the use of the state value **count** in the _Counter_ component and **map** function
  - Review HTML/CSS including `<ul>`, `<li>` and `<a>` elements

## Stretch

- Use pair programming in Live Share to complete the [_My TNT_ Exercise](https://github.com/tnt-summer-academy/Exercises/tree/main/Week_2/ENG2.1-myTNT)
- Push your work to GitHub and submit a Pull Request (one per pair)

Continue coding on the _My TNT_ Exercise Stretch Goals (See Exercises)
Explore the purpose of React components, how to identify them and why they are used

## Resources

- Read ![this short chapter](https://leanpub.com/reactjsforthevisuallearner/read#leanpub-auto-chapter-2--what-is-react-and-why-is-it-cool) (Chapter 2) describing the way React uses Component to create website Views.
- ![Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging)
- ![VS Code Live Share Extension for Pair Programming](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
