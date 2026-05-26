import React, {useState} from 'react'
import './Menu.css'
import Navbar from "../Navbar/Navbar";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

const foodList = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: 'https://images.unsplash.com/photo-1588285551270-035a6d84c7b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnV0dGVybWlsayUyMHBhbmNha2VzfGVufDB8fDB8fHww',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: 'https://plus.unsplash.com/premium_photo-1664392115681-28de35ca10a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluZXIlMjBkb3VibGV8ZW58MHx8MHx8fDA%3D',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: 'https://plus.unsplash.com/premium_photo-1695035007016-f7976bbb64d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29kemlsbGElMjBtaWxrc2hha2V8ZW58MHx8MHx8fDA%3D',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: 'https://images.unsplash.com/photo-1617979417434-d80fbd960c90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnJTIwbHVuY2h8ZW58MHx8MHx8fDA%3D',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fHww',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: 'https://images.unsplash.com/photo-1742859052497-f8bbc8366a32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFjb24lMjBvdmVyZmxvd3xlbnwwfHwwfHx8MA%3D%3D',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: 'https://images.unsplash.com/photo-1700835880346-75df911b8fdc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBjbGFzc2ljJTIwbHVuY2h8ZW58MHx8MHx8fDA%3D',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: 'https://plus.unsplash.com/premium_photo-1726765809389-62f3c22f3de7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hha2V8ZW58MHx8MHx8fDA%3D',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]

const Menu = () => {
    const [category, setCategory] = useState('all')

    return (
        <div className={'menu'}>
            <Navbar setCategory={setCategory}/>
            <div className={'food-list'}>
                {foodList.map(food => {
                    if (category === 'all' || category === food.category) {
                        return (
                            <FoodDisplay food={food} key={food.id} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Menu