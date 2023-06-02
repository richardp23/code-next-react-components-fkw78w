import React, { useState } from 'react';

export const ChildToParent = () => {
  return (
    <>
      <h2>ChildToParent</h2>

      <TodoList />
    </>
  );
};

const INITIAL_TODOS = [
  { id: 1, text: 'master react' },
  { id: 2, text: 'walk dog' },
  { id: 3, text: 'practice guitar' },
];

const NOOP = () => {
  // noop
};

// TODO: Update this component to handle click events from the TodoListItem.
const TodoList = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item">
          <TodoListItem key={todo.id} todo={todo} />
        </li>
      ))}
    </ul>
  );
};

// TODO: Update this component to call the onClick prop with a todo object.
const TodoListItem = (props) => {
  const todo = props.todo;

  return (
    <div className="d-flex justify-content-between">
      {todo.text} <button className="btn btn-primary btn-sm">done</button> 
    </div>
  );
};
