import React from 'react'
import "./style.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { IconButton } from '@material-ui/core';
const SearchResult = ({
    src,
    location,
    title,
    description,
    star,
    price,
    days
}) => {
    return (
        <div className="searchResult">
            <img src={src} alt={title} />
            <div className="searchResult__icon">
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
            </div>
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchResult__price">
                        <h2>₹{price} / night</h2>
                        <p>₹{price * days} per person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
