import { ADD_TODO, REMOVE_TODO,STRIKE_TODO ,EDIT_TODO} from "./action.types";
  export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case STRIKE_TODO:       
      let taskIndex = state.findIndex(todo => todo.id === action.payload.id);
      state[taskIndex].completed = action.payload.completed
      return state.filter(task => task.id !== action.id);   
    case EDIT_TODO:
        return state.filter(todo => todo.id == action.payload);    
    default:
    return state;
  }
};
