import { auth, firestore } from "../../firebase/firebase.utils";
import { handleAddProduct, handleDeleteProduct, handleFetchProduct, handleFetchProducts } from "./products.helper";
import productTypes from "./products.types";
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchProductsStart, setProduct, setProducts } from "./products.actions";
import { selectCurrentUser } from "../user/user.selector";

export function* addProduct({payload : {
        productCategory,
        productName,
        productImage,
        productPrice,
        productQuantity,
        userType,
}}) {
    try {
        yield handleAddProduct({
            productCategory,
            productName,
            productImage,
            productPrice,
            productQuantity,
            userType,
            userID : auth.currentUser.uid
        })
        yield put(
            fetchProductsStart()
        )

    } catch {

    }
}

export function* onAddNewProduct(){
    yield takeLatest(productTypes.ADD_NEW_PRODUCT,addProduct)
}

export function* fetchProducts({
    payload : {
        filterType
    }
}){
    try{
        const products = yield handleFetchProducts({ filterType });
        yield put(
            setProducts(products)
        )
    }catch{

    }
}

export function* onFetchProductsStart(){
    yield takeLatest(productTypes.FETCH_PRODUCTS_START,fetchProducts)
}

export function* deleteProduct({ payload }) {
    try {
      yield handleDeleteProduct(payload);
      yield put (
        fetchProductsStart()
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onDeleteProductStart() {
    yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct);
  }

  export function* fetchProduct({ payload }) {
    try {
      const product = yield handleFetchProduct(payload);
      yield put(
        setProduct(product)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchProductStart() {
    yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProduct);
  }

export default function* productsSagas() {
    yield all([
      call(onAddNewProduct),
      call(onFetchProductsStart),
      call(onDeleteProductStart),
      call(onFetchProductStart),
    ])
  }