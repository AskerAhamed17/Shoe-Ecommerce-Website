import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

function Navbar({ sumAmount, cartItems, sidebarOpen, setSidebarOpen, setHeader, locationName}) {

    const navigate = useNavigate()

    const [inputValue,setInputValue] = useState()

    const searchForProducts = () => {
        if(inputValue.includes('tshirts')){
          navigate('allTshirts')
        }
        else if(inputValue.includes('shoes')){
          navigate('allShoes')
        }
        else if(inputValue.includes('whitesneakers') || inputValue.includes('sneakers')){
          navigate('whiteSneakers')
        }
        else{
          console.log('not worked !',inputValue)
        }
      }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'){
          searchForProducts()
        }
      }

    const location = useLocation()

    const title = location.pathname.split('/').pop()

    // const setTitle = () => {
    //     if(title === 'whiteSneakers'){
    //         setHeader('White Sneakers')
    //     }
    //     else if(title === 'allShoes'){
    //         setHeader('All Shoes')
    //     }
    //     else if(title === 'allTshirts'){
    //         setHeader('All T-Shirts')
    //     }
    //     else {
    //         setHeader('')
    //     }
    // }

    // useEffect(()=>{
    //     setTitle()
    // },[location])

    return (
        <div className="navbar">
            <div className="navbar-2">
                <div className="logo"></div>
                <h4>{locationName}</h4>
                <ul>
                    <li>New & Featured</li>
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
                    <input placeholder="search" onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleKeyPress} />
                    <Link to="/favourites" style={{ color: 'black' }}><i class="bx bx-heart"></i></Link>
                    <Link to="/cart" style={{ color: 'black' }} onClick={sumAmount}><i class="bx bx-shopping-bag"></i></Link>
                    <p className={cartItems.length === 0 ? 'nothing-in-cart' : 'cart-numbers'}>{cartItems.length}</p>
                </div>
                <div className="menu-icons">
                    <i class='bx bx-search'></i>
                    <Link to="/cart" style={{ color: 'black' }} onClick={sumAmount}><i class='bx bx-cart'></i></Link>
                    <p className={cartItems.length === 0 ? 'nothing-in-cart' : 'cart-numbers'} style={{position:'relative',right:"10%"}}>{cartItems.length}</p>
                    <i class='bx bx-user'></i>
                    {sidebarOpen ? <i class='bx bx-x' onClick={() => setSidebarOpen(!sidebarOpen)}></i>
                        : <i class='bx bx-menu' onClick={() => setSidebarOpen(!sidebarOpen)}></i>}
                </div>
            </div>
        </div>
    )
}

export default Navbar