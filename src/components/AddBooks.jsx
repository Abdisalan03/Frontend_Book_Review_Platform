import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom/dist'
import  toast from 'react-hot-toast'
import { useAddBookMutation } from '../store/api/BooksSlice'

function Addbook() {

  const navigate = useNavigate()

  const [addItem, {error}] = useAddBookMutation()
  console.log("add:", error)

  const initialValues = {
    title: '',
    year: '',
    description: '',
    author: '',
   price: "",
    image: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    year: Yup.number().required('year is required'),
    description: Yup.string().required('Description is required'),
    author: Yup.string().required('auther is required'),
    price: Yup.number().required('Price is required'),
    image: Yup.string().required('image is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addItem({
        title: values.title,
        description: values.description,
        author: values.author,
        year: values.year,
        price: values.price,
        image: values.image,
      });
      toast.success("book created successfully");
      navigate('/Books');
    } catch (error) {
      // Handle any error that occurs during the API request
      // console.error(error);
    }

    // console.log(values);
    resetForm()
  }


  return (
    <div className='mt-5 bg-white p-8 w-full flex flex-col shadow rounded '>
      
      {/* content */}

      <div className="mx-auto w-full rounded-lg bg-white p-10 border shadow-xl md:w-3/4 lg:w-1/2 mb-12">

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-5">
            </div>
            <div className="mb-8">
              <Field
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
                 outline-none shadow text-[20px]"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-400"
              />
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
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-400"
              />
            </div>

            <div className="mb-5">
              <Field
                type="text"
                id="author"
                name="author"
                placeholder="author"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
                 outline-none shadow text-[20px]"
              />
              <ErrorMessage
                name="author"
                component="div"
                className="text-red-400"
              />
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
              <ErrorMessage
                name="Price"
                component="div"
                className="text-red-400"
              />
            </div>

            <div className="mb-5">
              <Field
                type="number"
                id="year"
                name="year"
                placeholder="year"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
              />
              <ErrorMessage
                name="year"
                component="div"
                className="text-red-400"
              />
            </div>
            <div className="mb-5">
              <Field
                type="text"
                id="image"
                name="image"
                placeholder="url image"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
              />
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-400"
              />
            </div>

            <button type="submit" className="bg-primaryColor p-3 px-6 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-primaryColor   w-full">
              Add Book
            </button>

          </Form>
        </Formik>
      </div>

    </div>
  )
}

export default Addbook