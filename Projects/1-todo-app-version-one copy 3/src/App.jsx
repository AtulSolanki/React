import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import "./App.css";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={onNewItem} />
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
