import TodoList from "./TodoList";
import { TodoItemsContext } from "../Stor/TodoItemsContext";
import { useContext} from "react";

let Items = ({ onDeleteClick }) => {
const {todoItems} =  useContext(TodoItemsContext);
const {deleteItems} = useContext(TodoItemsContext)
  return (
    <div className="container Todo-Container Todo-row">
      {todoItems.map((item, index) => (
        <TodoList key={index}
         TodoName={item.name}
         TodoDate={item.date}
        onDeleteClick={deleteItems}
        />
      ))}
    </div>
  );
};

export default Items;
