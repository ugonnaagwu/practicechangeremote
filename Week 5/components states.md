
# Components, States and More

# Week 5 - Stretch Session 

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

* [React State](https://reactjs.org/docs/faq-state.html)
* [Recoil](https://recoiljs.org)
* [Recoil for beginners](https://youtu.be/tMQaxZl_MqY)

## Code

The code for this session is available [here](https://github.com/tnt-summer-academy/Samples/tree/main/Stretch/recoil-todo-javascript)

## Installation

* Get the code 
* Be sure to be in the correct directory
* ```npm install```
* Install Recoil by using, ```npm install recoil```

## Why do we need Recoil?

React components accept arbitrary inputs called props and return React elements to be rendered on the screen. Props are read-only and passed from a parent to its children. Components may also have (optional) states. State allows React components to change their rendering over time in response to user actions, network responses or anything else. State comes automatically with class components and can be added to function components using a state hook. Only the component itself can access its own state. To share states between components, the official React documentation says you need to share a piece of the state and lift it up a component that is above in the tree hierarchy and the state will be passed as props to children. This solution however comes with issues linked with maintaining the code and efficiency in terms of unnecessary re-rendering. When you need to share the state or part of it with multiple components, you need to have a scalable solution. 

Recoil is a state management solution. There are others. For example, redux provides a global state to the entire application. Recoil is more efficient in that it optimize re-rendering. It is important to note that neither Redux nor Recoil are official React libraries.

### Recoil

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

### Atoms
  
#### What is an Atom?

* Atoms are **units /pieces of state**. They are updatable and subscribable. They can be used in place of React local component state. If an Atom is used from multiple components, all those components share the state

* Atoms can be read from and written to from any component. Components that read the value of an Atom automatically subscribe to the Atom.

* When an atom is updated, each subscribed component is rendered with the new value.

#### Create an Atom

* Atoms are created with the **atom** function. They have:
  * a unique **key** 
  * a **default** value

#### Using an Atom

* To read or write an atom from a component, we use a hook called **useRecoilState**. As useState, useRecoilState returns the state and a function to update it.

### Selector

#### What is a Selector?

* A selector is a **pure function** that accepts atoms or other selectors as input and **calculates derived data that is based on state**.  A selector transforms a state.
* When these upstream atoms or selectors are updated, the selector function will be re-evaluated and the dependent components re-rendered. This lets us avoid redundant state because a minimal set of state is stored in atoms, while everything else is efficiently computed as a function of that minimal state. 
* Components can subscribe to selectors just like atoms and will then be re-rendered when the selectors change.

#### Create a Selector?

* Selectors need a **unique key**.
* They have a property called **get** that is the function that is to be computed.
  * The **get argument passed** to the get function permits to access the values of atoms and other selectors.
* When using another atom as a parameter, a dependency relationship is created such that updating the other atom or selector will cause this one to be recomputed.

#### Using the selector

* Selectors can be read using **useRecoilValue()** which takes an atom or selector as an argument and returns the corresponding value

### Summary

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