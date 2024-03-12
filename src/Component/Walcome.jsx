import React from "react";
import { TodoItemsContext } from "../Stor/TodoItemsContext";
import { useContext } from "react";
const Welcome = () => {
  const {todoItems} =  useContext(TodoItemsContext);
  return (todoItems.length===0 && <p className="Welcome">Enjoy your day</p>);
};

export default Welcome;
