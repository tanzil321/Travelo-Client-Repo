import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Showall from './Showall'

const LoadMore = () => {
    
    let loadData = useLoaderData()
    console.log(loadData);
    let{place_name,rating,picture,place_price,_id} = loadData
    return (
        <div className='flex items-center justify-center dark:bg-gray-800  dark:text-gray-100'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-8 gap-24 mb-5 overflow-hidden">
            {
                loadData.map(ldd=><Showall
                ldd={ldd}
                ></Showall>)
            }
            </div>
        </div>
    );
};

export default LoadMore;