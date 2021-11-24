import React from 'react'
import arrow from '../../assets/vector.png'
import slider1 from '../../assets/slider1.png'

import './MainDisplay.scss'
import HotelItem from '../HotelItem/HotelItem'

const MainDisplay = () => {
    return (
        <div className="main">
            <div className="main__header">
                <div className="main__title">
                    <h3> Отели &nbsp;  </h3>
                    <img src={arrow} alt="arrowImg" /> &nbsp;
                    &nbsp;  <h3> Москва  </h3>
                </div>
                <span className="main__date">
                    07 июля 2020
                </span>
            </div>
            <div className="main__slider">
                <img src={slider1} alt="sliderImg" />
                <img src={slider1} alt="sliderImg" />
                <img src={slider1} alt="sliderImg" />
            </div>
            <span className="main__total"> Добавлено в Избранное: <b> 3 </b> отеля</span>
            <div className="hotel-list">
                <HotelItem />
                <HotelItem />
                <HotelItem />
            </div>
        </div>
    )
}

export default MainDisplay
