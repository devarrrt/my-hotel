import React from 'react'
import FavoritesBlock from './FavoritesBlock'
import SideForm from './SideForm'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SideForm/>
            <FavoritesBlock/>
        </div>
    )
}

export default Sidebar
