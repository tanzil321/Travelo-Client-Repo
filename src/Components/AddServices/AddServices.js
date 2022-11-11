import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/UserContext';

const AddServices = () => {
    const {user} = useContext(AuthContext)
    let [service,setService]=useState([])
    const handleSubmit =(e)=>{
		e.preventDefault()
		
		const form = e.target
		
		
		const services = {
			
            place_name: form.name.value,
            picture: form.photourl.value,
            
            place_price: form.price.value,
            
            rating: form.ratings.value,
            
            details: form.detail.value,
            user_id: form.id.value

			
		}
		form.reset()
		
		console.log(services)
		fetch('https://travelo-server.vercel.app/services', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => {
                res.json()
            })
            .then(info => {
                console.log(info)
                setService(info)
				toast.success('Added To Home Page')
            })
	}
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50 px-4 py-16 mx-auto ">
	<form onSubmit={handleSubmit} novalidate="" action="" className="container  flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="flex items-center justify-center  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
        <div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-2xl">Add Your Services Here !!</p>
				<p className="text-xs">Hope you will enjoy our services with travelo !!</p>
			</div>
			<div className="grid grid-cols-6 text-center  gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm text-center">Place name</label>
					<input name='name' id="firstname" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm text-center">Ratings</label>
					<input name='ratings' id="lastname" type="text" placeholder="Your Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full  sm:col-span-3">
					<label for="email" className="text-sm text-center ">Price</label>
					<input name='price' id="email" type="email" placeholder="Input Your Amount" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="url" className="text-sm text-center">Pictures</label>
					<input name='photourl' id="url" type="url" placeholder="Url here" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="url" className="text-sm text-center">Details</label>
					<input name='detail' id="url" type="url" placeholder="Url here" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="url" className="text-sm text-center">Id</label>
					<input name='id' id="url" type="url" placeholder="Url here" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				
				
			</div>
            
		</fieldset>
		<button type="submit" className="py-4 my-8 px-5 mx-auto font-semibold rounded-md dark:text-gray-900 dark:bg-teal-400">Add Your Service</button>
	</form>
</section>
        </div>
    );
};

export default AddServices;