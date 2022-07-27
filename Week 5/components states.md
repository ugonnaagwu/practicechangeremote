
# Week 5 - Review Session (with Some Stretch)

# Components, States and Solutions for State Management

## Learning objectives

* TNTs will review class and function components
* TNTs will review states and state hooks
* TNTs will learn about state management in a React app
* TNTs will understand why we need a more general solution to manage states
* TNTs will learn what Recoil is
* TNTs will experiment with Recoil
* TNTs will learn about other solutions and how they compare to Recoil

**Warning** You are encouraged to learn about state management with Recoil, Redux or Context, but you may not have the time to implement these solutions in your app prototype.

## Time required and pace

2 hours

* [10 Minutes]: Review of class and function components
* [20 Minutes]: Review of states and state hooks 
* [5 Minutes]: More general solutions for state management
* [30 Minutes]: Recoil, atom, selectors and Recoil hooks
* [5 Minutes]: Getting the demo code and setting up
* [10 minutes]: Example 1 - Number of characters in an input string
* [20 Minutes]: Example 2 - Todolist with filter and stats 
* [10 Minutes]: Other solutions - React Redux and Context, comparison
* [Remainder of the time]: Apply the knowledge in your own app
  
## References

* [React components](https://reactjs.org/docs/components-and-props.html)
* [React State](https://reactjs.org/docs/faq-state.html)
* [Recoil](https://recoiljs.org)
* [Recoil for beginners](https://youtu.be/tMQaxZl_MqY)
* [Redux basic tutorial](https://redux.js.org/basics/basic-tutorial)
* [Videos on React with Redux - Parts 1 to 11](https://www.youtube.com/watch?v=DiLVAXlVYR0)
* [React Context](https://reactjs.org/docs/context.html)

## Class and Function Components

A component is an object that returns a Javascript XML Element (JSX Element) which is rendered on the screen. Components are the building blocks of a React App, independent and reusable, much like HTML elements are for web pages.

Key components ideas:
- Stateless / Stateful Components
- Component Data: _Properties_ (props), _State_, _Children_
- Types of Components: _Class vs. Function_
- Component Lifecycle Methods

### Class components

Class components are called **stateful** components.

1. Render (required): This method returns the JSX element to be displayed by the class. It runs whenever the component's view updates.
2. Properties (optional): They are arguments passed into the component from its parent components. They cannot be changed by the component.
3. State (optional): It only exists within the component. Changing it causes the component to update and render. The state of a component saves different information about that component. 
4. Children (optional): Components nested inside the parent's JSX tags.
5. Besides _render()_, class can include a constructor, lifecycle method calls and other additional methods.

```
class Hello extends React.Component {
   render() {
      return (<div>Hello World</div>)
   }
}
```

Usage: `<Hello></Hello>` or `<Hello />`

### Function components

Function components are called **stateless** components.

1. Originally simple, stateless components; expected to return the JSX element to be displayed.
2. Properties (optional): These arguments are passed in from the component's parent similarly to passing parameters to a function. They cannot be changed in the component.
3. UseState: A hook function that permits to provide a state to a function component. It returns a state variable, giving function components a way to manipulate a state the way class components do.

**Standard Function Syntax**

    function Hello() {

        return <div>Hello World</div>

    }

Usage: `<Hello></Hello>` or `<Hello />`

**Lambda Function (Arrow Function) Syntax**

    let Hello = () => <div>Hello World</div>

Usage: `<Hello></Hello>` or `<Hello />`

**When to use class or function components?**

**Is the use of function components the new standard?**

## Props and Children

In the code below, 

- name is a **props** of Room
- Room, CounterClass and CounterLambda components are **children** of House

```
     <House>
        <Room name="Bedroom"></Room>
        <Room name="Living room"></Room>
        <Room name="Kitchen"></Room>
        <CounterClass></CounterClass>
        <CounterLambda></CounterLambda>
      </House>
```

For Room to display its props called name, we use **props.name** withing a `<div>` tag and with _{}_. 

```
let Room = (props) => (
  <div>
    <div>{props.name}</div>
    <div>{props.children}</div>
  </div>
);
```

For House to render its children (whose number and types vary), we need to use **props.children** within a `<div>` tag and with _{}_. 

```
let House = (props) => <div>{props.children}</div>;
```

If we would like the state of a component to be passed to a child, we will need to add the state as a props in the parent.

## Class Components and States 

Review of the counter example: _CounterClass_.

Things to review in the code below:
- Use of a constructor where the state is defined and initialized
- Declaration of the state with an object literal
- Required _render_ function (instance function/method)
- Function increase defined in the class (instance function/method) 
- Function increased called with _this.increase_
- Access to the state with _this.state_
- Display the state with _{this.state.count}_ (_{}_ are required)
- Use of _setState_ with a lambda function to change the state (required). _setState_ will trigger the rendering of the component

```
import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = () => {
    console.log("increase - class version");
    this.setState((state, props) => ({ count: this.state.count + 1 }));
  };

  render() {
    return (
      <div>
        <div>Counter - Number of visits (class version)</div>
        <div>{this.state.count}</div>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default CounterClass;
```

## Function Components and State Hooks

A **Hook** is a special function that lets you “hook into” React features. For example, **useState** is a Hook that lets you add React state to function components. 

If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. 

**useState** returns a pair represented by an array of size 2, composed of the current state and a function that updates it. This is called array destructuring.

In a program, we can use several useState hooks. useState hooks are defined at the top of the function. They cannot be in a loop or if statement.

Review of the counter example: _CounterLambda_.

Things to review in the code below:
- Declaration of the _useState_ hook with _count_ as the state variable and _setCount_ as the function to update the state. _count_ is initialized with _0_
- _useState_ and _increase_ are inside _{}_ in the lambda function
- Need to use _return_ to render the component
- Display the counter with _{count}_ (_{}_ are required)
- Function increase defined in the function 
- Function increased called with _increase_ only (no use of _this_)
- Use of _setCount_ with arguments to change the state. _setCount_ will trigger the rendering of the component

```
import React, { useState } from "react";

let CounterLambda = () => {
  const [count, setCount] = useState(0);

  let increase = () => setCount(count + 1);

  return (
    <div>
      <div>Counter - Number of visits (function version)</div>
      <div>{count}</div>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default CounterLambda;

```

### Comparing the 2 Implementations of Counter

[comparing components](https://github.com/tnt-summer-academy/Curriculum-2022/blob/main/Week%205/components_states_assets/functionclasscomponent.png)

## Why do we need more general solutions to deal with states?

React components accept arbitrary inputs called props and return React elements to be rendered on the screen. Props are read-only and passed from a parent to its children. Components may also have (optional) states. State allows React components to change their rendering over time in response to user actions, network responses or anything else. State comes automatically with class components and can be added to function components using a state hook. Only the component itself can access its own state. To share states between components, the official React documentation says you need to share a piece of the state and lift it up a component that is above in the tree hierarchy and the state will be passed as props to children. This solution however comes with issues linked with maintaining the code and efficiency in terms of unnecessary re-rendering. When you need to share the state or part of it with multiple components, you need to have a scalable solution. 

Recoil is a state management solution. There are others. For example, redux provides a global state to the entire application. Recoil is more efficient in that it optimize re-rendering. It is important to note that neither Redux nor Recoil are official React libraries.

## Recoil

### Code

The code for this session is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/recoil-todo-javascript)

### Installation

* Get the code 
* Be sure to be in the correct directory
* ```npm install```
* Install Recoil by using, ```npm install recoil```

### What is Recoil?

Recoil is a state management library for React. It defines a directed graph orthogonal to but also intrinsic and attached to your React tree. State changes flow from the roots of this graph (which we call atoms) through pure functions (which we call selectors) and into components. 

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoilvisualization.png)

Source: https://dev.to/coleredfearn/atomos-a-new-recoil-visualization-tool-powered-by-react-flow-4b6l 

Components that use Recoil state need `<RecoilRoot>` to appear somewhere in the parent tree. 

```JSX
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
```

#### Atoms
  
##### What is an Atom?

* Atoms are **units /pieces of state**. They are updatable and subscribable. They can be used in place of React local component state. If an Atom is used from multiple components, all those components share the state

* Atoms can be read from and written to from any component. Components that read the value of an Atom automatically subscribe to the Atom.

* When an atom is updated, each subscribed component is rendered with the new value.

##### Create an Atom

* Atoms are created with the **atom** function. They have:
  * a unique **key** 
  * a **default** value

##### Using an Atom

* To read or write an atom from a component, we use a hook called **useRecoilState**. As useState, useRecoilState returns the state and a function to update it.

#### Selector

##### What is a Selector?

* A selector is a **pure function** that accepts atoms or other selectors as input and **calculates derived data that is based on state**.  A selector transforms a state.
* When these upstream atoms or selectors are updated, the selector function will be re-evaluated and the dependent components re-rendered. This lets us avoid redundant state because a minimal set of state is stored in atoms, while everything else is efficiently computed as a function of that minimal state. 
* Components can subscribe to selectors just like atoms and will then be re-rendered when the selectors change.

##### Create a Selector?

* Selectors need a **unique key**.
* They have a property called **get** that is the function that is to be computed.
  * The **get argument passed** to the get function permits to access the values of atoms and other selectors.
* When using another atom as a parameter, a dependency relationship is created such that updating the other atom or selector will cause this one to be recomputed.

##### Using the selector

* Selectors can be read using **useRecoilValue()** which takes an atom or selector as an argument and returns the corresponding value

#### Summary

* **useRecoilState(state)**
  * state can be an atom or a _writeable_ selector
  * Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state.
  * Subscribes the component to the given state.
* **useRecoilValue(state)**
  * state can be an atom or selector
  * Returns the value of the given state.
  * Subscribes the component to the given state.
* **useSetRecoilState(state)**
  * state is an atom or a _writeable_ selector 
  * Returns a setter function for updating the value of writeable Recoil state.  

* More on the [Recoil AP]I(https://recoiljs.org/docs/api-reference/core/RecoilRoot)

### Example 1 - Number of characters in an input string

The code is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/recoil-todo-javascript)

We will build this app:

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoilcharactercount.png)

The component decomposition is depicted here: 

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoilcharactercountcomponents.png)

The code below shows how to create and use Recoil Atoms and Selectors.

**Create the textState Atom to define the state**

```
  const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value) of textState
  });
```

**Use the textState Atom**

```
  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChangeText = (event) => {
      setText(event.target.value);
    };
```

**Create the charCountState Selector that returns the length of the input text in the state**

```
    const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(textState);
      return text.length;
    },
  });
```

**Use the charCountState Selector**

```
  function CharacterCount() {
    const count = useRecoilValue(charCountState);
    return (
      <div>
        Character Count: {count}
      </div>
    )
  }
```

### Example 2 - Todolist with filter and stats 

The code is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/recoil-todo-javascript)

We will build this app:

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoiltodolist.png)

The component decomposition is depicted here:

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoiltodolistscomponents.png)

Atoms and Selectors are depicted here:

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoiltodolistatomselector.png)

## Are there other solutions?

### Redux

### Context

### Comparing Recoil / Redux and Context
