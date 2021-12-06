import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo");
    }

    const todo = {
      todoString,
      id: v4(),
      completed:0,
    };
    dispatch({
      type: ADD_TODO,
      payload: todo
    });

    setTodoString("");
  };

  return (
    <div>
      <div><h1>Todo App</h1><br/></div>
      <div>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
          />
          
            <Button
              color="warning"
              
            >
              Add
            </Button>
          
        </InputGroup>
      </FormGroup>
    </Form> </div>
    </div>
  );
};

export default TodoForm;
