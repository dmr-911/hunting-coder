import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { set } from 'react-hook-form';

const EventsList = ({list}) => {
    const [events, setEvents] = useState(list);
    const router = useRouter();

    const fetchSportEvents = async () =>{
        const res = await fetch('http://localhost:4000/events?category=sports');
        const data = await res.json()
        setEvents(data);
        router.push('/events?category=sports', undefined, {shallow: true})
    };
    return (
        <div>
            <h3>List of events</h3>
            <button onClick={fetchSportEvents}>Sports</button>
        {
            events.map(event =><div key={event.id}>
                    <h2>{event.title} {event.description} | {event.category}</h2>
                </div>
            )
        }
        </div>
    );
};

export default EventsList;

export async function getServerSideProps(context){
    const {query} = context;
    const {category} = query;
    const queryString = category ? 'category=sports' : '';
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();

    return {
        props : {
            list : data
        }
    }
}