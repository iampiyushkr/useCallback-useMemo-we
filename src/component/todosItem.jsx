import React, { useMemo } from "react";

const delay = (time) => {
  // start time
  const start = Date.now();
  // difference should be lesser than time
  // if greater then break from loop
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

const TodoItem = ({ id, title, status, handleToggle }) => {
  const updatedTime = delay(200);
  return (
    <div>
      <h3> {`${title} - ${updatedTime}`}</h3>
      <button onClick={() => handleToggle(id)}>
        {status ? "TRUE" : "FALSE"}
      </button>
    </div>
  );
};

const TodoItemWithUseMemo = ({ id, title, status, handleToggle }) => {
  const updatedTime = useMemo(() => delay(200), []);
  return (
    <div>
      <h3> {`${title} - ${updatedTime}`}</h3>
      <button onClick={() => handleToggle(id)}>
        {status ? "TRUE" : "FALSE"}
      </button>
    </div>
  );
};

function areEqual(prev, next) {
  if (prev.status !== next.status) {
    return false;
  }
  return true;
}

const MemoisedTodoItem = React.memo(TodoItem);

export { TodoItem, MemoisedTodoItem, TodoItemWithUseMemo };
