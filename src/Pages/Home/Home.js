import React from 'react'
import Subscrib from '../../Components/Subscrib/Subscrib';
import TopCover from '../../Components/TopCover/TopCover'
import Offer from './../../Components/Offer/Offer';
import Services from './../../Components/Services/Services';

function Home() {
    return (
        <div>
            <TopCover></TopCover>
            <Offer></Offer>
            <Services></Services>
            <Subscrib></Subscrib>
        </div>
    )
}

export default Home
