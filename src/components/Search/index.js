import React, { useState } from 'react'
import "./style.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom"
const Search = () => {
    const history = useHistory();
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [numOfPeople, setNumOfPeople] = useState(2)
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    const handleSelect = (ranges) => {
        setstartDate(ranges.selection.startDate)
        setendDate(ranges.selection.endDate)
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of People</h2>
            <input type="number" value={numOfPeople} defaultValue={2} min={0} onChange={(event) => setNumOfPeople(event.target.value)} />
            <Button
                onClick={() => history.push("/search", {
                    start: startDate,
                    end: endDate,
                    numOfPeople: numOfPeople,
                })}
            >
                Search Airbnb
            </Button>
        </div >
    )
}

export default Search
