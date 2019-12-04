import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"; 

export default class Services extends Component {

    state={
        Services:[
        {
            icon:<FaCocktail/>,
            title:"gratuit",
            info:'blablabla'
        },
        {
            icon:<FaHiking/>,
            title:"gratuit",
            info:'blablabla'
        },
        {
            icon:<FaShuttleVan/>,
            title:"gratuit",
            info:'blablabla'
        },
        {
            icon:<FaBeer/>,
            title:"gratuit",
            info:'blablabla'
        }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/> 
                <div className="services-center">
                    {this.state.Services.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
