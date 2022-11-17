import React from 'react';
import './Components';
import TodoList from './Components/ToDo/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;