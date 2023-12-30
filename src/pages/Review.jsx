import React from 'react'
import Rating from 'react-rating'
import { HiOutlineStar as StarEmptyIcon, HiStar as StarFullIcon } from 'react-icons/hi2'

function Reviews() {
    const reviewName = "John Doe"
    const reviewDesc = "the is a beautifully written and inspiring story that will stay with you long after you finish reading it. It is a story about following your dreams and finding your true purpose in life. The characters are well-developed and relatable, and the message of the story is powerful and uplifting. I highly recommend this book to anyone who is looking for a meaningful and thought-provoking read."
    const reviewDate = "July 2021"
    const reviewRating = 3.5
  return (

    <div className="flex flex-col md:flex-row md:items-start">
        {/* avatar img */}
        <img className="w-20 h-20 rounded-full" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="avatar" />
        {/* review */}
        <div className="flex flex-col ml-4">
            {/* name */}
            <h3 className="text-xl font-semibold">{reviewName}
            <span className="text-gray-600 text-base ml-2">{reviewDate}</span> 
            </h3>
            {/* Rating */}
            <div className="flex items-center mt-2 ">
               <Rating initialRating={reviewRating} readonly={true} emptySymbol={<StarEmptyIcon className='text-xl text-gray-400' />} fullSymbol={<StarFullIcon className='text-xl text-yellow-500' />}
               fractions={2}
                />
                <span className="text-xl text-gray-600 ml-2 mb-2">({reviewRating})</span>
            </div>
            {/* review */}
            <p className="text-xl mt-3">{reviewDesc}</p>
        </div>
    </div>
   
  )
}

export default Reviews
