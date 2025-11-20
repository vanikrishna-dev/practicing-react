const TodoItemsReducer = (currentTodoItems, action) => {

  switch (action.type){
    case 'ADD_ITEM': {
      const todoText = action.payload.todoText;
      const todoDate = action.payload.todoDate;  
      const todoTime = action.payload.todoTime;      
      return [...currentTodoItems, {id: todoText, todoText, todoDate, todoTime}];
    }
    case 'DELETE_ITEM':
      return currentTodoItems.filter(item => item.id !== action.payload.todoId);
    default:
      return currentTodoItems;
  }
}

export default TodoItemsReducer;