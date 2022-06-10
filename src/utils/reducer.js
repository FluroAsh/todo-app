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
      // get localStorage todo - parse into object from string
      const lsTodo = JSON.parse(localStorage.getItem(action.data.taskId));
      lsTodo.text = action.data.input;

      // set edited localStorage todo
      localStorage.setItem(action.data.taskId, JSON.stringify(lsTodo));

      // return the altered list of todos (with the edited todo)
      return {
        ...state,
        todos: [lsTodo, ...action.data.removedArr],
      };
    }
    default:
      return state;
  }
};
