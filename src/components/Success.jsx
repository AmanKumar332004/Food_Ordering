import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Success icon
import {useNavigate} from 'react-router'

const Success = () => {

  const navigate = useNavigate()  
  const [isOpen, setIsOpen] = useState(true);


  const closeModal = () => {

    navigate("/")
    window.location.reload();
    // setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-50 bg-green-500 bg-opacity-80 h-full flex items-center justify-center"
        >
          <div
            className="bg-white w-80 md:w-[400px] p-8 rounded-xl shadow-xl transform transition-transform duration-500 scale-100"
          >
            <div className="flex justify-center items-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
              <FaCheckCircle className="text-6xl text-green-600" />
            </div>
            <h2 className="text-center text-2xl font-bold text-gray-800">
              Order Placed Successfully!
            </h2>
            <p className="text-center text-lg text-gray-600 mt-4 mb-6">
              Thank you for your order! We are processing it and will notify you once it's on its way.
            </p>
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
