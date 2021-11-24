import React from 'react'
import house from '../../assets/house.png'
import star from '../../assets/star.png'
import heart from '../../assets/heart.png'

import './HotelItem.scss'

//создание карточки отеля
const HotelItem = ({ side }) => {
    return (
        <div className={side ? 'hotel__item side' : 'hotel__item' }>
            <div className={side ? "hotel__item-info side" : "hotel__item-info" }>
                <img className={side ? "hotel__item-img side" : "hotel__item-img" }
                    src={house} alt="houeImg" />
                    <div>
                    <p> Moscow Marriott Grand Hotel </p>
                    <div className="hotel__item-days"> <span> 28 June, 2020 </span> &mdash;<span> 1 день </span> </div>
                    <div className="hotel__item-stars"> 
                    <img src={star} alt="starImg" />
                    <img src={star} alt="starImg"/>
                    <img src={star} alt="starImg" />
                    <img src={star} alt="starImg" />
                    </div>
                </div>
            </div>
            {/* <div className="hotel__item-price">
                <img src={heart} alt="heartImg" />
                <span className="hotel__item-price__bottom">
                    Price: <span> 23 924 ₽ </span>
                </span>
            </div> */}
        </div>
    )
}

export default HotelItem
