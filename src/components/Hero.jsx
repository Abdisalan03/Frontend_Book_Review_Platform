import React from "react";
import {Link } from 'react-router-dom'
import HeroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="flex flex-col md:flex-row w-full items-center justify-between  gap-[14%]">
          {/* hero text */}
          <div className="flex flex-col gap-5 py-6 ">
            <div className="flex flex-col gap-3">
              <h2
                data-aos="fade-right"
                data-aos-duration="1500"
                className="font-bold text-secondaryColor text-[2.2rem]"
              >
                WELCOME 
                <span
                  data-aos="fade-right"
                  data-aos-duration="1300"
                  className="block text-txtColor"
                >
                 Book Review {" "}
                  <span className="text-primaryColor">Platform</span>
                </span>
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1500"
                className="pb-3"
              >
                At our organization, we are dedicated to empowering{" "}
                <br className=" hidden md:block" />
                students with the tools, knowledge, and resources they{" "}
                <br className=" hidden md:block" />
                need to achieve their career aspirations and{" "}
                <br className=" hidden md:block" />
                reach their full potential.
              </p>
            </div>

            <Link to="/Contact-us" >
              <span
                className="bg-primaryColor border border-solid border-primaryColor text-white py-2 px-4 
              rounded-[8px] cursor-pointer hover:bg-white  hover:text-primaryColor ease-in duration-300"
              >
                <i class="ri-mail-send-line"></i>
                <span className="pl-2">Get In Toach</span>
              </span>
            </Link>
          </div>

          {/* hero img */}
          <div className="hidden md:flex md:w-[34rem] w-[18rem]">
            <figure
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1500"
            >
              <img src={HeroImg} alt="Hero image" className="w-full" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;