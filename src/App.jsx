import './App.css';
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoItemSkeleton,
  TodoList,
  TodoSearch,
} from './components';
import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';

function App() {
  const { isLoading, hasError, searchedTodos, completeTodo, deleteTodo } =
    useContext(TodoContext);

  return (
    <div className="todo-app">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {isLoading && !hasError && (
          <>
            <TodoItemSkeleton />
            <TodoItemSkeleton />
            <TodoItemSkeleton />
          </>
        )}
        {hasError && !isLoading && 'An error has ocurred!'}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
