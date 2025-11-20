import { useContext } from "react";
import Button from "./buttons";
import './TodoItem.css';
import { TodoContext } from "../store/TodoContext";

 const TodoItem = ({id, todoText, todoDate, todoTime}) => {
    const {deleteTodoItem} = useContext(TodoContext);
    return <div className="container d-flex p-1 ">
        <div className="row mx-auto flex-nowrap">
          <div className="col-5 text-truncate">
            {todoText}
          </div>
          <div className="col-3">
            {todoDate}
          </div>
          <div className="col-3">
            {todoTime}
          </div>
          <div className="col-2">
            <Button 
            btnType="danger" 
            btnText='Delete'
            handler={() => deleteTodoItem(id)} /> 
          </div> 
        </div> 
      </div>
 }

 export default TodoItem;