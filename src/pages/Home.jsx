import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import art3 from "../assets/art3.jpg";
import art4 from "../assets/art4.jpg";

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              are you looking for
              <br className="hidden lg:inline-block" />
              aesthetic handicraft
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center text-white bg-[#884210] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0">
                Buy Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              style={{ height: "500px", width: "500px" }}
              src={art1}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-70"
                    src={art2}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#037964] bg-opacity-60 text-white text-2xl font-bold">
                    Comming Scoon
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-70"
                    src={art3}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#037964] bg-opacity-60 text-white text-2xl font-bold">
                    Comming Scoon
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-1 w-full">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block opacity-70"
                    src={art4}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#037964] bg-opacity-60 text-white text-2xl font-bold">
                    Comming Scoon
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block opacity-70"
                    src={art4}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#037964] bg-opacity-60 text-white text-2xl font-bold">
                    Comming Scoon
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-70"
                    src={art2}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#037964] bg-opacity-60 text-white text-2xl font-bold">
                    Comming Scoon
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-70"
                    src={art2}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#037964] bg-opacity-60 text-white text-2xl font-bold">
                    Comming Scoon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
