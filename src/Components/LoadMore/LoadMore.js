import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Showall from './Showall'

const LoadMore = () => {
    
    let loadData = useLoaderData()
    console.log(loadData);
    let{place_name,rating,picture,place_price,_id} = loadData
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-12 overflow-hidden     dark:bg-gray-800 justify-center items-center dark:text-gray-100  ">
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