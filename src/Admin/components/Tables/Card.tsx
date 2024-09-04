"use client";
import { useState } from "react";
import { FiEdit, FiTrash, FiPlus } from "react-icons/fi";
import useSWR from "swr";
import ProductModal from "../Modal/ProductModal";


type ProductType = {
  id: string;
  title: string;
  productCount: number;
  image: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Card() {
  const { data, error, mutate } = useSWR<ProductType[]>("http://localhost:3001/DatasForAdminPanel", fetcher);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleEdit = (product: ProductType) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (productId: string) => {
    try {
      const response = await fetch(`http://localhost:3001/DatasForAdminPanel/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Delete failed: ${response.statusText}. ${errorText}`);
      }

      mutate(); 
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete the product. Please try again.");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSave = async (updatedProduct: ProductType) => {
    try {
      if (editingProduct) {
     
        await fetch(`http://localhost:3001/DatasForAdminPanel/${updatedProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        });
      } else {
        
        await fetch(`http://localhost:3001/DatasForAdminPanel`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        });
      }

      mutate();
      handleModalClose();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save the product. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 w-full dark:bg-gray-900">
      <div className="flex justify-between items-center mb-4 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-white">Product List</h1>
        <button
          className="flex items-center px-4 py-2 bg-white text-black rounded"
          onClick={() => {
            setEditingProduct(null); 
            setIsModalOpen(true);
          }}
        >
          <FiPlus />
          Add Product
        </button>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg dark:bg-gray-900 text-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Product Count</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.id}>
              <td className="px-4 py-2">
                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="px-4 py-2">{product.title}</td>
              <td className="px-4 py-2">{product.productCount}</td>
              <td className="px-4 py-2 flex justify-between">
                <button
                  className="flex items-center text-blue-500"
                  onClick={() => handleEdit(product)}
                >
                  <FiEdit />
                </button>
                <button
                  className="flex items-center text-red-500"
                  onClick={() => handleDelete(product.id)}
                >
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSave}
        editingProduct={editingProduct}
      />
    </div>
  );
}
