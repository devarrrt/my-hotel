import React from 'react'
import { Header, MainDisplay, Sidebar } from '../../components'

import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <div className="home__display">
                <Sidebar />
                <MainDisplay />
            </div>
        </div>
    )
}

export default HomePage
