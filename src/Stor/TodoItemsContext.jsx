import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItems: () => {},
});

const todoItemReducer = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItem,
      {
        name: action.payload.name,
        date: action.payload.date,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItem.filter(
      (item) => item.name !== action.payload.name
    );
  }
  return newTodoItems;
};

const TodoItemsComponetProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addItems = (name, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { name, date },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItems = (name) => {
    const newDeleteItemAction = {
      type: "DELETE_ITEM",
      payload: { name },
    };
    dispatchTodoItems(newDeleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addItems, deleteItems }}>
      
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsComponetProvider;
