import React from 'react'



export default function Itemsavings() {
    return (
        <div style={savingsContainer}>
            <div style={savingsHeading}>
                <h2>Total Savings from Discounts</h2>
            </div>
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
