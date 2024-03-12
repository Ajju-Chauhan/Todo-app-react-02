import { useState , useRef} from "react";
import style from "./AddTodo.module.css";
import { GrAdd } from "react-icons/gr";
import { TodoItemsContext } from "../Stor/TodoItemsContext";
import { useContext } from "react";

function AddTodo() {
  const {addItems} = useContext(TodoItemsContext)
  const todoNameEle = useRef();
  const todoDateEle = useRef();
  const onClickButton = (event) => {
    event.preventDefault();
   const todoName = todoNameEle.current.value;
  const todoDate = todoDateEle.current.value;
    todoDateEle.current.value = "";
    todoNameEle.current.value = "";
    addItems(todoName, todoDate);
    
  };

  return (
    <div class="container Todo-Cantainer">
      <form className="row Todo-row" onSubmit={onClickButton}>
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            
            ref={todoNameEle}
            
          />
        </div>
        <div class="col-4">
          <input type="date"
          ref={todoDateEle}
           />
        </div>
        <div class="col-1">
          <button
          type="submit"
            
            className="btn btn-success Todo-button"
          
          >
            <GrAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
