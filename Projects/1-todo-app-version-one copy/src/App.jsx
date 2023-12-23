import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import "./App.css";
import TodoItems from "./component/TodoItems";

function App() {
  const todoItems = [{
      name : "Buy Milk",
      dueDate : "4/10/2023",
  },
  {
      name : "Go to College",
      dueDate : "4/10/2023",
  },
  {
      name : "Buy Milk",
      dueDate : "4/10/2023",
  }
];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems = {todoItems}/>
      
    </center>
  );
}
export default App;
