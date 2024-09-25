import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ListGroup className="mt-3">
      {todos.map((todo, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          <span
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : '',
              cursor: 'pointer',
            }}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
          </span>
          <Button variant="danger" onClick={() => removeTodo(index)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
