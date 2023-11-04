import { useState } from 'react';
import './Todo.scss';

export default function Todo({ todo, onDeleteTodo, onUpdateTodo }) {
  const [title, setTitle] = useState(todo.title);
  const [isEditing, setIsEditing] = useState(false);

  // Update title value and state
  function handleTitleChange(event) {
    setTitle(event.target.value);
    onUpdateTodo(todo);
  }

  // Deletes todo from a todos list on a call of 'Done!' button
  function handleTodoDoneButton() {
    onDeleteTodo(todo.id);
  }

  // Switch from display to edit mode
  function handleEditButton() {
    setIsEditing(!isEditing);
  }

  // Updates the todo title using title state in this component
  function handleSubmitButton() {
    onUpdateTodo({
      id: todo.id,
      title: title,
    });
    setIsEditing(!isEditing);
  }

  // Resets the local title state to the value that was previously set
  function handleCancelButton() {
    setTitle(todo.title);
    setIsEditing(!isEditing);
  }

  return (
    <div className='todo'>
      <div className='todo__title'>
        {isEditing ? (
          <input
            type='text'
            onChange={(event) => handleTitleChange(event)}
            value={title}
            className='edit-todo-title__input'
          />
        ) : (
          todo.title
        )}
      </div>
      <div className='buttons'>
        {isEditing ? (
          <>
            <button className='todo__button' onClick={handleSubmitButton}>
              Submit
            </button>
            <button className='todo__button' onClick={handleCancelButton}>
              Cancel
            </button>
          </>
        ) : (
          <button className='todo__button' onClick={handleEditButton}>
            Edit
          </button>
        )}
        <button className='todo__button' onClick={handleTodoDoneButton}>
          Done!
        </button>
      </div>
    </div>
  );
}
