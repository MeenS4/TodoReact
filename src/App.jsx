import Header from './components/Header/Header.jsx';
import Todos from './components/Todos/Todos.jsx';
import TodoInput from './components/TodoInput/TodoInput.jsx';
import { genRandomId } from './methods.js';
import { useState } from 'react';

import './App.scss';

const initialTodos = [
  {
    id: genRandomId(),
    title: 'Cook a meal',
  },
  {
    id: genRandomId(),
    title: 'Go to the gym',
  },
  {
    id: genRandomId(),
    title: 'Study for an exam',
  },
];

export default function App() {
  const [todos, setTodos] = useState([...initialTodos]);

  function handleAddTodo(todo) {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }

  function handleDeleteTodo(todoId) {
    setTodos((prevTodos) => {
      const newTodos = [
        ...prevTodos.filter((todo) => {
          return todo.id !== todoId;
        }),
      ];

      return newTodos;
    });
  }

  function handleUpdateTodo(todo) {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      let todoIndex = prevTodos.findIndex((td) => td.id === todo.id);
      newTodos[todoIndex] = todo;
      return newTodos;
    });
  }

  return (
    <div className='main'>
      <Header text='To-do App' />
      <TodoInput onAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}
