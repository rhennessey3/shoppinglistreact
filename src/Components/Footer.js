import React from 'react'
import shoppingData from '../shoppingData'



export default function Footer() {

    const totalValue = shoppingData.reduce((acc, obj) => {
        return acc + obj.price.original
    }, 0)
    return (
        <div style={appFooter}>
            <h5>Total {Math.round(totalValue * 10) / 10}</h5>
        </div>
    )
}

const appFooter = {
    display: 'flex',
    alignItems: 'flex-end'
}