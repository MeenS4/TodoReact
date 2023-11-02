import Todo from './Todo';

export default function Todos({ todos, deleteTodo }) {
  return (
    <div className='todos-container'>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}
