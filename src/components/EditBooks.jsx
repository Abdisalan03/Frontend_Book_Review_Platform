import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEditBookMutation, useGetBookQuery } from "../Store/api/BooksSlice";
import toast from "react-hot-toast";

function EditBooks() {
  const [editItem, { error = {} }] = useEditBookMutation();
  const { data: items = [] } = useGetBookQuery();
  console.log("books", items)

  const params = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    title: "",
    year: "",
    description: "",
    author: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const item = items.find((item) => item._id === params.book_id);
    if (item) {
      console.log("item display")
      setInitialValues({
        title: item.title,
        year: item.year,
        description: item.description,
        author: item.author,
        price: item.price,
        image: item.image,
      });
    }
  }, [items, params.book_id]);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    year: Yup.number().required("Year is required"),
    description: Yup.string().required("Description is required"),
    author: Yup.string().required("Author is required"),
    price: Yup.number().required("Price is required"),
    image: Yup.string().required("Image is required"),
  });

  const handleSubmit = (values) => {
    editItem({
      id: params.book_id,
      bookData: values,
    }).then(() => {
      toast.success("Book updated successfully");
      navigate("/Books");
    });
  };

  return (
    <div className="mt-5 bg-white p-8 w-full flex flex-col shadow rounded">
      <div className="flex">
        <h3 className="font-bold text-2xl">Edit Books</h3>
      </div>
      <div className="mx-auto w-full rounded-lg bg-white p-10 shadow-xl md:w-3/4 lg:w-1/2 mb-12">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <Form>
            <div className="mb-5">
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
                 outline-none shadow text-[20px]"
              />
              <ErrorMessage name="title" component="div" className="text-red-400" />
            </div>

            <div className="mb-5">
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Description"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow
                outline-none text-[20px]"
              />
              <ErrorMessage name="description" component="div" className="text-red-400" />
            </div>

            <div className="mb-5">
              <Field
                type="text"
                id="author"
                name="author"
                placeholder="Author"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
                 outline-none shadow text-[20px]"
              />
              <ErrorMessage name="author" component="div" className="text-red-400" />
            </div>

            <div className="mb-5">
              <Field
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow
                outline-none text-[20px]"
              />
              <ErrorMessage name="price" component="div" className="text-red-400" />
            </div>

            <div className="mb-5">
              <Field
                type="number"
                id="year"
                name="year"
                placeholder="Year"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
              />
              <ErrorMessage name="year" component="div" className="text-red-400" />
            </div>

            <div className="mb-5">
              <Field
                type="text"
                id="image"
                name="image"
                placeholder="Image URL"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
              />
              <ErrorMessage name="image" component="div" className="text-red-400" />
            </div>

            <button
              type="submit"
              className="bg-[#00befe] p-3 px-4 rounded-lg shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3] font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500"
            >
              Update Books
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditBooks;
