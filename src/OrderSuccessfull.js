import React from "react";
import './OrderSuccessfull.css'
import { Link } from "react-router-dom";

function OrderSuccessfull() {

    return (
        <div className="order-success">
            <div className="order-details">
                <i class='bx bxs-check-circle'></i>
                <h4>Your Order has been taken</h4>
                <Link to="/"><button className="go-home-button">Go Home</button></Link>
            </div>
        </div>
    )
}

export default OrderSuccessfull