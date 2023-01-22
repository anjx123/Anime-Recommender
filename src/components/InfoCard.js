import React, { useEffect } from 'react';
import "./InfoCard.css"

function InfoCard(props) {
    return (
        <div className="InfoCard-container">
            <div className="InfoCard-set">
                <img 
                    src={props.imgsrc} 
                    alt={props.imgalt}
                    height="400"
                />

                <div className="InfoCard-detail">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;