import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoList1 from "./component/TodoList1";
import TodoList2 from "./component/TodoList2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoList1 />
        <TodoList2 />
      </div>
    </center>
  );
}
export default App;
