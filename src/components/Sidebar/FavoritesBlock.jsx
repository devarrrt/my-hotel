import React from 'react'
import HotelItem from '../HotelItem/HotelItem'

const FavoritesBlock = () => {
    return (
        <div className="favorites">
            <h3 className="favorites__title">Избранное</h3>
            <span> рейтирг </span> <span> цена </span>
               <HotelItem side />
            <HotelItem side />
            <HotelItem side />

        </div>  
    )
}

export default FavoritesBlock
