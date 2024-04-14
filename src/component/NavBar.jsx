import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../src/firebase/FirebaseConfig"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Firebase authentication status change listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is signed in
        localStorage.setItem("user", JSON.stringify(user)); // Save user data to local storage
      } else {
        setIsLoggedIn(false); // User is signed out
        localStorage.removeItem("user"); // Remove user data from local storage
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from listener

  }, []);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Using functional update to toggle isOpen
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); // Update isLoggedIn state
        localStorage.removeItem("user"); // Remove user data from local storage
        closeMenu(); // Close menu after logout
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  const navLinks = [
    { to: "/home", text: "Home" },
    { to: "/pricecomparison", text: "Price Comparison" },
    { to: "/help", text: "Help" },
    { to: "/about", text: "About" }
  ];


  return (
    <nav className="border-gray-200 bg-gray-900 select-none z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center space-x-3">
          <span className="self-center text-2xl font-bold whitespace-nowrap cursor-pointer">
            <span className="text-green-400 font-heading hover:text-green-600 transition duration-300">
              Budget
            </span>
            <span className="text-blue-400 font-fancy hover:text-blue-600 transition duration-300">
              Gadget
            </span>
          </span>
        </span>
        <div className="hidden text-base font-sans md:flex md:flex-row md:space-x-8 rtl:space-x-reverse">
          {navLinks.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              className="py-2 px-3 hover:bg-transparent border-b-2 border-transparent text-white hover:text-blue-500"
              onClick={handleNavLinkClick}
            >
              {text}
            </NavLink>
          ))}
          {isLoggedIn ? (
            <button
              className="py-2 px-3 hover:bg-transparent border-b-2 border-transparent text-white hover:text-blue-500"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/"
                className="py-2 px-3 hover:bg-transparent border-b-2 border-transparent text-white hover:text-blue-500"
                onClick={handleNavLinkClick}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="py-2 px-3 hover:bg-transparent border-b-2 border-transparent text-white hover:text-blue-500"
                onClick={handleNavLinkClick}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <FiMenu className="text-[2rem]" />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full h-[15rem] md:hidden mt-4 border rounded-md font-medium text-base md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          id="navbar-default"
        >
          {navLinks.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              className="block py-2 px-3 hover:bg-transparent md:border-0 md:p-0 text-white hover:text-blue-500"
              onClick={closeMenu}
            >
              {text}
            </NavLink>
          ))}
          {isLoggedIn ? (
            <button
              className="block py-2 px-3 hover:bg-transparent md:border-0 md:p-0 text-white hover:text-blue-500"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/"
                className="block py-2 px-3 hover:bg-transparent md:border-0 md:p-0 text-white hover:text-blue-500"
                onClick={closeMenu}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="block py-2 px-3 hover:bg-transparent md:border-0 md:p-0 text-white hover:text-blue-500"
                onClick={closeMenu}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
