import React from "react"
import logo from "../../logo.svg";

function Navbar() {
    return (
        <header className="navbar">
            <img  src={logo} className="App-logo" alt="logo" />
            <h3>
            This is the header
            |~|
            <a href={'/'}>Home </a>
            |~|
            <a href={'/'}>Service</a>
            |~|
            <a href={'/'}>Contact</a>
            |~|
        </h3>
        </header>
    )
}

export default Navbar
