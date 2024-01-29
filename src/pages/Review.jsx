import React from 'react';
import Rating from 'react-rating';
import { HiOutlineStar as StarEmptyIcon, HiStar as StarFullIcon } from 'react-icons/hi2';
import { useGetReviewQuery } from '../Store/api/ReviewSlice';

function Reviews() {
  const { data: reviews, error, isLoading } = useGetReviewQuery();

  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Reviews</h1>
      <ul className="list-disc pl-4">
        {reviews.map((review) => (
          <li key={review.id} className="mb-4 flex flex-col md:flex-row md:items-start">
            {/* Avatar Image */}
            <img
              src={review.user.image || "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"}
              alt={`${review.user.name}`}
              className="rounded-full w-20 h-20"
            />

            {/* Review Details */}
            <div className="flex flex-col ml-4">
              {/* User Name and Date */}
              <h3 className="text-xl font-semibold">
                {review.user.name}
                <span className="text-gray-600 text-base ml-2">{review.date}</span>
              </h3>

              {/* Review Description */}
              <p className="text-xl mt-3">{review.review}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
