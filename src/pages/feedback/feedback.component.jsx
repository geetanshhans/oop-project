import React from "react";
import { useParams } from "react-router";

const FeedBack = () => {
    const { orderID } = useParams()
    console.log(orderID);
        return(
            <div>
            <h1>
                Please provide your valuable feedback for the order
            </h1>
            <h3>
                {orderID}
            </h3>
            </div>
        )
}

export default FeedBack;