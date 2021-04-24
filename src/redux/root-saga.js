import { all, call } from 'redux-saga/effects';
import ordersSagas from './orders/orders.sagas';
import productsSagas from './products/products.sagas';



export default function* rootSaga() {
  yield all(
      [call(productsSagas),
        call(ordersSagas)
    ]);
}