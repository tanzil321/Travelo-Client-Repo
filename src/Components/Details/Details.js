import { comment } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import  { AuthContext } from '../Context/UserContext';
import CardDetails from './CardDetails';


const Details = () => {
	const {user} = useContext(AuthContext)

    let detailsData = useLoaderData()
    let{place_name,details,picture,user_id,_id} = detailsData;
    let [data,setData]=useState([])
	
	const handleSubmit =(e)=>{
		e.preventDefault()
		
		const form = e.target
		
		
		const reviews = {
			customerName: user?.displayName,
            customerEmail: user?.email,
            customerPhoto: user?.photoURL,
			serviceId: _id,
            review: form.review.value,
			
		}
		
		form.reset()
		fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => {
                res.json()
            })
            .then(info => {
                console.log(info)
                setData(info)
            })
	}

    const [reviews, setReview]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/comments')
        .then(res=>res.json())
        .then(data=>{ 
			const commentServicWise = data.filter(d=>d.serviceId === _id)
			setReview(commentServicWise)
		})

    },[reviews,_id]);

console.log(reviews)

    
    return (
        <div className='gap-10 pl-10 pr-10 dark:bg-gray-800 dark:text-gray-100  justify-center items-center pt-8 py-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
           <div className="max-w-lg  p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<Link rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Photography</Link>
		</div>
		<Link to="/services" rel="noopener noreferrer" href="#">See All</Link>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={picture} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="/" className="block">
				<h3 className="text-xl font-semibold dark:text-teal-400">{place_name}</h3>
			</a>
			<p className="leading-snug dark:text-gray-400">{details}</p>
		</div>
	</div>
</div>
<div>
   {
	reviews.length === 0 ?
	<>
		<p>No Comments</p>
	</>
	:
	<div>
		{

reviews.map(rev=><CardDetails
	key={rev._id}
	rev={rev}
></CardDetails>)
		}
	</div>
   }
</div>
<div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex flex-col items-center w-full">
		<h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">How was your experience?</span>
			<div className="flex space-x-3">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
		</div>
		<div className="flex flex-col w-full">
		<form onSubmit={handleSubmit} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				
				
				<div className="col-span-full ">
					<label for="review" className="text-sm">Review</label>
					<input name='review' id="review" type="text" placeholder="Input Your review" className="w-full rounded-md focus:ring  text-center focus:ring-opacity-75 focus:ring-teal-400 dark:border-gray-700 dark:text-gray-900" />
				</div>	
			</div>
		</fieldset>
		<button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-teal-400">Leave feedback</button>
	</form>
			
		</div>
	</div>
	{/* <div className="flex items-center justify-center">
		<a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
	</div> */}
</div>
        </div>
    );
};

export default Details;