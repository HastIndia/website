import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { BsBugFill } from "react-icons/bs";

const Header = () => {
  const [isloggedin, setIsLoggedIn] = useState(false);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setIsLoggedIn(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Yes");
        setIsLoggedIn(true);
      } else {
        console.log("No");
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <BsBugFill />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/cart" className="mr-5 hover:text-white">
            Cart
          </Link>
          <Link to="/contactus" className="mr-5 hover:text-white">
            Contact Us
          </Link>
          <Link to="/payment" className="mr-5 hover:text-white">
            Payment
          </Link>
          {isloggedin ? (
            <p onClick={userSignOut}>logout</p>
          ) : (
            <Link to="/login" className="mr-5 hover:text-white">
              Login
            </Link>
          )}
        </nav>
        <button className="inline-flex items-center text-white bg-[#884210] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0">
          Shop Art
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
    </header>
  );
};

export default Header;
