import { RiDeleteBin5Line } from "react-icons/ri";
function TodoList({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className="container Todo-Cantainer">
      <div className="row Todo-row">
        <div className="col-4 Todo-item-date">{TodoName}</div>
        <div className="col-4 Todo-item-date">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger Todo-button"
            onClick={()=>onDeleteClick(TodoName)}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;

