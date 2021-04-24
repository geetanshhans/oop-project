import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderHistory from "../../components/order-history/order.history.component";
   
import { getUserOrderHistory } from "../../redux/orders/orders.action";



const mapState = ({ user,orders}) => ({
    currentUser: user.currentUser,
    orderHistory: orders.orderHistory.data
  });
  

const MyOrders = () => {
  
    const dispatch = useDispatch();
    const { currentUser, orderHistory } = useSelector(mapState);
    const userID = currentUser.id;
    console.log(userID);
    useEffect(() => {   
      dispatch(
        getUserOrderHistory(userID)
      )
   
    }, []);
  
    return (
        <div>
          <h1>
            Order History
          </h1>
          <OrderHistory orders = {orderHistory} />
        </div>

    );
  };
  
  export default MyOrders;