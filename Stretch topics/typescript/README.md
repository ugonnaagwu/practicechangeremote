# Typescript vs. Javascript

The web is built on Javascript, but recently much of the web is being built using Typescript. This topic will discuss what Typescript is, how it compares to Javascript, and how to convert your Javascript code to Typescript.

## Learning objectives

* TNTs will learn about the fundamentals of Typescript.
* TNTs will learn how to integrate Typescript into a React app.
* TNTs will learn how to convert Javascript code to Typescript.

## Time required and pace

Total time: 1 hour

* 10 minutes - explain: Typescript fundamentals
* 20 minutes - elaborate: how to start a React app with Typescript from scratch
* 20 minutes - elaborate: how to convert existing Javascript code to Typescript
* 10 minutes - evaluate: Experiment and practice on your own

## Typescript Fundamentals

### What is Typescript?

Typescript is a superset language based on Javascript. This means that Javascript code *can* be run and executed within a Typescript compiler (with some caveats) but not the other way around. For example, if you configure things correctly and simply rename a file from `.js` to `.ts` (or `.jsx` to `.tsx`), it will run just like before. You can thing of Typescript as a language that builds upon Javascript and provides more structure and functionality that previously wasn't present.

### What are some key differences?

#### Typing

As you may notice in Javascript, the language follows the duck-typing paradigm. If it walks like a duck, quacks like a duck, then for all intents and purposes we treat it like a duck. In code, this translates to `var myNumber = 44` being assigned as a number implicitly (keyword: *implicit*). However, if we do something like `console.log(myNumber)`, then as long `myNumber` can be treated like a `string`, it's a `string`. Now most languages, even some strong-typed languages can usually handle this simple conversion without any extra work. Where we may get into tricky territory is when logic is involved. In this example snippet, see if you can predict what will happen:

```js
    var myArray = [1,2,3,4,5];
    const shift = 10;
    const sumShift = myArray + shift;
    console.log(sumShift);
```

If you said `1,2,3,4,510`, you were correct! Wait what? Since arrays in Javascript don't have a natural `+` operator, it just converted them to strings and performed string concatenation. In a oversimplified nutshell, the compiler looked and said "that's an array and that's a number. Oh wait, they're both strings now because I can 'add' those together."

In Typescript, the snippet would look something like this:

```ts
    var myArray: number[] = [1,2,3,4,5];
    const shift: number = 10;
    const sumShift: number[] = myArray + shift; // error thrown here
    console.log(sumShift);
```

While you have the option to define a type for a variable in Typescript, standard practice is if you declare a variable and you know what those variables are going to be, you explicitly give them a type. This applies not just for primitive types (number, string, array, etc...) but predefined objects and structures as well. This means that **Typescript is a strongly-typed language while Javscript is a duck-typed language**.


#### Language Structure

While Javascript and Typescript share the same base, they have vastly different structures in terms of compilation, interpretation, and feature abilities. This can be seen evidently in class-based React apps depending on whether you use Javascript or Typescript. This is because **Typescript is a compiled object-oriented language while Javascript is an interpreted (hence duck-typed) scripting language**. Look at these two examples:

```ts
// Typescript
interface ComponentClassProps {
    prop1: string
    prop2: string
    prop3?: string
}

interface ComponentClassState {
    state1: number
    state2: boolean
    state3: string | undefined
}

export class ComponentClass extends Component<ComponentClassProps, ComponentClassState> {
    state: ComponentClassState = {
        state1: 42,
        state2: false,
        state3: undefined
    }

    componentDidMount() {
        this.setState({state3: prop1 + prop2})
    }

    // ... render and other functions
}

// Javascript

export class ComponentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {        
            state1: 42,
            state2: false,
            state3: undefined
        }
    }
}
```

These examples are a little exaggerated but the point here is that with Typescript, `interface` is a built in standard of the language as opposed to using odd workarounds to achieve the same funcationality in Javascript. What this also means is that when another component uses one that you have explicitly defined an interface for, your Typescript code will fail to compile because you miss a parameter when invoking a component or function. However, since Javascript is interpreted, it will not detect if have passed in all the necessary required parameters, only crashing when it attempted to access something not provided or defined. 

Besides the given examples, what other advantages/disadvantages does this approach have?

#### Fun Facts and Good to Knows

1. Browsers don't actually understand Typescript. Since Typescript is a superset of Javascript, rather than creating brand-new engines that only understand one or the other, Typescript performs a process called *transpiling*. This compiles Typescript to check for any errors. Once the compilation is successful, the code is then converted in the plain Javascript without you having to lift a finger. In actuality, Typescript could be thought of fancy Javascript with a larger rule book attached.

2. Typescript only works on the front-end/client side. If you plan on writing server-side code or functions separate from the front-end codebase of your application, you must use Javascript. Typescript can do things under the hood or function calls to servers or cloud function, but not the other way around.

3. Some developers find Typescript tedious because it is strongly-typed. However, some research has shown that 10% of bugs Javascript are preventable by using Typescript. This is because the compilation process and linters/parsers are able to catch common things such as wrong types, not matching function/component signatures when invoked, and potentially undefined variables unless explicitly told to ignore with `// @ts-ignore`.

4. Typescript was created by Microsoft with an open-source license. If you're curious you can check out the whole standard!

To learn more about some advantages, disadvantages, and a comparison of the two, check out this [post](https://byjus.com/gate/difference-between-typescript-and-javascript/).


## How implement an app with Typescript from scratch

Surprisingly, it is very simple. In a new directory, run the command `npx create-react-app typescript-react-practice --template typescript`. Run that and BOOM! you're ready to roll with Typescript from the start. With the given time, checkout your new app and see if you can implement an interface for a new component here to get a feel for it.

## How to retrofit a Javascript React app with Typescript

1. If you are interested in taking a current React app and performing Typescript retrofit, run the following command: `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`.

2. In any component file, rename it from `.js` to `.ts` or from `.jsx` to `.tsx`. This is so your file is redeclared and compiled as Typescript instead of Javascript.

3. You may notice that small "change" broke your file with error underlining everywhere! Well, we never said retrofitting will be easy. In that case, the first thing to do is at the top of the file, if not there already, is add react with `import React from 'react'`

4. Now you may still be experiencing some highlighting regarding "can't use .jsx". In that case, quick-fix it such that the `-jsx flag` is enabled in your configuration file.

5. If you plan on using external libraries with your React app, you will need to make sure you have the Typescript version of that library. This is usually denoted by the handle `@types/` before the name of the usual NPM package. Once you install those (and don't forget to uninstall Javascript versions when you're done using them), you should be on good footing to slowly convert any Javascript code into cleanly defined Typescript code.


## What's next?

Given what you have learned so far, take the time to retrofit portions of your current codebase with Typescript.

If you have more complicated questions, stick around or reach out to instructors for more specific scenarios.