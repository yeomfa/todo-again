import './CreateTodoButton.css';
export function CreateTodoButton({ onCreate }) {
  return (
    <button className="todo-add-button" onClick={onCreate}>
      Add TODO
    </button>
  );
}
