import React from 'react'
import "./style.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({
    src,
    location,
    title,
    description,
    star,
    price,
    total
}) => {
    return (
        <div className="searchResult">
            <img src={src} alt={title} />
            <FavoriteBorderIcon className="searchResult__icon" />
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
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
