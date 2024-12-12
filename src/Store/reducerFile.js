import {SET_USER_DATA, SET_USER_LIST} from './Constants';
const initialState1 = {
  users: [],
  cart: [],
};
export const reducerFile = (state = initialState1, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        users: [...state.users, action.data],
      };

    case SET_USER_LIST:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
