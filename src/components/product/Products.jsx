import React, { useState } from 'react';
import { BsStars } from "react-icons/bs";
import { BiRightArrow } from "react-icons/bi";
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { Button, Input } from 'antd';
import { Link } from "react-router-dom";
import { useSearch } from '../search/SearchContext';

const Products = () => {
  const { data } = useGetProductsQuery();
  const { searchQuery } = useSearch();

  // Filter the products based on the search query
  const filteredProducts = data?.payload?.filter(product =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.product_type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <Input 
          placeholder="Search products..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="w-full max-w-lg"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts && filteredProducts.map(product => (
          <Link 
            key={product._id}
            to={`/singlePage/${product._id}`}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 py-3"
          >
            <img 
              src={product.product_images[0]} 
              alt={product.product_name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <p className="text-center text-xl font-bold text-blue-600 mb-2">{product.product_type}</p>
              <p className="text-center text-2xl font-semibold text-gray-800 mb-4">{product.product_name}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <BsStars key={index} className="text-xl" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <BiRightArrow className="text-lg text-blue-800" />
                  <span className="text-lg">{product.original_price}$</span>
                </div>
              </div>
              <Button type="primary" className="w-full text-lg py-2">View Details</Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;