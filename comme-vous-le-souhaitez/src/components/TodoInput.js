import React from "react";

export default function TodoInput(props) {


  return (
      <form onSubmit={props.handleSubmit}>
          <input type="text"
                 id="title"
                 name="title"
                 value={props.todo}
                 onChange={props.handleInput} />
      </form>

      );
}
