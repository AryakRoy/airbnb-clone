import React from 'react'
import "./style.css"

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; {new Date().getUTCFullYear()} Airbnb Clone ! No rights reserved - this is a clone!</p>
            <p>Privacy &middot; Terms &middot; Sitemap &middot; Company Details</p>
        </div>
    )
}

export default Footer
