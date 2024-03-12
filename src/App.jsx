import TodoName from "./Component/TodoName";
import AddTodo from "./Component/AddTodo";
import Walcome from "./Component/Walcome";
import Items from "./Component/Items";
import TodoItemsComponetProvider from "./Stor/TodoItemsContext";
import "./App.css";

function App() {
  return (
    <TodoItemsComponetProvider>
      <center>
        <TodoName />
        <AddTodo />
        <Walcome />
        <Items />
      </center>
    </TodoItemsComponetProvider>
  );
}

export default App;
