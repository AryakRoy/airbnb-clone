import { Button } from '@material-ui/core'
import React from 'react'
import "./style.css"
import SearchResult from '../../components/SearchResult'
import { format, addDays, differenceInDays } from "date-fns"
import stays from "../../stays"

const SearchPage = (props) => {
    const numOfPeople = props.location.state?.numOfPeople ?? 2;
    const startDate = props.location.state?.start ?? new Date();
    const endDate = props.location.state?.end ?? addDays(new Date(), 2);
    const days = differenceInDays(endDate, startDate);

    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>{stays.length} stays &middot; {format(startDate, "d MMMM")} to {format(endDate, "d MMMM")} &middot; {numOfPeople} guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More Filters</Button>
            </div>
            <div>
                {stays.map((stay, index) => (
                    <SearchResult
                        src={stay.imgSrc}
                        location={stay.location}
                        title={stay.title}
                        description={stay.description}
                        star={stay.star}
                        price={stay.price}
                        days={days}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchPage
