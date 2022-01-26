import React from 'react'
import "./style.css"

const Card = ({ src, title, description, price }) => {
    return (
        <div>
            <div className="card">
                <img src={src} alt={title} />
                <div className="card__info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
