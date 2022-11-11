import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const data = useLoaderData()
    console.log(data)


    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        console.log(review);
        const body = {
            review: review
        }
        fetch(`https://travelo-server.vercel.app/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)

        })
            .then(result => {

                toast.success('Update Success')
            })
            .catch(err => console.log(err))


    }

    return (
        <div className='h-screen my-20'>
            <h1 className='text-center font-semibold'>Edit your Review</h1>
            <form onSubmit={handleUpdate} className='text-center flex items-center my-4 justify-center mx-auto'>
                <p className='font-semibold mr-2 '>
                    Your Review:
                </p>
                <input name='review' defaultValue={data?.review} type="text" placeholder="Type here" className="input mr-2 h-10 p-2 rounded input-bordered w-96 " />
                <button type='submit' className="btn rounded bg-red-400 hover:bg-red-700 p-2 btn-sm">Update</button>
            </form>
        </div>
    );
}

export default UpdateReview;