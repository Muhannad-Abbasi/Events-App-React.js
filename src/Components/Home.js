import React, { useState, useEffect } from 'react';
import eventsFromAssets from '../assets/eventsFromAssets.json';
import DisplayHome from './DisplayHome';
import './Home.css';

function Home () {

    const [ events, setEvents ] = useState([]);

    useEffect(
        () => {
            setEvents(eventsFromAssets)
        }, []
    )

    return (
        <section className='eventsLibrary'>
            <div className='title'>
                <hr className="left-line"></hr>
                <h1 className='hi'>Events</h1>
                <hr className="right-line"></hr>
            </div>
           
            {events.map( (event, index) => {
                return <DisplayHome event={ event } key={ index } />
            } )}
        </section>
    )
}

export default Home;