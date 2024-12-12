import {ADD_TO_CART, Remove_from_Cart} from './Constants';
const initialState1 = [];
export const reducer = (state = initialState1, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case Remove_from_Cart:
      let result = state.filter(item => {
        return item.name != action.data;
      });
      return [...result];
    
    default:
      return state;
  }
};
