import React from 'react';

type ProductType = {
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number | null;
};

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
  cartItems: ProductType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const Sidebar = ({ isOpen, toggleSidebar, cartItems, setCartItems }: SidebarProps) => {
  // Remove item from cart handler
  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Sidebar Container */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg transform z-[9999] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button className="text-gray-500" onClick={toggleSidebar}>
            Close &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto flex-1 h-[450px]">
          {cartItems.length === 0 ? (
            <div className="text-center">Your cart is empty</div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-base font-medium">{item.title}</h3>
                  <p className="text-sm">
                    1 x <span className="text-green-600 font-semibold">{item.price}</span>
                  </p>
                </div>
                <button className="text-gray-500" onClick={() => removeFromCart(index)}>
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        {/* Subtotal and Buttons */}
        <div className="p-4 border-t">
          {/* Calculate subtotal dynamically */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-lg font-semibold text-green-600">
              £{cartItems.reduce((total, item) => total + parseFloat(item.price.replace('£', '')), 0).toFixed(2)}
            </span>
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
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-[5000]" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
