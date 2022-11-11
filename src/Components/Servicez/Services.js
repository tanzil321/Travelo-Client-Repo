import React, { useContext } from 'react';

import { AuthContext } from '../Context/UserContext';
import LoadMore from '../LoadMore/LoadMore';


const Services = () => {
    
    const servicesx= useContext(AuthContext)
    
    console.log(servicesx);
    return (
        
        <div className='grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-2'>
            {
                servicesx.map(service=><LoadMore
                key={service._id}
                service={service}
                >

                </LoadMore>)
            }
        </div>
    );
};

export default Services;