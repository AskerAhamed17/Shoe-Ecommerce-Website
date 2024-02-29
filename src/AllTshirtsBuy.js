import React from "react";
import './AllTshirtsBuy.css'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { allTshirtsObject } from "./AllTshirtsObject";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState , useEffect } from "react";

function AllTshirtsBuy({ parentState, updateParentState, sumAmount , setHeader , locationName}) {

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

    console.log(parentState)

    const navigateToBuyShoe = (shoeName) => {
        updateIt(shoeName)
        navigate('/buyShoe')
    }

    const Men = allTshirtsObject.filter((tshirt) => tshirt.category === "Men's Tshirt")
    const Women = allTshirtsObject.filter((tshirt) => tshirt.category === "Women's Tshirt")
    const Kids = allTshirtsObject.filter((tshirt) => tshirt.category === "Kid's Tshirt")

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
        <div className="all-tshirts">
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
                    {filterGender.All ? allTshirtsObject.map((tshirt) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(tshirt)}>
                            <div className="shoe-image">
                                <img src={tshirt.img} style={{ height: "100%", width: "100%" }} alt='Tshirt pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{tshirt.name}</h3>
                                <p className="shoe-type">{tshirt.type}</p>
                                <h6 className="shoe-mrp">MRP : {tshirt.MRP}</h6>
                            </div>
                        </div>
                    )) : filterGender.Men ? Men.map((tshirt) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(tshirt)}>
                            <div className="shoe-image">
                                <img src={tshirt.img} style={{ height: "100%", width: "100%" }} alt='Tshirt pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{tshirt.name}</h3>
                                <p className="shoe-type">{tshirt.type}</p>
                                <h6 className="shoe-mrp">MRP : {tshirt.MRP}</h6>
                            </div>
                        </div>
                    )) : filterGender.Women ? Women.map((tshirt) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(tshirt)}>
                            <div className="shoe-image">
                                <img src={tshirt.img} style={{ height: "100%", width: "100%" }} alt='Tshirt pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{tshirt.name}</h3>
                                <p className="shoe-type">{tshirt.type}</p>
                                <h6 className="shoe-mrp">MRP : {tshirt.MRP}</h6>
                            </div>
                        </div>
                    )) : Kids.map((tshirt) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(tshirt)}>
                            <div className="shoe-image">
                                <img src={tshirt.img} style={{ height: "100%", width: "100%" }} alt='Tshirt pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{tshirt.name}</h3>
                                <p className="shoe-type">{tshirt.type}</p>
                                <h6 className="shoe-mrp">MRP : {tshirt.MRP}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllTshirtsBuy