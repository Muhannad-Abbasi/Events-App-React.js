import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import eventsFromAssets from '../assets/eventsFromAssets.json';
import './Confirmation.css';

function Confirmation() {

    const history = useHistory();
    const { id } = useParams();
    const [ event, setEvent ] = useState({});

    useEffect(
        () => {
            const selectedEvent = eventsFromAssets.filter(
                (eventObj) => {
                    return eventObj.id === parseInt(id);
                }
            );
            setEvent(selectedEvent[0])
        }, []
    )

    return(
        <section className='confirmation-container'>
            <div className='message-container'>
                <hr className="left-line"></hr>
                <h3 className='confirmation-message'>You are about to score some tickets to</h3>
                <hr className="right-line"></hr>
            </div>


            <h2 className='events-name-section-2'>{event.eventsName}</h2>
            <span>{event.date}</span>
            <span>{event.time}</span>
            <p className='address'>@ {event.address}</p>
            <p className='price'>{event.price}</p>

            <div className='buttons'>
                <button className='back-button' onClick={ () => history.push('/') }>Back</button>

                <button className='reserve-button' onClick={ () => history.push(`/complete/${event.id}`) }>Reserve</button>

            </div>




        </section>
    )
    
}

export default Confirmation;