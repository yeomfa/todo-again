import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { TodoContext } from '.';

export function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  let {
    item: todos,
    saveItem: saveTodos,
    isLoading,
    hasError,
  } = useLocalStorage('todos_v2', []);
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      const newTodo = { ...todo };

      newTodo.completed =
        newTodo.id === id ? !newTodo.completed : newTodo.completed;

      return newTodo;
    });

    saveTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    saveTodos(newTodos);
  };

  const createTodo = (todo) => {
    todos.push(todo);

    saveTodos(todos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        saveTodos,
        isLoading,
        hasError,
        searchValue,
        setSearchValue,
        totalTodos,
        completedTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        isOpenModal,
        setIsOpenModal,
        createTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
