import React from 'react'
import { useHistory } from 'react-router-dom';
import './Home.css';

const DisplayHome = ({event}) => {

    const history = useHistory();

    return (
        <div className='container'>
            <div>
                <p className='date'>{event.date}</p>
            </div>
            <div className='info'>
                <h3 className='events-name' onClick={ () => history.push(`/confirmation/${event.id}`) }>{event.eventsName}</h3>
                <p className='address'>{event.address}</p>
                <p>{event.time}</p>
                <p className='price'>{event.price}</p>
                <hr className="center-line"></hr>
            </div>
        </div>
    )
}

export default DisplayHome;
