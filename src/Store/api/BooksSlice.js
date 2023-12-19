import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BASE_URL from "./BASE_URL";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("token");
};

export const BooksSlice = createApi({
  reducerPath: "books",
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
  tagTypes: ["books"],
  endpoints: (builder) => ({
    // Get books
    getBook: builder.query({
      query: () => "books",
      providesTags: ["books"],
    }),

    // Create books
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "books/create",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["books"],
    }),

     // Update books images 
     updateImages: builder.mutation({
      query: ({ images, id }) => ({
        url: `books/update_images/${id}`,
        method: "PUT",
        body: images,
      }),
      invalidatesTags: ["books"],
    }),

    // Update books
    editBook: builder.mutation({
      query: ({bookData, id }) => ({
        url: `books/update/${id}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),

    // Delete book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
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