import React from "react"
import ReactDom from "react-dom"

function Header() {
    return (
        <div style={appHeader}>
            <header >
                <h1>My Shopping List</h1>
            </header>
        </div >
    )
}

const appHeader = {
    display: 'flex',
    minHeight: '10vh'
}

export default Header 