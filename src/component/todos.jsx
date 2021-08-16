import { useCallback, useState } from "react";
import { TodoItem, MemoisedTodoItem, TodoItemWithUseMemo } from "./todosItem";

function Todo() {
  // * for some reason this takes some time to load
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    const payload = {
      title: text,
      id: todos.length + 1,
      status: false
    };
    setTodos([...todos, payload]);
  };

  const handleToggle = useCallback(
    (id) => {
      console.log(todos);
      const updatedTodos = todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setTodos(updatedTodos);
    },
    [todos]
  );
  return (
    <>
      <div>
        <input
          placeholder="add something"
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>ADD</button>
      </div>
      <div>
        {todos.map((item) => (
          <TodoItemWithUseMemo
            handleToggle={handleToggle}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </>
  );
}

export default Todo;
