import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
      class="text-center bg-yellow-100 my-10 w-1/2 rounded-md mx-auto"
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}
      class="py-5 text-center bg-green-300 rounded-md w-1/2 mx-auto">
        {todo.text}
      </div>

      <div className='icons'
      class="flex justify-center space-x-5">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          class="bg-red-500 w-10 h-10 rounded-md"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
          class="bg-blue-500 w-10 h-10 rounded-md"
        />
      </div>
    </div>
  ));
};

export default Todo;