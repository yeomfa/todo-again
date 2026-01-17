import '../assets/styles/TodoCounter.css';

export function TodoCounter({ completed, total }) {
  return (
    <h1 className="todo-counter">
      Has completado <b>{completed}</b> de <b>{total}</b> TODO's
      {completed === total ? '🥳' : ''}
    </h1>
  );
}
