import { useState } from 'react';
import { genRandomId } from '../../methods.js';

import './TodoInput.scss';

export default function TodoInput({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  function handleTodoChange(event) {
    setTodoTitle(event.target.value);
  }

  function handleTodoAdd() {
    onAddTodo({
      id: genRandomId(),
      title: todoTitle,
    });
    setTodoTitle('');
  }

  return (
    <div className='todo-input__container'>
      <label>What do you want to do today?</label>
      <input
        type='text'
        onChange={(event) => handleTodoChange(event)}
        value={todoTitle}
      />
      <button onClick={handleTodoAdd}>Add todo</button>
    </div>
  );
}
