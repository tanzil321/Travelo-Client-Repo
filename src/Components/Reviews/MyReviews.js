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
            fetch(`https://travelo-server.vercel.app/comments/${id}`,{
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
          {
            review.length===0?
            <div className='h-screen py-80'>
                <div className="flex flex-col  max-w-md mx-auto gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-teal-400">
			<path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
			<rect width="32" height="136" x="240" y="112"></rect>
			<rect width="32" height="32" x="240" y="280"></rect>
		</svg>No Reviews Added
	</h2>
	
</div>
            </div>
            :
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
          }
          </div>
    
    );
};

export default MyReviews;