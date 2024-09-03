import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaPinterest, FaEnvelope } from "react-icons/fa";

type ProductType = {
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number | null;
  description?: string; // Optional description
};
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: ProductType | null; // Accept product data or null when no product is selected
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-[850px] h-[500px] flex shadow-lg p-6 gap-7 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="flex justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-[400px]"
          />
        </div>
        <div className="w-[50%]">
          <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
          <p className="text-xl text-green-600 mb-2">{product.price}</p>
          <p className="text-gray-600 mb-6">
            {product.description}
          </p>
          <div className="flex items-center gap-5">
            <div className="flex">
              <button className="border border-gray-400 px-4 py-1 text-lg">-</button>
              <span className="text-lg border px-4 py-1 border-gray-400">1</span>
              <button className="border border-gray-400 px-4 py-1 text-lg">+</button>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 hover:bg-green-500">
              Add to Cart
            </button>
          </div>
          <div className="text-gray-600 mb-4">Category: {product.category}</div>
          <div className="flex space-x-4">
            <FaFacebook size={24} className="text-gray-600 hover:text-gray-800" />
            <FaTwitter size={24} className="text-gray-600 hover:text-gray-800" />
            <FaEnvelope size={24} className="text-gray-600 hover:text-gray-800" />
            <FaPinterest size={24} className="text-gray-600 hover:text-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
