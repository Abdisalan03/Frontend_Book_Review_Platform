import React from 'react';
import Rating from 'react-rating';
import { HiOutlineStar as StarEmptyIcon, HiStar as StarFullIcon } from 'react-icons/hi2';
import { useAddReviewMutation } from '../Store/api/ReviewSlice';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddReview() {
  const { id } = useParams();

  // addreview
  const [addReview, { error }] = useAddReviewMutation();
  console.log('add:', error);

  const initialValues = {
    review: '',
  };

  const validationSchema = Yup.object({
    review: Yup.string().required('Review is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addReview({
          id,
          review: values.review,
        });
        // console.log('Review submitted successfully');
        // Additional logic or redirection can be added here
      } catch (error) {
        console.error('Error submitting review:', error);
      }
      resetForm();
    },
  });

  return (
    <div className="flex flex-col space-y-8 mt-10">
      <h1 className="font-bold text-2xl text-left"></h1>
      <form className="flex flex-col space-y-4 mt-4" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col w-full space-y-6">
          <label className="text-xl font-semibold" htmlFor="review">
            Add Review
          </label>
          <textarea
            id="review"
            name="review"
            className={`w-full h-48 border border-gray-300 rounded-md p-2 mt-2 ${
              formik.touched.review && formik.errors.review ? 'border-red-500' : ''
            }`}
            placeholder="Write your review here..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.review}
          />
          {formik.touched.review && formik.errors.review && (
            <div className="text-red-500 text-sm">{formik.errors.review}</div>
          )}
        </div>
        <button type="submit" className="bg-gray-800 text-white font-semibold py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
