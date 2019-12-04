import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner 
                    title="Chambres de luxes" 
                    subtitle="decouvez les chambres pres de chez vous !">
                    <Link to='/rooms' className="btn-primary">
                        Nos chambres 
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
        </>
    )
}


