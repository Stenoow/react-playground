import React from "react";

export default function TodoInput(props) {


  return <input type="text" name="title" value={props.todo} />;
}
