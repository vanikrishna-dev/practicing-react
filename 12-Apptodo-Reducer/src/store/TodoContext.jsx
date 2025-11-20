import { createContext, useReducer} from "react";
import initialTodoItems from "./initialTodoItems"
import TodoItemsReducer from "./TodoItemsReducer";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {

  const [todoItems, dispatch] = useReducer( TodoItemsReducer, initialTodoItems);

  const addTodoItem = (todoText, todoDate, todoTime) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        todoText,todoDate,todoTime
      }
     })
  }

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {
        todoId
      }
     })
  }
  
  return <TodoContext.Provider value = {{todoItems, addTodoItem, deleteTodoItem}}>
    {children}
    </TodoContext.Provider>
}