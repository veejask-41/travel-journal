import React from "react"
import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEarthAsia} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    return (
        <div className="nav-bar">
            <FontAwesomeIcon icon={faEarthAsia} className="navbar-logo" />
            <span className="navbar-title">my travel journal.</span>
        </div>
    )
}