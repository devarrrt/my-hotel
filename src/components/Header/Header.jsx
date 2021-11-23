import React from 'react'
import logoutImg from '../../assets/logout.png'

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <span className="header__logo">Simple Hotel Check</span>
            <div className="header__logout">
                <span> Выйти </span>
                <img src={logoutImg} alt="logout" />
            </div>
        </div>
    )
}

export default Header
