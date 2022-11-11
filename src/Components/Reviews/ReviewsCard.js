import React, { useEffect, useState } from 'react';

const ReviewsCard = ({rev,handleDelete}) => {
    const imgSize = {
        width: '100px'
    }
    console.log(rev);
    const {review, serviceId} = rev;


    const [service,setservices] = useState([])
    useEffect(()=>{
     fetch('https://travelo-server.vercel.app/services')
     .then(res=>res.json())
     .then(data=>{
         const speceficService = data.filter(d=> d._id === serviceId)
         setservices(speceficService)
     })
    },[serviceId])

    console.log(service)

 
    return (
       
                    <tr className="border-b w-full border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                       
                        <td className="p-3">
                            <p>{service[0]?.place_name}</p>
                        </td>
                        <td className="p-3">
                            <p className="dark:text-gray-400"><img src={service[0]?.picture
} style={imgSize} alt="" /></p>
                        </td>
                        <td className="p-3">
                            <p className="dark:text-gray-400">{review}</p>
                        </td>

                        <td className="p-3">
                            <button onClick={()=> handleDelete(service[0]._id)} className="text-red-700 p-3" >Delete</button>
                        </td>

                        <td className="p-3">
                            <button className="text-orange-400 p-3" >Update</button>
                        </td>

                    </tr>




        
    );
};

export default ReviewsCard;