import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import ReviewsCard from './ReviewsCard';

const MyReviews = () => {
    const imgSize = {
        width: '100px'
    }



    const {user} = useContext(AuthContext)
    const [review, setReview]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/comments')
        .then(res=>res.json())
        .then(data=>{
            const userWiseReview = data.filter(d=>d.customerEmail === user?.email)
            setReview(userWiseReview)
        })
    },[user?.email]);
   
    return (
       <div>
          <div className="container ml-96  p-2  sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold ">My reviews</h2>
                 <div className="overflow-x-auto">
            <table className=" text-xs">
                      <thead className="dark:bg-gray-700">
                           <tr className="">
                    {/* <th className="p-3">Review Serial</th> */}
                    <th className="p-3">Service Name</th>
                    <th className="p-3 ">Service Image</th>
                    <th className="p-3">Review</th>
                    <th className="p-3">Delete</th>
                    <th className="p-3">Update</th>
                    {/* <th className="p-3">Service Image</th> */}
                </tr>
                  </thead>
                  <tbody className="  text-xs">
                  {
                    review.map(rev=><ReviewsCard
                        key={rev._id}
                        rev={rev}
                   >

                   </ReviewsCard>)
                  }
                
                
                </tbody> 
          </table>
          </div>
          </div>
          </div>
    
    );
};

export default MyReviews;