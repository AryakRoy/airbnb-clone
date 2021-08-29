import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Search from "../Search"
import "./style.css"
import { useHistory } from "react-router-dom"
const Banner = () => {
    const history = useHistory();
    const [showCalendar, setShowCalendar] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                {showCalendar && <Search />}
                <Button
                    className="banner__searchButton"
                    variant="outlined"
                    onClick={() => setShowCalendar(!showCalendar)}
                >
                    {showCalendar ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination.</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant="text" onClick={() => history.push("/search")} >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
