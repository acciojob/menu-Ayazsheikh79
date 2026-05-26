import React from'react'
import './Navbar.css'

const Navbar = ({setCategory}) => {
    return (
        <div className="navbar">
            <h1>Our Menu</h1>
            <hr/>
            <ul>
                <li
                    onClick={() => setCategory('all')}
                >
                    All
                </li>
                <li id={'filter-btn-1'}
                    onClick={() => setCategory('breakfast')}
                >
                    Breakfast
                </li>
                <li id={'filter-btn-2'}
                    onClick={() => setCategory('lunch')}
                >
                    Lunch
                </li>
                <li id={'filter-btn-3'}
                    onClick={() => setCategory('shakes')}
                >
                    Shakes
                </li>
            </ul>
        </div>
    )
}

export default Navbar;