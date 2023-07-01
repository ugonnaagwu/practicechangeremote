# Clean Code Fundamentals

When we develop our tech dreams, we all learn how to code. However, do we learn how to make sure that code is clean and tidy?

## Learning objectives

* TNTs will learn about the fundamentals of clean coding.
* TNTs will learn about clean coding within the context of web development.
* TNTs will practice on taking some existing code and do exercises to clean their code.

## Time required and pace

Total time: 1 hour

## Clean Coding Overview

As we begin, if you don't put a single comment, function signature, or simply have teammates asking "what does this do?", then this topic is for you. Especially in the web language space, clean coding is essential to:

- Improve readability
- Improve code comprehension
- Reduce bugs and errors
- Properly modularize components/sections
- Refactoring, versioning, and deprecation

It's understandable with simple apps that say "Hello World!" that it's harder to visualize some parts of clean coding. In fact, it is more than just putting comments in your code. Clean coding is about **how you structure, write, and explain** your solution. If this sounds familiar, then keep up with the interview prep! A good analogy is think of creating an app or managing a codebase as a newspaper (even a website or e-newspaper). Overall, fundamentally every codebase has the same core with a separate flavour on top. Newspapers have large broad sections (i.e. top-level structures like Models-Views-Controllers), in each section they have articles dedicated to the respective topic (i.e. a front-end page like 'Home' would likely be found in the 'Views' folder), every article has to be grammatically correct (i.e. proper syntax), the subject needs to be clear and concise (i.e. readable), if things outside the normal topic scope are mentioned, they need to be explained for your readers (i.e. comprehensible), and any good journalist (or software engineer) needs to be able to properly cite their sources (i.e. calling a function with the correct parameters and values based on the signature).

## Code Structure

With modern code editors that seem to be able to find any file, function, or component in an instant, you may think it's redundant to have a good structure for your codebase. This couldn't be farther from the truth. While editors and IDEs may be able to find things easily, that's only true if the end-user knows what they're looking for. For example, you don't know that a super dandy function that cleans your strings exactly as you need (and your colleagues don't either), it mind as well not exist at all! That's why having a solid structure for your code is paramount because it keeps all your files organized in a coherent manner for people, especially those who might be long gone from a team.

One such structure that many of you will likely follow is the Model-View-Controller (MVC) framework. It is an architectural pattern where application code is sorted into the three core buckets. This framework isn't an absolute, but as implied by the word **framework**, a guide to how to structure your apps. For our sake, let's go with MVC as our top level folders. 

Now within models, some things you may want to include here are:

- Object models
- Factories (components that generate other components or completed object models)
- Global constants and fixtures

The views may include:

- Pages of the app
- UI sub-components
- Generic UI elements (i.e. if you want the same dialog or button aesthetic throughout the app, you may have a shell component you can modify with props)
- Graphical elements

The controllers may include:
- Service classes
- Middleware components
- "onLoad()"-like functions
- Helper/utility functions


## Code Composition and Comprehension

If you've ever taken a programming course at a college or online, you will often have a lot of "do as I say, not what I do". While they may hammer in the need for clearly written code, often the provided examples may be abstract that it's hard to understand what they are doing without re-reading or lots of comments! Take a look at this example:

```js
    function myFunc(arg1) {
        console.log(arg1)

        if (arg1.length === 0) {
            let offset = ['3','d','f','2','3','3']
            const result = manipulate(arg1, ret)
            this.buttonProp(result)
        }

        else {
            const result = initiateMatch(arg1)
            this.buttonProp(result)
        }

        return arg1
    }
```

First note, this is example was illustrative and made-up. There are however terrible examples seen in production code that should have never seen the light of day. On first though, what does this code do? If your first though was it takes a colour hex value, if present, manipulates the hex value by our given offset, and then resets the button's color, then congratulations! If not, how could you not tell? It was super simple to understand right? Let's take a step back, how can we *manipulate* (pun definitely intended) this monstrosity into something any developer could read and understand? Well, let's break down some of the many flaws:

- The function name does not describe what it vaguely does, let alone clearly
- The required arguments are vague as to what they are or whether they are necessary
- The `offset` variable should be a const and is unclear why it it is oddly declared as a character array
- Outside the function, the `this.buttonProp()` function should be renamed to reflect what it does.
    - This also applies to the `manipulate()` and `initiateMatch()` functions
- It is unclear why the function returns the argument again

If we were take those suggestions and apply that to our frankenfunction, it would look something like this:

```js
    /**
     * Takes the given color and transforms the color of the button.
     * @param {string[]} currentColorAsHexArray Takes a string[] representing the current button color
     * @returns {string[]} currentColorAsHexArray reference to passed in parameter
     */
    function buttonColorTransform(currentColorAsHexArray) {
        console.log(currentColorAsHexArray)

        if (currentColorAsHexArray.length === 0) {
            const colorOffset = ['3','d','f','2','3','3'] // set as string array so it is easier to manipulate in place.
            // function signature would say: Given a color, manipulate and transform it by the offset using string[] values
            //                               color: string[] Color to manipulate.
            //                               offset: string[] Offset to manipulate the color by.
            const newColor = manipulateColor(currentColorASHexArray, colorOffset)
            // function signature would say: Changes the color of the buttons on the page.
            //                               color: string[] Color to change the button to.
            this.changeButtonColor(newColor)
        }

        else {
            // function signature would say: Given a color, match it to the current color schema of the application.
            //                               color: string[] Color to match current application schema.   
            const result = initiateMatch(currentColorAsHexArray)

            // function signature would say: Changes the color of the buttons on the page.
            //                               color: string[] Color to change the button to.
            this.changeButtonColor(result)
        }

        return currentColorAsHexArray
    }
```

Could this function or application be improved further? Absolutely. For example, why are we using string[] for hex values? If a function requires that, it is better to use a more acceptable format such as `#ffffff`, simply `ffffff`, or even an alias for a string with 6 characters with a hexadecimal range. However, compared from before to now, this function accomplishes three things:

- The code is much clearer on the inputs and output.
- The code clearly describes what it is doing and what the references will do.
- The code is comprehensible for the average developer to read and understand.

Think of writing clean code like writing an essay. If you can barely understand what you wrote a week after doing it, chances are someone else has no idea what you wrote. Another way of thinking about it is if your code reads like Shakespearian English it probably justifies a rewrite. While it may take longer initially write cleaner code, the amount of time it saves upon a revisit or when someone attempts to understand what it does pales in comparison. Imagine if a developer for an NPM package gave all the function arbitrary names with little documentation. Chances are if another developer published a package with worse performance but clear documentation, that the clear one would be the more popular of the two.

## Code References and Parameters

In the earlier example, you may have seen some function comment decorations. These are used to document the function so when it is used outside of the given function, IDEs can have a short summary of what it does, what are the params, what are some characteristics of the function, and what it returns.

For example, if we have the following functions, how would we decorate them?

```js
function sumArray(a) {
    // does stuff
    return sum
}

export class PrimaryButton extends React.Component {
    constructor(props) {
        super(props)
    }

    // renders and makes it click
}

```

Looking below, here are some ways we could decorate them:

```js
/**
*   Sums the values of the given array
*   @param {number[]} a An array of of numbers to be summed up
*   @returns {number} Sum of the contents of the array
**/
function sumArray(a) {
    // does stuff
    return sum
}

/**
*   A button component that represents the primary action in the scenario
*   @param {string} text The text of the primary button
*   @param {string?} color The color of the button
*   @deprecated 10.4.0 Use <Button> with the `primary={true}` property set instead.
**/
export class PrimaryButton extends React.Component {
    constructor(props) {
        super(props)
    }

    // renders and makes it click
}

```

While these decorators don't enforce strong typing like in Typescript, they do assist developers in understanding how to properly use functions and components properly. Often times, the largest source of error in Javascript is not passing in the correct parameters or using the return type correctly!

In general though, each documentation decorator has three key portions:

- Summary: This is the text at the top that briefly describes what the function or component does.
- @params: These are the parameters the function or component accepts and uses. If a `?` is part of the type, it signifies this is optional. Anything else given is required to properly use the function or component. You may list as many @params as you wish
- @returns: Coupled with `{type}`, it describes what is returned at the end of the function. If there is no return, it is highly suggested to list `{void}`.

For more information on the full list of inline documentation for Javascript/Typescript, see this [article by Wordpress](https://developer.wordpress.org/coding-standards/inline-documentation-standards/javascript/). 

## Documentation

As is always told, **DOCUMENT YOUR CODE**. It is not necessary to put comments for the sake of comments, but ensure that your comments actually add value to the code. Sometimes, by following proper code hygiene naming things correctly or adding function decorators, comments are irrelevant. However, say your function does something complicated, like manipulating an array, sending service calls, making requests, involves many state changes, it is a good idea to add comments describing those steps. This way, if someone else needs to modify or refactor your function, you save time since an explanation already exists. For a function that sums an array, comments are probably not necessary beyond the function decorators. However, if you are cleaning a data table in a very specific way, adding comments go a long way not just for your sanity but those who will work with it years down the line.

