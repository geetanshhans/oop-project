
import { takeLatest,all,call,put } from "redux-saga/effects";
import { auth } from "../../firebase/firebase.utils";
import { clearCart } from "../cart/cart.action";
import { setOrderDetails, setUserOrderHistory } from "./orders.action";
import { handleGetOrder, handleGetUserOrderHistory, handleSaveOrder } from "./orders.helper";
import { orderActionTypes } from "./orders.types";

export function* getUserOrderHistory({ payload }){
     try{
        const history = yield handleGetUserOrderHistory(payload);
        yield put(
            setUserOrderHistory(history)
        )
     }catch(err){
         console.log(err);
     }
}

export function* onGetUserOrderHistoryStart(){
    yield takeLatest(orderActionTypes.GET_USER_ORDER_HISTORY_START,getUserOrderHistory);
}

export function* saveOrder({ payload }){
    try{
        const timestamp = new Date();
        let status = "Placed";
        yield handleSaveOrder({
            ...payload,
            orderUserID : auth.currentUser.uid,
            orderCreatedDate : timestamp,
            orderStatus : status,
            orderFeedback : '',
        })
        yield put(
            clearCart()
        )
    }catch(err){
        console.log(err)
    }
};

export function* onSaveOrderHistoryStart () {
    yield takeLatest(orderActionTypes.SAVE_ORDER_HISTORY_START,saveOrder)
};

export function* getOrderDetails({ payload }) {
    try {
      const order = yield handleGetOrder(payload);
      console.log(order)
      yield put(
        setOrderDetails(order)
      )
  
    } catch (err) {
       console.log(err);
    }
  }

  export function* onGetOrderDetailsStart() {
    yield takeLatest(orderActionTypes.GET_ORDER_DETAILS_START, getOrderDetails);
  };

export default function* ordersSagas() {
    yield all([
        call(onSaveOrderHistoryStart),
        call(onGetUserOrderHistoryStart),
        call(onGetOrderDetailsStart)
    ])
}