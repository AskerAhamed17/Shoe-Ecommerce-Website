import './buyShoe.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function BuyShoe({ parentState, cartItems, addItemToCart , addItemToFavourites, sumAmount }) {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className='main-div'>
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
            <div className="buy-shoe-content">
                <div className='shoe-info'>
                    <div className='shoe-image-in'>
                        <img src={parentState.img} style={{ height: "100%", width: "100%" }} alt='shoe pic' />
                    </div>
                    <div className='shoe-rate'>
                        <p id='shoe-name'>{parentState.name}</p>
                        <p id='shoe-gender'>{parentState.gender}</p>
                        <p id='shoe-mrp'>MRP : {parentState.MRP}</p>
                        <p id='taxes'>Incl. of taxes</p>
                        <p id='taxes'>Also included all applicable duties</p>
                        <div className='select-size'>
                            <div className='size'>UK 2</div>
                            <div className='size'>UK 2.5</div>
                            <div className='size'>UK 3</div>
                            <div className='size'>UK 3.5</div>
                            <div className='size'>UK 4</div>
                            <div className='size'>UK 4.5</div>
                            <div className='size'>UK 5</div>
                            <div className='size'>UK 5.5</div>
                            <div className='size'>UK 6</div>
                            <div className='size'>UK 6.5</div>
                            <div className='size'>UK 7</div>
                            <div className='size'>UK 7.5</div>
                        </div>
                        <div className='shoe-rate-buttons'>
                            <button onClick={() => addItemToCart(parentState)}>Add to Bag</button>
                            <span><button onClick={() => addItemToFavourites(parentState)}>Favourite</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}