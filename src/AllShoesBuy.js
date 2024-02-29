import "./AllShoesBuy.css"
import { Link } from "react-router-dom";
import { AllShoesObjects } from "./AllShoesObjects"
import { useNavigate ,useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState , useEffect} from "react";
import { allTshirtsObject } from "./AllTshirtsObject";

export default function AllShoesBuy({ parentState, updateParentState, sumAmount , setHeader , locationName}) {
    
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

    const Men = AllShoesObjects.filter((shoe) => shoe.gender === "Men's shoes")
    const Women = AllShoesObjects.filter((shoe) => shoe.gender === "Women's shoes")
    const Kids = AllShoesObjects.filter((shoe) => shoe.gender === "Kid's shoes")

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
        <div className="allShoes-div">
            <div className={sidebarOpen ? "sidebarOpen" : "sidebarClosed"}>
                <ul>
                    <li>New & Featured</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>Customise</li>
                    <li>SNKRS</li>
                </ul>
            </div>

            <div className="allShoesList">
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
                <div className="allShoes">
                    {filterGender.All ? AllShoesObjects.map((shoe) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(shoe)}>
                            <div className="shoe-image">
                                <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{shoe.name}</h3>
                                <p className="shoe-type">{shoe.type}</p>
                                <h6 className="shoe-mrp">MRP : {shoe.MRP}</h6>
                            </div>
                        </div>
                    )) : filterGender.Men ? Men.map((shoe) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(shoe)}>
                            <div className="shoe-image">
                                <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{shoe.name}</h3>
                                <p className="shoe-type">{shoe.type}</p>
                                <h6 className="shoe-mrp">MRP : {shoe.MRP}</h6>
                            </div>
                        </div>
                    )) : filterGender.Women ? Women.map((shoe) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(shoe)}>
                            <div className="shoe-image">
                                <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{shoe.name}</h3>
                                <p className="shoe-type">{shoe.type}</p>
                                <h6 className="shoe-mrp">MRP : {shoe.MRP}</h6>
                            </div>
                        </div>
                    )) : Kids.map((shoe) => (
                        <div className="boxes" onClick={() => navigateToBuyShoe(shoe)}>
                            <div className="shoe-image">
                                <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt='sneaker pic' />
                            </div>
                            <div className="shoe-details">
                                <h3 className="shoe-name">{shoe.name}</h3>
                                <p className="shoe-type">{shoe.type}</p>
                                <h6 className="shoe-mrp">MRP : {shoe.MRP}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}