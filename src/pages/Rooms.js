import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

// 1h 11min


const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner 
                title="Nos chambres">
                <Link to='/' className="btn-primary">
                    Acceuil
                </Link>
            </Banner>
        </Hero>
    )
}

export default Rooms;
