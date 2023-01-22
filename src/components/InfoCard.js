import React, { useEffect } from 'react';
import "./InfoCard.css"

function InfoCard(props) {
    return (
        <div className="InfoCard-container">
                <img 
                    src={props.imgsrc} 
                    alt={props.imgalt}
                    width="200"
                />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default InfoCard;