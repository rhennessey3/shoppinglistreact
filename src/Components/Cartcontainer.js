import React from "react"
import Item from './Item'
import Itemsavings from './Itemsavings'
import shoppingData from '../shoppingData'


export default function Cartcontainer() {
    const item = shoppingData.map(item => <Item name={item.name} category={item.category} price={item.price.original} discount={item.price.discount} />)
    return (
        <div style={cartContainer}>
            <div style={shoppingListContainer}>
                {item}
            </div>
            <Itemsavings />
        </div>
    )
}


const cartContainer = {
    display: 'flex',
    flexDirection: 'row'
}

const shoppingListContainer = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    backgroundColor: 'smokewhite',
    minHeight: '70vh',
    borderRight: '1.5px solid black',
    fontSize: 'calc(10px + 2vmin)',
    color: 'black'
}



