import React from 'react'
import house from '../../assets/house.png'
import star from '../../assets/star.png'
import heart from '../../assets/heart.png'

import './HotelItem.scss'

//создание карточки отеля
const HotelItem = () => {
    return (
        <div className="hotel__item">
            <img className="hotel__item-img"
                src={house} alt="houeImg" />
                
            <div className="hotel__item-info">
                <div><h4> Moscow Marriott Grand Hotel </h4>
                    <div> <span> 28 June, 2020 </span> &mdash;<span> 1 день </span> </div>
                    <img src={star} alt="starImg" />
                    <img src={star} alt="starImg"/>
                    <img src={star} alt="starImg" />
                    <img src={star} alt="starImg" />
                </div>
                <div className="hotel__item-price">
                    <img src={heart} alt="heartImg" />
                    <span className="hotel__item-price__bottom">
                        Price: <span> 23 924 ₽ </span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default HotelItem
