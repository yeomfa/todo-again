import { CheckCircleIcon, XCircleIcon } from '@phosphor-icons/react';
import '../assets/styles/TodoItem.css';

export function TodoItem({ text, completed = false }) {
  const completedClass = completed ? 'completed' : '';

  return (
    <li className={`todo-item ${completedClass}`}>
      <CheckCircleIcon className="todo-icon" size={20} weight="fill" />
      <p className="todo-text">{text}</p>
      <XCircleIcon className="todo-icon" size={20} weight="fill" />
    </li>
  );
}
