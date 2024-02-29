import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import App from "./App";
import BuyShoe from "./buyShoe";
import AllShoesBuy from "./AllShoesBuy";
import AllTshirtsBuy from "./AllTshirtsBuy";
import Cart from "./cart";
import { useState } from "react";
import AllWhiteSneakers from "./White Sneakers";
import Purchase from "./Purchase";
import OrderSuccessfull from "./OrderSuccessfull";
import Favourites from "./Favourites";
import Navbar from "./navbar";

export default function Main() {
  const [parentState, setParentState] = useState('')

  const [cartItems, setCartItems] = useState([])

  const [locationName, setLocationName] = useState()

  const [favourites, setFavourites] = useState([])

  const [total, setTotal] = useState(0)

  const sumAmount = () => {
    const mrps = []
    cartItems.map((product) => {
      mrps.push(product.MRP)
    })
    const total = mrps.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    setTotal(total)
  }

  const addItemToCart = (shoe) => {
    setCartItems([...cartItems, shoe])
    console.log(cartItems)
  }

  const addItemToFavourites = (shoe) => {
    setFavourites([...favourites, shoe])
  }

  const updateParentState = (shoeName) => {
    setParentState(shoeName)
  }

  const filterCart = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.uniqueId !== id))
  }


  const setHeader = (header) => {
    setLocationName(header)
  }

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} locationName={locationName} setHeader={setHeader}/>
      <Routes>
        <Route path="/" element={<App setHeader={setHeader} header={locationName} parentState={parentState} updateParentState={updateParentState} cartItems={cartItems} sumAmount={sumAmount} />} />


        <Route path="/buyShoe" element={<BuyShoe parentState={parentState} updateParentState={updateParentState} cartItems={cartItems} addItemToCart={addItemToCart}
          sumAmount={sumAmount} addItemToFavourites={addItemToFavourites} />} />


        <Route path="/allShoes" element={<AllShoesBuy setHeader={setHeader} locationName={locationName} parentState={parentState} updateParentState={updateParentState} sumAmount={sumAmount} />} />


        <Route path="/cart" element={<Cart cartItems={cartItems} addItemToCart={addItemToCart} total={total} sumAmount={sumAmount} filterCart={filterCart} />} />

        <Route path="/favourites" element={<Favourites favourites={favourites} cartItems={cartItems} filterCart={filterCart} updateParentState={updateParentState} />} />


        <Route path="/whiteSneakers" element={<AllWhiteSneakers cartItems={cartItems} setHeader={setHeader} locationName={locationName} parentState={parentState} updateParentState={updateParentState} sumAmount={sumAmount} />} />


        <Route path="/allTshirts" element={<AllTshirtsBuy setHeader={setHeader} locationName={locationName} parentState={parentState} updateParentState={updateParentState} sumAmount={sumAmount} />} />

        <Route path="/purchase" element={<Purchase cartItems={cartItems} sumAmount={sumAmount} total={total} setCartItems={setCartItems} />} />

        <Route path="/orderSuccess" element={<OrderSuccessfull />} />


      </Routes>
    </BrowserRouter>
  )
}