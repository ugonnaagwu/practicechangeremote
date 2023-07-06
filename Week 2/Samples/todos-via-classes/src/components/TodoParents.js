import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export class TodoParent extends Component {
  state = {
    todo: [
    ],
  };

  markComplete = (id) => {
    console.log("Toggling item " + id);
    // This may sound weird, but it may be easier to start at the end
    // and read this in reverse
    // (i.e., start at this.setState(newState); and work your way back up )

    // First, define a function that will be given a specific todo item
    // and toggle it's 'completed' status
    // only if that item's id is the same as the (id) parameter above
    const toggleTargetItem = (todo, index) => {
      if (todo.id === id) {
        // Only make a copy for the one object that has changed
        todo = { ...todo, completed: !todo.completed };
        // The above line says
        // ..todo           "Copy all the parts of the todo object"
        // completed:       "Go back and replace the completed field with..."
        // !todo.completed  "...the opposite of it's current value"
      }

      // We'll reuse objects that haven't changed,
      // (this wilal also return the new version of the 1 object we want to toggle)
      return todo;
    };

    // Map will produce a brand-new array for us
    const newArrayOfTodoItems = this.state.todo.map(toggleTargetItem);

    // create a new 'state' object literal here
    const newState = {
      // 'todo' field should be set to a new array of todo items
      // (map produced this new array for us)
      todo: newArrayOfTodoItems,
    };

    this.setState(newState);

    // We could also do all of the above steps in a single statement:
    // this.setState(
    //   // create a new 'state' object literal here
    //   {
    //     // 'todo' field should be set to a new array of todo items
    //     // (map will produce this new array for us)
    //     todo: this.state.todo.map((todo, index) => {
    //       if (todo.id === id) {
    //         // Only make a copy for the one object that has changed
    //         todo = { ...todo, completed: !todo.completed };
    //       }

    //       // We'll reuse objects that haven't changed,
    //       // (this wilal also return the new version of the 1 object we want to toggle)
    //       return todo;
    //     }),
    //   }
    // );
  };

  addTodo = (newTitle) => {
    console.log("addTodo: " + newTitle);
    // This is (hopefully) more clear because it separates out individual steps
    const nextIdNumber = this.state.todo.length + 1;
    const newTodo = { id: nextIdNumber, title: newTitle, completed: false };
    const newTodoArray = [...this.state.todo];
    newTodoArray.push(newTodo); // add to the end
    // JavaScript is ok with us changing a const array because
    // the array itself isn't changing ("just" the contents)
    // so it technically doesn't violate const

    const newState = { todo: newTodoArray };
    this.setState(newState);

    // You can also do this all in a single statement.
    // It actually does all the same steps, just all smooshed together :)
    // this.setState({
    //   todo: [
    //     ...this.state.todo,
    //     { id: this.state.todo.length + 1, title: newTitle, completed: false },
    //   ],
    // })
  };

  // produce a block of HTML/JS (JSX, technically)
  // that will show a single todo item:
  makeOneTodoItem = (todoItemInfo) => (
    <TodoItem
      key={todoItemInfo.id} // React wants a unique 'key' for each item
      todo={todoItemInfo} // This is passed to the TodoItem component
      markComplete={this.markComplete} // This is passed to the TodoItem component
    />
  );

  render() {
    return (
      <div>
        {
          // Run this function once for each item in the todo array:
          this.state.todo.map(this.makeOneTodoItem)
        }

        <AddTodo addTodoItem={this.addTodo} />
      </div>
    );
  }
}

export default TodoParent;
