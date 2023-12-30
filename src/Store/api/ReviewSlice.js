// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import BASE_URL from "./BASE_URL";
// import Cookies from "js-cookie";

// const getToken = () => {
//   return Cookies.get("token");
// };
// export const ratingsSlice  = createApi({
//     reducerPath: "ratingsApi",
//     baseQuery: fetchBaseQuery({
//       baseUrl: BASE_URL,
//       prepareHeaders: (headers) => {
//         const token = getToken();
  
//         if (token) {
//           headers.set("Authorization", `Bearer ${token}`);
//         }
  
//         return headers;
//       },
//     }),
//     tagTypes: ["ratingsApi"],
//     endpoints: (builder) => ({
//         // Get books
//         getRatings: builder.query({
//           query: () => "ratings",
//           providesTags: ["ratingsApi"],
//         }),

//         // create review 
//         addReview: builder.mutation({
//           query: (newReview) => ({
//             url: "/reviews",
//             method: "POST",
//             body: newReview,
//           }),
//           invalidatesTags: ["ratingsApi"],
//         }),
//         // create rating
//         addRating: builder.mutation({
//             query: (newRating) => ({
//               url: "/ratings",
//               method: "POST",
//               body: newRating,
//             }),
//             invalidatesTags: ["ratingsApi"],
//         }),

//         // update ratig
//         updateRating: builder.mutation({
//           query: ({ ratingData, id }) => ({
//             url: `/ratings/${id}`,
//             method: "PUT",
//             body: ratingData,
//           }),
//           invalidatesTags: ["ratingsApi"],
//         }),
//         // delete rating
//         deleteRating: builder.mutation({
//           query: (ratingId) => ({
//             url: `/ratings/${ratingId}`,
//             method: "DELETE",
//           }),
//           invalidatesTags: ["ratingsApi"],
//         })
//     })
// })