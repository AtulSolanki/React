import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"
const TodoItems = ({todoItems}) => {
   return (<div className= {style.itemsContainer}>
        {todoItems.map((item) => (
           <TodoItem key = "todoName" todoName={item.name} todoDate={item.dueDate}>

           </TodoItem>
           ))}
     </div>
     );
};
export default TodoItems;