import React, { useContext,Fragment,useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTrash,FaPencilAlt,FaStrikethrough } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO,STRIKE_TODO } from "../context/action.types";
import {Modal} from 'react-bootstrap';
const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [show, setShow] = useState(false);
  const deleteTodo = (id) => {
    localStorage.setItem('todoId', id);
    setShow(true)
  }
  const viewTodo = (id) => {
    // dispatch({
    //   type:VIEW_TODO,
    //   payload: id
    // });
  }
  const strikeTodo = (id) => {
     dispatch({
      type: STRIKE_TODO,
      payload: {
        id,
        completed:1
      } 
     });
  }
  const deleteHandler = () => {
    let id = localStorage.getItem("todoId")
    dispatch({
      type: REMOVE_TODO,
      payload:id
    });
    setShow(false)
  }
  const handleClose = () => setShow(false);
  return (
    <Fragment>
    <ListGroup className="mt-5 mb-2 items">
      {todos.map(todo => (
        <ListGroupItem key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'red', flex: 2 }}>{todo.todoString}</span> 
          
          <span
            className="float-right rm-cls"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            <FaTrash />
          </span>
          <span
            className="rm-cls"
            onClick={() => {
              viewTodo(todo.id);
            }}
          >
            <FaPencilAlt />
          </span>
          <span
            className="rm-cls"
            onClick={() => {
              strikeTodo(todo.id);
            }}
          >
            <FaStrikethrough />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
    <Modal show={show} backdrop="static" onHide={handleClose} className="custom-modal light">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div>
          <h6 className="text-danger text-center"> Do you want to delete the todo !!</h6>
          </div>
         
           
        </Modal.Body>
        <Modal.Footer>
        <button className="btn btn-success" onClick={deleteHandler}>
                Yes
                </button>
                <button className="btn btn-danger" onClick = {handleClose}>
                No
                </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Todos;
