import React, { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) => {
  return (
    <>
      {/* Sidebar Container */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping cart</h2>
          <button className="text-gray-500" onClick={toggleSidebar}>
            Close &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto flex-1">
          {/* Cart Item */}
          <div className="flex items-center justify-between mb-4">
            <img
              src="https://via.placeholder.com/60"
              alt="Product Image"
              className="w-16 h-16 object-cover"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-base font-medium">Wall Photo</h3>
              <p className="text-sm">
                1 x <span className="text-green-600 font-semibold">£599.00</span>
              </p>
            </div>
            <button className="text-gray-500">&times;</button>
          </div>
        </div>

        {/* Subtotal and Buttons */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-lg font-semibold text-green-600">£599.00</span>
          </div>
          <button className="w-full bg-gray-100 text-center text-gray-700 font-semibold py-2 mb-2">
            VIEW CART
          </button>
          <button className="w-full bg-green-500 text-center text-white font-semibold py-2">
            CHECKOUT
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
