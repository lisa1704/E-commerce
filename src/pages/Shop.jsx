import React, { useState, useEffect } from 'react';
import Cart from './../pages/Cart';

const products = [
  {
    id: 1,
    name: 'Wireless Headphone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 15.00,
    image: 'https://www.startech.com.bd/image/cache/catalog/headphone/a4tech/bh300/a4tech-bh300-05-500x500.webp',
  },
  {
    id: 2,
    name: 'Pink Dress',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 20.00,
    image: 'https://media.istockphoto.com/id/1217970962/photo/elegance-peach-vintage-dress-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Uht6bRtoSLHgt2v7FUgwb6vrGTkn7XIa85MuQXjuzSE=',
  },
  {
    id: 3,
    name: 'Stove (Kitchen Appliance)',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 300.00,
    image: 'https://www.mke.com.bd/pub/media/catalog/product/cache/34a90cddec6fe65108e6e12543ab3753/f/o/fotile-kitchen-appliances-gag76202-30-29146770407602_2000x_1_.png',
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Mao0000000000',cart);
  };

  return (
    <div className="container bg-blue-300 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold text-lg mb-2">${product.price.toFixed(2)}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            {/* <Cart cart={this.state.cart}/> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
