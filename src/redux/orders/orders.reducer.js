import { orderActionTypes } from "./orders.types";

const INITIAL_STATE = {
    orderHistory : [],
    orderDetails: {},
}

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case orderActionTypes.SET_USER_ORDER_HISTORY:
            return {
                ...state,
                orderHistory : action.payload
            }
        case orderActionTypes.SET_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: action.payload
            };
        default:
            return state;
    }
}

export default ordersReducer;