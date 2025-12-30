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
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-app">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {todos.map((todo) => {
          if (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
            return (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
            );
        })}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
