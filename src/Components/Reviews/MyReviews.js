import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext';
import ReviewsCard from './ReviewsCard';

const MyReviews = () => {
    const imgSize = {
        width: '100px'
    }



    const {user,logout} = useContext(AuthContext)
    const [review, setReview]=useState([])
    useEffect(()=>{
        fetch(`https://travelo-server.vercel.app/comments?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('traveloToken')}`
            }
        })
        .then(res => {

            if (res.status === 401 || res.status === 403) {
                return logout()
            }
            return res.json()
        })
        .then(data=>{
            const userWiseReview = data.filter(d=>d.customerEmail === user?.email)
            setReview(userWiseReview)
        })
    },[logout,user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want remove this review ?');
       
        console.log(id)
        if(proceed){
            fetch(`http://localhost:5000/comments/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('Deleted Successfully !!')
                    const remaining = review.filter(odr=>odr._id!==id)
                    setReview(remaining)
                }
            })
        }
}
   
    return (
       <div>
          <div className="container flex p p-2 mx-auto sm:p-4 justify-center dark:text-gray-100">
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
                        handleDelete={handleDelete}
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