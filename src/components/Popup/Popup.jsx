import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="font-serif h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[450px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div className="text-center w-full">
                  <img src={Logo} alt="Logo" className="w-12 h-12 mx-auto mb-4" />
                  <h1 className="text-2xl font-bold">Sign in to your account</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
              <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                  />
                  <div className="mb-4 text-center">
                    <a href="#" className="text-md text-black-500 hover:underline">Forgot password?</a>
                  </div>
                  <button className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-md">
                    LOGIN
                  </button>
                  <div className="mt-6 text-center text-md">
                    Don’t have an account? <a href="#" className="dark:text-white font-semibold hover:underline">Register here</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
