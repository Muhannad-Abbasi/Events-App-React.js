import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import eventsFromAssets from '../assets/eventsFromAssets.json';
import './Complete.css';

function Complete() {

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
        <div className='complete-container'>
            <div className='message-container'>
                <hr className="left-line"></hr>
                <h2 className='complete-message'>Thanks for your reservation</h2>
                <hr className="right-line"></hr>
            </div>


            <div className='info-container-border'>
                <div>
                    <hr className="left-line"></hr>
                    <p className='receipt'>What</p>
                    <hr className="right-line"></hr>
                    <h3>{event.eventsName}</h3>
                </div>
                <div>
                    <hr className="left-line"></hr>
                    <p className='receipt'>Where</p>
                    <hr className="right-line"></hr>
                    <h3>{event.address}</h3>
                </div>
                <div>
                    <hr className="left-line"></hr>
                    <p className='receipt'>When</p>
                    <hr className="right-line"></hr>
                    <p className='time'>{event.date} {event.time}</p>
                </div>
                <div className='rip'></div>
                <div className='barcode-container'>
                    <div className="barcode"></div>                    
                </div>

            </div>
            <div>
                <button className='complete-button' onClick={ () => history.push('/') }>Home</button>
            </div>
        </div>
    )
    
}

export default Complete;