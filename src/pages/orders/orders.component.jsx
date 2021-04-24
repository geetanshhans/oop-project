import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetailsStart } from '../../redux/orders/orders.action';
import OrderDetails from '../../components/order-details/order-details.component';

const mapState = ({ orders }) => ({
  orderDetails: orders.orderDetails
});

const Orders = () => {
  const { orderID } = useParams();
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal,orderStatus } = orderDetails;

  useEffect(() => {

    dispatch(
      getOrderDetailsStart(orderID)
    );

  }, []);

  return (
    <div>

      <OrderDetails order={orderDetails} />
      <h3>
        Total: ₹{orderTotal}
      </h3>
      <h3>
          Order Status : {orderStatus}
      </h3>
     {
         orderStatus === "Delivered"
         ?
         <div>
             <h5>Your order was delivered successfully! Please provide a feedback for your order</h5>
             <button>
                <Link to = {`/feedback/${orderID}`}>  Feedback </Link>
            </button>
        </div>
        :
        null
     }
    </div>
  )

}

export default Orders;