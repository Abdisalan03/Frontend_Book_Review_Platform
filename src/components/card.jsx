import React, { useState, useEffect } from "react";
// import Loading from '../../assets/images/spinner.jpg'
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  useDeleteBookMutation,
  useGetBookQuery,
} from "../Store/api/BooksSlice";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../store/api/UserSlice";
// import notFound from "../../assets/images/NotFound.png";
import { ToastContainer, toast } from "react-toastify";
import Search from "../components/Search";

function Card() {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const { data: user = [] } = useGetUserQuery();

  const { data: books = [], isLoading } = useGetBookQuery();

  const [delateItem] = useDeleteBookMutation();

  const Mybook = books.filter((book) => book.landlord_id === user.id);
  // console.log(Mybook);

  const handleDelate = (book_id) => {
    if (confirm("Are you sure ?")) {
      delateItem(book_id).then(() => {
        toast.success("book deleted successfully");
      });
    }
  };

  useEffect(() => {
    setFilteredItems(
      Mybook.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, books]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <ToastContainer />
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">My Books</h3>

        <Search inputValue={search} onInputChange={handleSearch} />
      </div>
      {/* Books */}
      <div className="mt-4 flex justify-center flex-wrap gap-5 p-4 pb-5">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
              <span className="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span>
              loading...
            </div>
          </div>
        ) : (
          <>
            {Mybook.length === 0 ? (
              <div className="flex flex-col w-full !h-[60vh] items-center justify-center">
                {/* <img
                  src={notFound}
                  alt=""
                  className="w-[20rem] h-60 md:w-[28rem] md:h-80"
                /> */}
                <h1 className="font-medium text-xl text-gray-400">
                  Books is Empty
                </h1>
              </div>
            ) : (
              <>
                {filteredItems.map((book) => (
                  <div
                    key={book._id}
                    className="flex flex-col gap-6  overflow-hidden w-[340px] bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all"
                  >
                  <Link to= {`/Books/${book._id}`}>  <img
                      src={book.image}
                      alt=""
                      className="w-full h-[180px]  rounded-xl bg-auto bg-no-repeat bg-center"
                    /></Link>
                    <div className="flex flex-col gap-4 md:gap-4 w-full">
                      <div className="flex flex-col gap-2">
                        <h3 className=" text-2xl">
                          {" "}
                          {book.title.slice(0, 20) +
                            [book.title.length >= 20 ? "..." : ""]}
                        </h3>
                        <span className="text-[#8f84f1]">
                          Des: {book.description}
                        </span>
                        <span className="text-[#222]">auth: {book.author}</span>
                        <span className="text-[#222]">$ {book.price}</span>
                        <span className="text-[#222]">year: {book.year}</span>
                      </div>
                      {user.role === "admin" && (
                        <div className="mt-3 pb-2 flex items-center justify-between">
                        <FaTrash
                          onClick={() => handleDelate(book._id)}
                          className="text-[#FF6746] text-xl cursor-pointer"
                        />
                        <Link to={`/Admin/books/Edit/${book._id}`}>
                          <FaEdit className="text-xl text-[#00befe] cursor-pointer" />
                        </Link>
                      </div>
                      )}
                      
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
