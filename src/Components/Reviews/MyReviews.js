import React, { useEffect, useState } from 'react';

const MyReviews = () => {
    const imgSize = {
        width: '100px'
    }

    const [review, setReview]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/comments')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[]);
    
    
    return (
       <div>
        <div>

<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
    <h2 className="mb-4 text-2xl font-semibold leading-tight">My reviews</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full text-xs">

            <thead className="dark:bg-gray-700">
                <tr className="text-center">
                    {/* <th className="p-3">Review Serial</th> */}
                    <th className="p-3">Service Name</th>
                    <th className="p-3 text-center">Service Image</th>
                    <th className="p-3">Review</th>
                    <th className="p-3">Delete</th>
                    <th className="p-3">Update</th>
                    {/* <th className="p-3">Service Image</th> */}
                </tr>
            </thead>
            {
                review.map(rv=>
                    <tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        {/* <td className="p-3">
                                            <p>{rs.sl}</p>
                                        </td> */}
                                        <td className="p-3 text-center">
                                            <p>{rv.name}</p>
                                        </td>
                                        <td className="p-3 text-center">
                                            <p className="dark:text-gray-400 text-center"><img src={rv.pictures} style={imgSize} alt="" /></p>
                                        </td>
                                        <td className="p-3 text-center">
                                            <p className="dark:text-gray-400">{rv.user_text}</p>
                                        </td>

                                        <td className="p-3 text-center">
                                            <button className="text-red-700 p-3" >Delete</button>
                                        </td>

                                        <td className="p-3 text-center">
                                            <button className="text-orange-400 p-3" >Update</button>
                                        </td>

                                    </tr>
			</tbody>
                    
                    )
            }
			
		</table>
	</div>
</div>
        </div>
       </div>
    );
};

export default MyReviews;