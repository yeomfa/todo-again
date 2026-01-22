import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../context/TodoContext';

export function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } =
    useContext(TodoContext);

  return (
    <h1 className="todo-counter">
      Has completado <b>{completed}</b> de <b>{total}</b> TODO's
      {completed === total ? '🥳' : ''}
    </h1>
  );
}
