import { useState, FormEvent } from "react";

type ProductType = {
  id: string;
  title: string;
  productCount: number;
  image: string;
};

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: ProductType) => void;
  editingProduct: ProductType | null;
};

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSave, editingProduct }) => {
  const [title, setTitle] = useState(editingProduct?.title || '');
  const [productCount, setProductCount] = useState(editingProduct?.productCount || 0);
  const [image, setImage] = useState(editingProduct?.image || '');
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(editingProduct?.image || '');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(URL.createObjectURL(file)); // Use URL.createObjectURL for submission
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    const updatedProduct: ProductType = {
      id: editingProduct?.id || '', // Default value for id
      title,
      productCount,
      image,
    };

    onSave(updatedProduct);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] max-w-full">
        <h2 className="text-2xl font-bold mb-4">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Product Count</label>
            <input
              type="number"
              value={productCount}
              onChange={(e) => setProductCount(parseInt(e.target.value, 10))}
              className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {imagePreview && (
              <div className="mt-4">
                <img src={imagePreview as string} alt="Image preview" className="w-full h-[100px] object-cover rounded shadow-sm" />
              </div>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded shadow-sm hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
