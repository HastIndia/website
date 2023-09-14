import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { BsBugFill } from "react-icons/bs";
import BtnEffect from "./BtnEffect";

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
    <header className="text-gray-600 body-font bg-[#a35c31]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <BsBugFill />
        </a>
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
