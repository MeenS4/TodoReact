import Todo from '../Todo/Todo';
import './Todos.scss';

export default function Todos({ todos, onDeleteTodo, onUpdateTodo }) {
  return (
    <div className='todos-container'>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        );
      })}
    </div>
  );
}
