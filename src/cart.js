import "./cart.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Cart({ cartItems, total, filterCart }) {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const deliveryRate = 1250

    console.log(total)

    return (
        <div className="cart">
            <div className={sidebarOpen ? "sidebarOpen" : "sidebarClosed"}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>Customise</li>
                    <li>SNKRS</li>
                </ul>
            </div>

            <div className="cart-items">
                
                <div className= "cart-items-lists">
                    {cartItems.map((shoe) => (
                        <div className="cart-item">
                            <div className="image">
                                <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt="Shoe pic" />
                            </div>
                            <div className="info">
                                <div className="shoe-rate-and-mrp">
                                    <p id="shoeName">{shoe.name}</p>
                                    <p id="shoeMrp">MRP : {shoe.MRP}</p>
                                </div>
                                <p id="shoeGender">{shoe.gender}</p>
                                <p id="shoeColor">{shoe.color}</p>
                                <i class='bx bx-comment-x' onClick={() => filterCart(shoe.uniqueId)}></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="summary">
                    <h2>Summary</h2>
                    <p>Subtotal : {total}</p>
                    <p>Estimated Delivery & Handling : {total === 0 ? 0 : deliveryRate}</p>
                    <div className="total">
                        <p>Total : {total === 0 ? 0 : total + deliveryRate}</p>
                    </div>
                    <div className="summary-buttons">
                        <Link to="/purchase"><button>Guest Checkout</button></Link>
                        <button>Member Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}