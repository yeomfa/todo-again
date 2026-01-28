import { useContext } from 'react';
import './TodoForm.css';
import { TodoContext } from '../../context/TodoContext';
import { useState } from 'react';

export function TodoForm() {
  const { todos, createTodo, setIsOpenModal } = useContext(TodoContext);
  const [todoValue, setTodoValue] = useState('');

  const onCreate = (e) => {
    e.preventDefault();

    const id = todos.length + 1;

    createTodo({ id, text: todoValue, completed: false });

    setIsOpenModal(false);
  };

  const onCancel = () => {
    setIsOpenModal(false);
  };

  const updateTodoValue = (e) => {
    setTodoValue(e.currentTarget.value);
  };

  return (
    <form className="todo-form" onSubmit={onCreate}>
      <label htmlFor="">Write a new TODO</label>
      <textarea
        name="text"
        className="form-text"
        placeholder="Write something... "
        value={todoValue}
        onChange={updateTodoValue}
      ></textarea>
      <div className="form-btn-cont">
        <button onClick={onCancel} type="button" className="btn btn-cancel">
          Cancel
        </button>
        <button type="submit" className="btn btn-confirm">
          Confirm
        </button>
      </div>
    </form>
  );
}
