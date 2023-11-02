import Header from './components/Header';
import Todos from './components/Todos';
import TodoInput from './components/TodoInput';
import { genRandomId } from './methods.js';
import { useState } from 'react';

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

  function addTodo(todo) {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  }

  function deleteTodo(todoId) {
    setTodos((prevTodos) => {
      const newTodos = [
        ...prevTodos.filter((todo) => {
          return todo.id !== todoId;
        }),
      ];

      return newTodos;
    });
  }

  return (
    <div className='main'>
      <Header text='To-do App' />
      <TodoInput addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
