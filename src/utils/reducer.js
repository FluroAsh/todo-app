export const reducer = (state, action) => {
  switch (action.type) {
    case 'addTodo': {
      // store stringified todo object in localStorage
      localStorage.setItem(action.data.taskId, JSON.stringify(action.data));

      // add to current state
      return {
        ...state,
        todos: [action.data, ...state.todos],
      };
    }
    case 'removeTodo': {
      localStorage.removeItem(action.data.taskId);
      return {
        ...state,
        todos: action.data.removedArr,
      };
    }
    case 'editTodo': {
      // -> Function currently just outputs the data from task component
      // Simple first pass
      // 1. Create new todo
      // 2. Remove old todo
      // 3. Add new todo

      // Alternatively... (more complex)
      // Get todoid & localStorage todo based on key (todoId)
      // convert LS todo to object
      // replace text with new value
      // convert back to stringified version
      // store in localtorage
      // update todo based on todo.id
      console.log(action.data.taskId, action.data.text);
      return;
    }
    default:
      return state;
  }
};
