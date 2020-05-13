import React from 'react'


export default function Item(props) {
    function calcValue(a, b) {
        console.log(Number(a) * (1 - Number(b)))
    }
    calcValue(props.price, props.discount)
    return (
        <div style={itemContainer}>
            <div style={itemName}>
                <h3>{props.name}</h3>
                <h4>{props.category}</h4>
            </div>

            <div style={itemPrice}>
                <h4>{props.price * (1 - props.discount)}</h4>
                <h6>{props.price}</h6>
            </div>
        </div>
    )
}


const itemContainer = {
    display: 'flex',
    border: '1px solid green'
}

const itemName = {
    width: '60%',
    border: '1px solid orange',
    margin: '0px'
}

const itemPrice = {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid blue'

}