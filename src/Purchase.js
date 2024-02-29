import React from "react";
import "./purchase.css"
import { Link } from "react-router-dom";

function Purchase({ total , cartItems , setCartItems, filterCart}) {
    return (
        <div className="purchase">
            <div className="purchase-content">
                <div className="products-to-purchase">
                    <h3>Order Summary</h3>
                    <p>Subtotal : {total}</p>
                    <p>Delivery / Shipping : 1250</p> 
                    <div className="total">
                        <p>Total : {total === 0 ? 0 : total + 1250}</p>
                    </div>
                    <div className={"cart-items-lists"}>
                        {cartItems.map((shoe) => (
                            <div className="products-to-be-delivered">
                                <div className="cart-item">
                                <div className="new-image">
                                    <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt="Shoe pic" />
                                </div>
                                <div className="info">
                                    <div className="shoe-rate-and-mrp">
                                        <p id="shoeName">{shoe.name}</p>
                                        <p id="shoeMrp">MRP : {shoe.MRP}</p>
                                    </div>
                                    <i class='bx bx-comment-x' onClick={() => filterCart(shoe.id)}></i>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div> 
                <div className="delivery-address">
                    <h5>Enter your Name and Address</h5>
                    <input placeholder="Enter Name"></input>
                    <input placeholder="Enter Address Line 1"></input>
                    <input placeholder="Enter Address Line 2"></input>
                    <input placeholder="State"></input>
                    <input placeholder="Country"></input>
                    <h5>What's your contact information ?</h5>
                    <input placeholder="Enter Email Id" type="email"></input>
                    <input placeholder="Enter Phone Number"></input>
                    <Link to="/orderSuccess"><button className="confirm-order" onClick={()=>setCartItems([])}>Confirm Order</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Purchase