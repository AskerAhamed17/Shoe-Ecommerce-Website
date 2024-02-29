import React from "react";
import "./Favourites.css"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"

function Favourites({ cartItems, favourites, filterCart , updateParentState }) {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const navigate = useNavigate()

    const updateIt = (shoeName) => {
        updateParentState(shoeName)
    }

    const navigateToBuyShoe = (shoeName) => {
        updateIt(shoeName)
        navigate('/buyShoe')
    }

    return (
        <div className="favourites">
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
            <div className="navbar-2">
                <div className="logo"></div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>Customise</li>
                    <li>SNKRS</li>
                </ul>
                <div className="icons">
                    <i
                        class="bx bx-search-alt-2"
                        style={{ position: "relative", left: "14%" }}
                    ></i>
                    <input placeholder="search" />
                    <i class="bx bx-heart"></i>
                    <Link to="/cart" style={{ color: 'black' }}><i class="bx bx-shopping-bag"></i></Link>
                    <p className={cartItems.length === 0 ? 'nothing-in-cart' : 'cart-numbers'}>{cartItems.length}</p>
                </div>
                <div className="menu-icons">
                    <i class='bx bx-search'></i>
                    <Link to="/cart" style={{ color: 'black' }}><i class='bx bx-cart'></i></Link>
                    <i class='bx bx-user'></i>
                    {sidebarOpen ? <i class='bx bx-x' onClick={() => setSidebarOpen(!sidebarOpen)}></i>
                        : <i class='bx bx-menu' onClick={() => setSidebarOpen(!sidebarOpen)}></i>}
                </div>
            </div>

            <div className="cart-items">
                {favourites.length === 0 ? <div className="no-items-message-fav"><p>No favourite items have added yet</p></div>
                    : <div className="cart-items-lists">
                        {favourites.map((shoe) => (
                            <div className="favourite-cart-item" onClick={() => navigateToBuyShoe(shoe)}>
                                <div className="favourite-image">
                                    <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt="Shoe pic" />
                                </div>
                                <div className="info">
                                    <div className="favourite-shoe-name">
                                        <p id="shoeName">{shoe.name}</p>
                                        <p id="shoeMrp">MRP : {shoe.MRP}</p>
                                    </div>
                                    <p id="shoeGender">{shoe.gender}</p>
                                    <p id="shoeColor">{shoe.color}</p>
                                    <i class='bx bx-comment-x' onClick={() => filterCart(shoe.id)}></i>
                                </div>
                            </div>
                        ))}
                    </div>}
            </div>
        </div>
    )
}

export default Favourites