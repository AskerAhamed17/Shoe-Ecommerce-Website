import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { whiteSneakers } from "./White Sneakers Objects";
import { useNavigate , useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

function AllWhiteSneakers({ parentState, updateParentState, sumAmount , locationName , setHeader }) {

    // useEffect(()=>{
    //     setHeader(location)
    // },[])

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [filterGender, setFilterGender] = useState({
        All: true,
        Men: false,
        Women: false,
        Kids: false
    })

    const navigate = useNavigate()

    const updateIt = (shoeName) => {
        updateParentState(shoeName)
    }

    const navigateToBuyShoe = (shoeName) => {
        updateIt(shoeName)
        navigate('/buyShoe')
    }

    const Men = whiteSneakers.filter((shoe) => shoe.gender === "Men's shoes")
    const Women = whiteSneakers.filter((shoe) => shoe.gender === "Women's shoes")
    const Kids = whiteSneakers.filter((shoe) => shoe.gender === "Kid's shoes")

    const [inputValue, setInputValue] = useState()

    const searchForProducts = () => {
        if (inputValue.includes('tshirts')) {
            navigate('/allTshirts')
        }
        else if (inputValue.includes('shoes')) {
            navigate('/allShoes')
        }
        else if (inputValue.includes('whitesneakers') || inputValue.includes('sneakers')) {
            navigate('/whiteSneakers')
        }
        else {
            console.log('not worked !', inputValue)
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchForProducts()
        }
    }

    return (
        <div className="all-white-sneakers">

            <div className="all-tshirts-list">
                <div className="sort-by">
                    <Dropdown>
                        <Dropdown.Toggle className="sort-by-button" style={{ backgroundColor: "black" }}>
                            Sort By
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setFilterGender({ ...filterGender, All: true, Men: false, Women: false, Kid: false })}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterGender({ ...filterGender, All: false, Men: true, Women: false, Kid: false })}>Men</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterGender({ ...filterGender, All: false, Men: false, Women: true, Kid: false })}>Women</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterGender({ ...filterGender, All: false, Men: false, Women: false, Kid: true })}>Kids</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="tshirt-images">

                    {filterGender.All ? whiteSneakers.map((sneaker) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(sneaker)}>
                            <div className="shoe-image">
                                <img src={sneaker.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{sneaker.name}</h3>
                                <p className="shoe-type">{sneaker.type}</p>
                                <h6 className="shoe-mrp">MRP : {sneaker.MRP}</h6>
                            </div>
                        </div>
                    )) : filterGender.Men ? Men.map((sneaker) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(sneaker)}>
                            <div className="shoe-image">
                                <img src={sneaker.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{sneaker.name}</h3>
                                <p className="shoe-type">{sneaker.type}</p>
                                <h6 className="shoe-mrp">MRP : {sneaker.MRP}</h6>
                            </div>
                        </div>
                    )) : filterGender.Women ? Women.map((sneaker) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(sneaker)}>
                            <div className="shoe-image">
                                <img src={sneaker.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{sneaker.name}</h3>
                                <p className="shoe-type">{sneaker.type}</p>
                                <h6 className="shoe-mrp">MRP : {sneaker.MRP}</h6>
                            </div>
                        </div>
                    )) : Kids.map((sneaker) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(sneaker)}>
                            <div className="shoe-image">
                                <img src={sneaker.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{sneaker.name}</h3>
                                <p className="shoe-type">{sneaker.type}</p>
                                <h6 className="shoe-mrp">MRP : {sneaker.MRP}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllWhiteSneakers