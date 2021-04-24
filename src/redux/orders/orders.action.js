import { orderActionTypes } from "./orders.types";

export const saveOrderHistory = order => ({
    type : orderActionTypes.SAVE_ORDER_HISTORY_START,
    payload : order
})

export const getUserOrderHistory = uid => ({
    type : orderActionTypes.GET_USER_ORDER_HISTORY_START,
    payload : uid
})

export const setUserOrderHistory = history => ({
    type : orderActionTypes.SET_USER_ORDER_HISTORY,
    payload : history
})

export const getOrderDetailsStart = orderID => ({
    type: orderActionTypes.GET_ORDER_DETAILS_START,
    payload: orderID
  });
  
export const setOrderDetails = order => ({
    type: orderActionTypes.SET_ORDER_DETAILS,
    payload: order
  });