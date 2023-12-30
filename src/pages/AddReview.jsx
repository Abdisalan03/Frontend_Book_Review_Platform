import React from 'react'
import Rating from 'react-rating'
import { HiOutlineStar as StarEmptyIcon, HiStar as StarFullIcon } from 'react-icons/hi2'

function AddReview() {
  return (
    <div className="flex flex-col space-y-8 mt-10">
        <h1 className="font-bold text-2xl text-left">Add Review</h1>
        <form className="flex flex-col space-y-4 mt-4">
            
            
            
            <div className="flex flex-col w-full space-y-6 ">
                <label className="text-xl font-semibold">Review</label>
                <textarea className="w-full  h-48 border border-gray-300 rounded-md p-2 mt-2" placeholder="Write your review here..."></textarea>
            </div>
            <button className="bg-gray-800 text-white font-semibold py-2 rounded-md">Submit</button>
        </form>
        </div>

  )
}

export default AddReview
