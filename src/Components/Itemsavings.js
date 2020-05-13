import React from 'react'
import shoppingData from '../shoppingData'



export default function Itemsavings() {

    const totalValue = shoppingData.reduce((acc, obj) => {
        return acc + obj.price.discount
    }, 0)

    return (
        <div style={savingsContainer}>
            <div style={savingsHeading}>
                <h2>Total Savings from Discounts</h2>
            </div>
            <>
                {totalValue}
            </>
        </div>
    )
}



const savingsContainer = {
    display: 'flex',
    width: '30%'
}

const savingsHeading = {
    display: 'flex'
}
