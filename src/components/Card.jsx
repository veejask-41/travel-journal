import React from "react";
import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/images/${props.item.img}`} alt={`Picture of ${props.item.title}`} className="card-img"/>
            <div className="card-details">
                <div className="card-location">
                    <FontAwesomeIcon icon={faLocationDot} className="card-location-icon" />
                    <p className="card-country">{props.item.country}</p>
                    <a href={props.item.location} target="_blank" className="card-google-maps">View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <p className="card-date">{props.item.duration.startDate} - {props.item.duration.endDate}</p>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}