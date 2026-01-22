import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from '@phosphor-icons/react';
import './TodoItem.css';

export function TodoItem({
  text,
  completed = false,
  onComplete = () => {},
  onDelete = () => {},
}) {
  const completedClass = completed ? 'completed' : '';

  return (
    <li className={`todo-item ${completedClass}`}>
      <button className="todo-icon" onClick={onComplete}>
        {completed ? (
          <MinusCircleIcon size={20} weight="fill" />
        ) : (
          <CheckCircleIcon size={20} weight="fill" />
        )}
      </button>
      <p className="todo-text">{text}</p>
      <button onClick={onDelete} className="todo-icon">
        <XCircleIcon size={20} weight="fill" />
      </button>
    </li>
  );
}
