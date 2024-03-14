
# Stretch: Recoil

## Week 5

## Learning objectives

* TNTs will understand why we need Recoil
* TNTs will learn what Recoil is
* TNTs will learn about state management in a React app
* TNTs will experiment with Recoil

## Time required and pace

* [10 Minutes]: Review of component state
* [10 Minutes]: Why do we need Recoil?
* [30 Minutes]: Recoil, atom, selectors and Recoil hooks
* [5 Minutes]: Getting the code and setting up
* [10 minutes]: Example 1 - Number of characters in an input string
* [30 Minutes]: Example 2 - Todolist with filter and stats 
* [Remainder of the time]: Use React Router in your own app and get help
  
## References

* <a href="https://react.dev/learn/state-a-components-memory" target="_blank">React State </a>
* <a href="https://recoiljs.org/docs/introduction/core-concepts" target="_blank">Recoil Documentation</a>
* [Recoil for beginners](https://youtu.be/tMQaxZl_MqY)

## Code

The code for this session is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/recoil-todo-javascript)

## Installation

* Get the code 
* Be sure to be in the correct directory
* ```npm install```
* Install Recoil by using, ```npm install recoil```

## Why do we need Recoil?
When building applications with React, understanding how data flows between components is crucial. Let’s break down the key concepts:

1. Props and Components:
    - React components accept **props**, which are like inputs or parameters.
    - These props are read-only and are passed from a parent component to its children.
    - Components return React elements (UI components) to be displayed on the screen.

2. States and Dynamic Rendering:
    - Components can also have an optional feature called **state**
    - State allows components to manage dynamic data that can change over time.
    - For example, a button component might have a state to track whether it’s clicked or not.
    - In **functional components**, you can add state using a state hook (like `useState`).

3. Sharing State  Challenges:
    - When you need to share state between multiple components, things get interesting.
    - The official React documentation suggests lifting state up to a common ancestor component.
    - This means sharing a piece of state by moving it higher in the <a href="https://react.dev/learn/understanding-your-ui-as-a-tree" target="_blank">component tree.</a>
    - [test](https://react.dev/learn/understanding-your-ui-as-a-tree:target_blank)
    - The state is then passed down as props to child components.
    - However, this approach can lead to code maintenance challenges and unnecessary re-rendering.

4. Enter Recoil:
    - Recoil is a state management solution specifically designed for React.
    - It provides a more efficient way to manage state.
    - Unlike some other solutions (like Redux), Recoil allows you to manage state at a more granular level.
    - It optimizes re-rendering by only updating components that depend on the changed state.
    - Think of it as a scalable solution for sharing state across different parts of your application.

<br>

> **NOTE:** Neither Redux nor Recoil are official React libraries.

### Recoil

Recoil is a state management library for React. It defines a directed graph (graph in which each connection has a clear direction) that is orthogonal (at 90 degrees) to but also intrinsic and attached to your <a href="https://react.dev/learn/understanding-your-ui-as-a-tree" target="_blank">React tree.</a>. 

State changes flow from the roots of this graph: **Atoms**, through pure functions (function whose output solely depends on its input): ***Selectors***, and into components. 

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoilvisualization.png)

Source: <a href="https://dev.to/coleredfearn/atomos-a-new-recoil-visualization-tool-powered-by-react-flow-4b6l" target="_blank"> Atomos - A New Recoil Visualization Tool Powered by React Flow</a> 

Components that use Recoil state need `<RecoilRoot>` to appear somewhere in the parent tree. 

```JSX
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
```

### Atoms
  
#### What is an Atom?

* Atoms are **units /pieces of state**. They are updatable and subscribable. They can be used in place of React local component state. If an Atom is used from multiple components, all those components share the state

* Atoms can be read from and written to from any component. Components that read the value of an Atom automatically subscribe to the Atom.

* When an atom is updated, each subscribed component is rendered with the new value.

#### Creating an Atom

* Atoms are created with the **atom** function. They have:
  * a unique **key** 
  * a **default** value

#### Using an Atom

* To read or write an atom from a component, we use a hook called **useRecoilState**. As useState, useRecoilState returns the state and a function to update it.

#### Example

```JSX
const ourAtom = atom({
  key: 'uniqueKey', // Unique identifier for the atom
  default: 1, // Initial value
});
```

### Selector

#### What is a Selector?

* A selector is a **pure function** that accepts atoms or other selectors as input and **calculates derived data that is based on state**.  A selector transforms a state.
* When these upstream atoms or selectors are updated, the selector function will be re-evaluated and the dependent components re-rendered. 
  * This lets us avoid redundant state because a minimal set of state is stored in atoms, while everything else is efficiently computed as a function of that minimal state. 
* Components can subscribe to selectors just like atoms and will then be re-rendered when the selectors change.

#### Creating a Selector

* Selectors need a **unique key**.
* They have a property called **get** that is the function that is to be computed.
  * The **get argument passed** to the get function permits to access the values of atoms and other selectors.
* When using another atom as a parameter, a dependency relationship is created such that updating the other atom or selector will cause this one to be recomputed.

#### Using the selector

* Selectors can be read using **useRecoilValue()** which takes an atom or selector as an argument and returns the corresponding value

#### Example

```JSX
const ourSelector = selector({
  key: 'uniqueKey', // unique identifier for selector
  get: ({get}) => { // get is the function to be computeed
    const value = get(ourAtom)
    return value; // return that is solely determined by input
  },
});
```

### Summary

* **useRecoilState(state)**
  * State can be an atom or a **_writeable_** selector
  * Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state.
  * Subscribes the component to the given state.
* **useRecoilValue(state)**
  * State can be an atom or selector
  * Returns the **value** of the given state.
  * Subscribes the component to the given state.
* **useSetRecoilState(state)**
  * State is an atom or a _writeable_ selector 
  * Returns a setter function for updating the value of writeable Recoil state.  

> **NOTE:** `useRecoilValue()` only allows you to read the State value. <br>To Read and Write the state use `useRecoilState()` or `useSetRecoilState()`. If using a selector ensure it is writable before using these functions.



* More on the <a href="https://recoiljs.org/docs/api-reference/core/RecoilRoot" target="_blank">Recoil API</a>

## Example 1 - Number of characters in an input string

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

## Example 2 - Todolist with filter and stats 

The code is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/recoil-todo-javascript)

We will build this app:

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoiltodolist.png)

The component decomposition is depicted here:

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoiltodolistscomponents.png)

Atoms and Selectors are depicted here:

![](https://github.com/tnt-summer-academy/Curriculum/blob/main/Stretch%20topics/recoil/recoiltodolistatomselector.png)
