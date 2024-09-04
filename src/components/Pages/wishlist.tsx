"use client";
import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { GiCactus, GiShoppingCart } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosGitCompare, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";

type ProductType = {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number | null;
};

type WishlistItemProps = {
  wishlistItems: ProductType[];
  removeFromWishlist: (product: ProductType) => void;
};


const WishlistItem: React.FC<WishlistItemProps> = ({ wishlistItems, removeFromWishlist }) => {
  
  const [selected, setSelected] = useState(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([]); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const [cartCount, setCartCount] = useState(0);

  const toggleSelect = () => {
    setSelected(!selected);
  };

  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsSidebarOpen(true); 
    setCartCount(cartCount + 1);
  };

  const openModalWithProduct = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 container">
      <h2 className="text-xl font-bold mb-4">YOUR PRODUCTS WISHLIST</h2>

      {wishlistItems?.length   === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div>
          <div
            className={`flex items-center space-x-2 gap-10 transition-all duration-300 ${
              selected ? "opacity-100 max-h-10" : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <button className="flex items-center" onClick={() => setSelected(false)}>
              <IoCloseOutline className="mr-1" /> Remove
            </button>
            <button className="flex items-center" onClick={toggleSelect}>
              <FaRegSquare className="mr-1" /> {selected ? "Deselect all" : "Select all"}
            </button>
          </div>

          <div className="border-t border-gray-200 py-4">
            {wishlistItems?.map((item, index) => (
              <div key={index} className="flex flex-col mb-4">
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-2 py-1">
                    NEW
                  </div>
                  <img src={item.image} alt="Product Image" className="w-[400px] h-[450px] object-cover" />
                  <div className="absolute w-[180px] h-[50px] top-[380px] left-[110px] flex text-2xl justify-center items-center gap-5 bg-white opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
               
                    <div className="relative group">
                      <GiShoppingCart onClick={() => addToCart(item)} />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Add to Cart
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                   
                    <div className="relative group">
                      <IoIosSearch onClick={() => openModalWithProduct(item)} />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Quick View
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>

                
                    <div className="relative group">
                      <IoIosGitCompare />
                      <div className="w-[90px] text-center absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-2 py-1">
                        Compare
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-[5px] border-t-black border-x-[5px] border-x-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="text-green-500 text-xl">{item.price}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    className="flex items-center"
                    onClick={() => removeFromWishlist(item)}
                  >
                    <IoCloseOutline className="mr-1" /> Remove
                  </button>
                  <div onClick={toggleSelect} className="cursor-pointer">
                    {selected ? (
                      <FaRegCheckSquare className="text-blue-500" />
                    ) : (
                      <FaRegSquare className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistItem;
