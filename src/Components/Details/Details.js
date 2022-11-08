import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    let detailsData = useLoaderData()
    let{place_name} = detailsData
    return (
        <div>
           <h1>This is details: {place_name}</h1> 
        </div>
    );
};

export default Details;