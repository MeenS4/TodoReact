import { useState } from 'react';
import { genRandomId } from '../methods.js';

export default function TodoInput({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  function handleTodoChange(event) {
    setTodoTitle(event.target.value);
  }

  function handleTodoAdd() {
    addTodo({
      id: genRandomId(),
      title: todoTitle,
    });
    setTodoTitle('');
  }

  return (
    <div className='todo-input__container'>
      <label>Type in a todo</label>
      <input
        type='text'
        onChange={(event) => handleTodoChange(event)}
        value={todoTitle}
      />
      <button onClick={handleTodoAdd}>Add todo</button>
    </div>
  );
}
