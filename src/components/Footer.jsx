import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-white  shadow dark:bg-gray-300 ">
      <div className="w-full max-w-screen-xl mx-auto  md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <figure className="w-[8rem]">
              <img src={logo} alt="book" />
            </figure>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-900">
            <li>
              <a href="#"    className="text-[18px] hover:text-primaryColor transition-colors text-primaryColor">
                Home
              </a>
            </li>
            <li>
              <a href="#"   className="text-[18px] hover:text-primaryColor transition-colors p-4 ">
                Books
              </a>
            </li>
            <li>
              <a href="#"  className="text-[18px] hover:text-primaryColor transition-colors p-4 ">
                Login
              </a>
            </li>
          </ul>
          <Link to="/SignUp">
            <span className="hidden sm:flex h-[40px] items-center justify-center border border-solid border-primaryColor py-2 px-4 rounded-[8px] cursor-pointer bg-primaryColor text-white ease-in duration-300">
              <i className="ri-mail-send-line"></i>
              <span className="pl-2">Sign Up</span>
            </span>
          </Link>
        </div>

        <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center dark:text-gray-900">
          © 2023 <a href="#" className="hover:underline">Bookeo</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;