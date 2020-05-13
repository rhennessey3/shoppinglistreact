import React from 'react'


export default function Item(props) {

    return (
        <div style={itemContainer}>
            <div style={itemName}>
                <h3>{props.name}</h3>
                <h4>{props.category}</h4>
            </div>

            <div style={itemPrice}>
                {props.discount != 0 ? <h4>{Math.round((props.price * (1 - props.discount)) * 10) / 10}</h4> : null}
                {props.discount === 0 ? <h6>{props.price}</h6> : <h6 style={{ color: "red" }} > {props.price}</h6>}
            </div>

        </div >
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