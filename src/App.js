import "./App.css";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react";
import Navbar from "./navbar";

function App({ parentState, updateParentState, cartItems, sumAmount , header, setHeader }) {

  const [sidebarOpen,setSidebarOpen] = useState(false)

  const shoes = [
    {
      id: 1,
      name: "Nike Air Zoom TR 1",
      type: "Men's Workout Shoes",
      gender: "Men's shoes",
      color: 'White with orange border',
      description: "With its familiar design lines, heritage athletics aesthetic and visibleMax Air cushioning, the Nike Air Max SC is the perfect way to finish off any outfit. The durable suede and lightweight knit textiles are paired with a sweet Valentine's Day colourway to add a little love to your every step.",
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      MRP: 10795,
    },
    {
      id: 2,
      name: "Nike Metcon 9 AMP",
      type: "Men's Workout Shoes",
      gender: "Men's shoes",
      color: "Milk green",
      img: "https://i.pinimg.com/564x/ee/ea/ca/eeeaca6acf9d09dc9ab6fd769d7d8efb.jpg",
      MRP: 12795,
    },
    {
      id: 3,
      name: "Nike Metcon 9",
      type: "Men's Workout Shoes",
      gender: "Women's shoes",
      color: "white sandal",
      img: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      MRP: 12795,
    },
    {
      id: 4,
      name: "Nike Metcon 9 AMP",
      type: "Men's Workout Shoes",
      gender: "Men's shoes",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      MRP: 10795,
    },
    {
      id: 5,
      name: "Nike Air Zoom TR 1",
      type: "Men's Workout Shoes",
      gender: "Women's shoes",
      img: "https://i.pinimg.com/564x/a1/90/8c/a1908cd846878c63b7bd2498095a8403.jpg",
      MRP: 12795,
    },
    {
      id: 6,
      name: "Nike Air Zoom TR 1",
      type: "Men's Workout Shoes",
      gender: "Men's shoes",
      img: "https://images.unsplash.com/photo-1611510338559-2f463335092c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      MRP: 10795,
    },
  ];

  const whiteShoes = [
    {
      id: 1,
      name: "Air Jordan 1",
      img: "https://images.unsplash.com/photo-1656230259229-aa2634e3352c?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Air Max",
      img: "https://images.unsplash.com/photo-1608379743498-ac08f6d022ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Dunk",
      img: "https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Nike Blazer",
      img: "https://images.unsplash.com/photo-1570051779696-244e9f680cf7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Metcon",
      img: "https://images.unsplash.com/photo-1656230259229-aa2634e3352c?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Running Shoes",
      img: "https://images.unsplash.com/photo-1608379743498-ac08f6d022ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Air Force 1",
      img: "https://images.unsplash.com/photo-1607792246307-2c7ba687b50a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  /* Tshirts */

  const tshirts = [
    {
      id: 1,
      name: "Gray T-Shirt",
      img: "https://i.pinimg.com/564x/13/93/8e/13938e95260b5737b08c9382cebd7a2e.jpg",
      category: "Men's Tshirt",
      MRP: 799
    },
    {
      id: 2,
      name: "Blue T-Shirt",
      img: "https://i.pinimg.com/564x/27/a5/6d/27a56d2b2ecbf30a83a58186c0624601.jpg",
      category: "Men's Tshirt",
      MRP: 899
    },
    {
      id: 3,
      name: "Darkblue T-Shirt",
      img: "https://i.pinimg.com/564x/98/c6/55/98c655582d5244ab24829a07f812f9f1.jpg",
      category: "Men's Tshirt",
      MRP: 1499
    },
    {
      id: 4,
      name: "Green T-Shirt",
      img: "https://i.pinimg.com/564x/c0/92/8d/c0928ddb03973292892d23de4c1e7720.jpg",
      category: "Men's Tshirt",
      MRP: 1299
    },
    {
      id: 5,
      name: "lightGray T-Shirt",
      img: "https://i.pinimg.com/564x/13/93/8e/13938e95260b5737b08c9382cebd7a2e.jpg",
      category: "Men's Tshirt",
      MRP: 999
    },
  ]

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

  const updateIt = (shoeName) => {
    updateParentState(shoeName)
  }

  const navigateToBuyShoe = (shoeName) => {
    updateIt(shoeName)
    navigate('buyShoe')
  }

  let location = useLocation()
    setHeader(location.pathname.split('/').pop())

  return (
    <div className="App">
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
      <div className="navbar-3">
        <h6>Move, Shop, Customise & Celebrate With Us.</h6>
        <p>No matter what you feel like doing today, It's better as a Member</p>
      </div>
      <div className="main-content">
        <div className="large-image"></div>
      </div>
      <div className="medium-content">
        <p id="top">Nike Ekiden Pack</p>
        <h1>THIS SEASON'S FRESH FITS</h1>
        <p id="bottom">The Ekiden is a race like no other</p>
        <p>
          The NIKE EKIDEN pack once again celebrates the spirit of this event
          with shoes to support its runners
        </p>
        <button>Shop</button>
      </div>

      <div className="trending-content">
        <div className="img-1">
          <div className="img-1-content">
            <h2>New Phantom GX</h2>
            <Link to="/allShoes"><button>Shop</button></Link>
          </div>
        </div>
        <div className="img-2">
          <div className="img-2-content">
            <h2>Retro Running Shoes</h2>
            <button>Shop</button>
          </div>
        </div>
      </div>

      <div className="shoes-content">
        <div className="shoes-header">
          <h2>New Workout Essentials</h2>
        </div>

        <div className="shoe-infos">
          {shoes.map((shoe) => (
            <div className="boxes" onClick={() => navigateToBuyShoe(shoe)}>
              <div className="shoe-image">
                <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt="shoe pic"/>
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

      <div className="white-sneakers">
        <p className="header-p-tag">Nike Dynamo 2 EasyOn</p>
        <h1>NIKE EASYON AND GO</h1>
        <p>Nike EasyOn-Designed to put on and get going.</p>
        
        <Link to="/whiteSneakers"><button>Shop</button></Link>
        <div className="list-of-white-sneakers">
          {whiteShoes.map((shoe) => (
            <div className="white-sneaker-image">
              <img src={shoe.img} style={{ height: "100%", width: "100%" }} alt="sneaker pic"/>
              <div className="white-sneaker-img-hover">
                <h2>{shoe.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Clothes */}

      <div className="clothes-section">
        <h3 className="clothes-header">Featured</h3>
        <div className="clothes-image">

        </div>
      </div>

      <div className="perfect-gift-title">
        <h1>GIVE THE PERFECT GIFT</h1>
        <p>Find your perfect pair of clothes along with your shoes</p>
        <Link to={'/allTshirts'}><button>Shop</button></Link>
      </div>

      <div className="shop-tshirts">
        <h4>Latest</h4>
        <div className="tshirts">
          {tshirts.map((element) => {
            return (
              <div className="tshirt" onClick={() => navigateToBuyShoe(element)}>
                <div className="img-div">
                  <img src={element.img} alt="shoe pic"></img>
                </div>
                <div className="tshirt-details">
                  <p className="tshirt-name">{element.name}</p>
                  <p className="tshirt-category">{element.category}</p>
                  <p className="tshirt-mrp">MRP : {element.MRP}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Shop By Sport */}

      <div className="shop-by-sport">
        <p className="shop-by-sport-header">
          Shop By Sport
        </p>
        <div className="shop-by-sport-content">
          <div className="cricket">
            <p className="sport-header">Cricket</p>
            <div className="cricket-image">

            </div>
          </div>

          <div className="football">
            <p className="sport-header">Football</p>
            <div className="football-image"></div>
          </div>

          <div className="basketball">
            <p className="sport-header">Basketball</p>
            <div className="basketball-image"></div>
          </div>
        </div>
      </div>

      {/* Bottom Page */}

      <div className="bottom-page">
        <div className="get-help-content">

          <div className="become-member">
            <p>FIND A STORE</p>
            <p>BECOME A MEMBER</p>
            <p>SEND US FEEDBACK</p>
          </div>

          <div className="get-help">
            <p className="get-help-header">GET HELP</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
          </div>

          <div className="about">
            <p className="about-bottom">ABOUT</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>

          <div className="social-media">
            <p><FaInstagram /></p>
            <p><FaFacebook /></p>
            <p><FaTwitter /></p>
            <p><FaYoutube /></p>
          </div>
        </div>

        <div className="credits-content">

        </div>
      </div>
    </div>
  );
}

export default App;
