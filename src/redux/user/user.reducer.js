import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      //Over here we are returning a new object because we want our component to re render and it will only happen if the prop passed into the component changes and therefore we can't do currentState.currentUser = xyz because it won't re render the component
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
