import { RiDeleteBin5Line } from "react-icons/ri";
function TodoList({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
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

