import React from 'react'
import './FoodDisplay.css'

const FoodDisplay = ({food}) => {
    return (
        <div className="food-display" data-test-id={`menu-item-${food.category}`}>
            <div className={'food-img'}>
                <img src={food.img} alt={food.name}/>
            </div>
            <div className={'food-content'}>
                <div className={'food-header'}>
                    <h3>{food.title}</h3>
                    <h3 className={'price'}>${food.price}</h3>
                </div>
                <hr/>
                <div className={'food-desc'}>
                    {food.desc}
                </div>
            </div>
        </div>
    )
}

export default FoodDisplay