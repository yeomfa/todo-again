import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../context/TodoContext/TodoContext';

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      className="todo-search"
      type="text"
      placeholder="Search..."
    />
  );
}
