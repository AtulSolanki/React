import { useRef, useContext } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);
  // const handleNameChange = () => {
  //   // console.log(event.target.value);
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = () => {
  //   // console.log(event.target.value);
  //   setDueDate(event.target.value);
  // };
  const handleAddButtonClicked = () => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    // setTodoName("");
    // setDueDate("");
  };
  return (
    <div className="container ">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-outline-success kg-button">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
