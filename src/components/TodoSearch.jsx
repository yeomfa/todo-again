import '../assets/styles/TodoSearch.css';

export function TodoSearch({ searchValue, setSearchValue }) {
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
