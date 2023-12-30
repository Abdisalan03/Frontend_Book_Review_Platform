import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BASE_URL";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("token");
};

export const BooksSlice = createApi({
  reducerPath: "bookApi",
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
  tagTypes: ["bookApi"],
  endpoints: (builder) => ({
    // Get books
    getBook: builder.query({
      query: () => "books",
      providesTags: ["bookApi"],
    }),

    // Create books
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["bookApi"],
    }),

     // Update books images 
     updateImages: builder.mutation({
      query: ({ images, id }) => ({
        url: `books/update_images/${id}`,
        method: "PUT",
        body: images,
      }),
      invalidatesTags: ["bookApi"],
    }),

    // Update books
    editBook: builder.mutation({
      query: ({bookData, id }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["bookApi"],
    }),

    // Delete book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookApi"],
    }),

    
    // Contact Admin
    ContactAdmin: builder.mutation({
      query: (newMessage) => ({
        url: "/books/contactAdmin",
        method: "POST",
        body: newMessage,
      }),
    }),

     // Contact User
     ContactUser: builder.mutation({
      query: (newMessage) => ({
        url: "/books/contactUser",
        method: "POST",
        body: newMessage,
      }),

    }),
  }),
});

export const {
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useContactOwnerMutation,
  useContactRenterMutation,
  useUpdateImagesMutation
} = BooksSlice;