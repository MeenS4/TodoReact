export default function Todo({ todo, deleteTodo }) {
  function handleTodoDone() {
    deleteTodo(todo.id);
  }

  return (
    <div className='todo'>
      <div className='todo__title'>{todo.title}</div>
      <button className='todo__check-button' onClick={handleTodoDone}>
        Done!
      </button>
    </div>
  );
}
