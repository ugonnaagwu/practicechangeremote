import React from "react";

const TodoForm = (props) => {
  // Input tracker
  let input = React.useRef(null);

  return (
    <div>
      <input type="text" placeholder="Enter a task" ref={input} />
      <button
        onClick={() => {
          props.addTodoItem(input.current.value);
          input.current.value = "";
        }}
      >
        {" + "}
      </button>
    </div>
  );
};

export default TodoForm;
