import React, { useEffect, useState } from "react";
// import RatingComponent from "./components/Rating";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useGetBookQuery } from "../Store/api/BooksSlice";
import {
  // love icon
  HiOutlineHeart as HeartEmptyIcon,
} from "react-icons/hi2";
import { useParams } from "react-router-dom";
// import AddReview from "./AddReview";
// import Reviews from "./Review";
// import Reviews from "./components/Reviews";
import AddReview from "../pages/AddReview";
import Reviews from "./Review";

function BookInfo() {

const {id }= useParams()

const { data: items = [] } = useGetBookQuery();

const [CurrentItem, setCurrentItem] = useState({})

useEffect(() => {
    const item = items.find((item) => item._id === id);
    setCurrentItem(item)

  }, [items, CurrentItem, id]);

 
  return (
    // a book info  page with rating and review
    <div className="w-full h-full bg-[#f5f5f5] py-10">
      {/* two parts image and the descriptions */}
      <div className="flex flex-col mx-4 md:flex-row md:items-start">
        {/* image */}
        <div className="w-full flex justify-center md:w-1/2">
          <img
            className="md:w-[400px] md:h-[600px]  w-full object-cover"
            src={CurrentItem?.image}
            alt="book"
          />
        </div>
        {/* descriptions */}
        <div className="w-full md:w-1/2 md:ml-8 mt-8 ">
          {/* title */}
          <h1 className="text-4xl font-bold text-left">{CurrentItem?.title}</h1>
       
          {/* desc */}
          <p className="text-xl mt-5">Des: {CurrentItem?.description}</p>
             {/* author */}
             <h3 className="text-2xl text-left mt-5">Auth: {CurrentItem?.author}</h3>
          {/* price */}
          <p className="text-xl mt-5">$ {CurrentItem?.price}</p>
           {/* year */}
           <p className="text-xl mt-5">year: {CurrentItem?.year}</p>

          {/* rating */}
          <div className="flex justify-start mt-4">
            {/* <RatingComponent rating={3} setRating={() => {}} readOnly={true} /> */}
            <span className="text-xl text-gray-600 ml-2">(3.0)</span>
          </div>
          {/* add to wishlist */}
          <div className="flex justify-start mt-5">
            <button className="flex items-center text-xl text-gray-600 hover:text-gray-800">
              <HeartEmptyIcon className="text-4xl" />
              <span className="ml-2">Add to Wishlist</span>
            </button>
          </div>
          {/* Category */}
          <div className="flex items-center text-xl text-gray-600 hover:text-gray-800 mt-5 ">
            <span className="ml-2 font-semibold">Category:</span>
            <span className="ml-2">Fiction</span>
            <span className="ml-2">|</span>
            <span className="ml-2">Novel</span>
          </div>
        </div>
      </div>

      {/* two tabs of More description and Reviews */}
      <div className="w-full bg-[#e7e6e0]  mt-40 p-10  md:p-20 ">
        <Tabs className="w-full " >
            <TabList className="flex justify-between w-full md:w-2/6">
                <Tab className="text-xl font-semibold bg-transparent cursor-pointer border-b-2 p-2">More Description</Tab>
                <Tab className="text-xl font-semibold bg-transparent cursor-pointer border-b-2 p-2">Reviews</Tab>
            </TabList>
    
            <TabPanel>
            <p className="text-xl mt-5">{CurrentItem.description}</p>
            </TabPanel>
            <TabPanel className="space-y-8 mt-5">
                {/* <Reviews /> */}
                <Reviews />



                {/* Add review */}
                <AddReview />

            </TabPanel>
        </Tabs>
        </div>



    </div>
  );
}

export default BookInfo;
