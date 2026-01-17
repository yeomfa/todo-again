import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from './components';
import './App.css';
import { useState } from 'react';

const defaultTodos = [
  {
    id: 1,
    text: 'Get NodeJS certificate',
    completed: false,
  },
  {
    id: 2,
    text: 'Get React certificate',
    completed: true,
  },
];

function App() {
  const storagedTodos = localStorage.getItem('todos_v1');
  let parsedTodos = [];

  if (!storagedTodos) {
    localStorage.setItem('todos_v1', JSON.stringify(defaultTodos));
    parsedTodos = defaultTodos;
  } else {
    parsedTodos = JSON.parse(localStorage.getItem('todos_v1'));
  }

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(parsedTodos);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const saveTodos = (todos) => {
    localStorage.setItem('todos_v1', JSON.stringify(todos));
    setTodos(todos);
  };

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

  return (
    <div className="todo-app">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
