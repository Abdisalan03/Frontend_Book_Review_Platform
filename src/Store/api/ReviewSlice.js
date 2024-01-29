import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BASE_URL";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("token");
};
export const ReviewSlice  = createApi({
    reducerPath: "reviewApi",
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers) => {
        const token = getToken();
  
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
  
        return headers;
      },
    }),
    tagTypes: ["reviewApi"],
    endpoints: (builder) => ({
        // Get books
        getReview: builder.query({
          query: () => "reviews",
          providesTags: ["reviewApi"],
        }),

        // create review 
        addReview: builder.mutation({
          query: ({id, review}) => ({
            url: `/reviews/${id}`,
            method: "POST",
            body: {review},
          }),
          invalidatesTags: ["reviewApi"],
        }),
      
    })
})

export const {
    useGetReviewQuery,
    useAddReviewMutation,
} = ReviewSlice;