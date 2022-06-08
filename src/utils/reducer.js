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
      /**
       * onSubmit 
       */
      break;
    }
    default:
      return state;
  }
};
