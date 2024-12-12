import {ADDITION, SUBTRACTION} from './ActionFile';
import {ADD_TO_CART, Remove_from_Cart, USER_LIST} from './Constants';
export const addition = () => ({
  type: ADDITION,
});
export const subtraction = () => ({
  type: SUBTRACTION,
});
export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
export function removefromcart(item) {
  return {
    type: Remove_from_Cart,
    data: item,
  };
}
export function getUserList() {
  return {
    type: USER_LIST,
  };
}
