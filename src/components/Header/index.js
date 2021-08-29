import React from 'react'
import "./style.css"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__icon"
                    src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW"
                    alt="logo"
                />
            </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <KeyboardArrowDownIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
