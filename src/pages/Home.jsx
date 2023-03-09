import React from 'react';
import { NavLink } from 'react-router-dom';
import Services from '../services/Services';
// import { TruckIcon } from "@heroicons/24/outline";
import { Link } from 'react-router-dom';
import prod1 from './../assets/images/arm-chair-01.jpg'
import prod2 from './../assets/images/phone-03.png'
import prod3 from './../assets/images/watch-03.jpg'
import truck from './../assets/images/truck.png'

function Home() {
    const year = new Date().getFullYear();
  return (
    <div className="bg-gray-900  text-white py-16 px-6 space-y-2">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Utshab</h1>
        <p className="text-lg mb-8">Your one stop place to get everything you need. We have everything. Shop Now. Sign Up and be our loyal customer</p>
        <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            <Link to='signup'>
                Sign Up
                </Link>
        </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">Featured Products in {year}</h1>
      <div className="flex overflow-x-auto">
        <div className="w-72 bg-white shadow-lg rounded-lg p-6 mr-4">
          <h2 className="text-xl font-bold text-gray-600 mb-2">Sofa Chair</h2>         
          <img class="h-auto max-w-full" src={prod1} alt="prod1"/>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Buy Now</button>
        </div>
        <div className="w-72 bg-white shadow-lg rounded-lg p-6 mr-4">
          <h2 className="text-xl font-bold text-gray-600 mb-2">Mobile Phone</h2>
          <img class="h-auto max-w-full" src={prod2} alt="prod2"/>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Buy Now</button>
        </div>
        <div className="w-72 bg-white shadow-lg rounded-lg p-6 mr-4">
          <h2 className="text-xl font-bold text-gray-600 mb-2">Watch</h2>
          <img class="h-auto max-w-full" src={prod3} alt="prod3"/>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Buy Now</button>
        </div>
        <div className="w-72 bg-amber-300 shadow-lg rounded-lg p-6 mr-4">
        {/* <TruckIcon class="h-6 w-6 text-gray-500" />  */}
          <h2 className="text-xl text-gray-600 font-bold mb-2">Free Shipping</h2>
          <p className="text-gray-600 mb-4">Get your products delivered right at your doorstep. Anytime! Anywhere!</p>
          <img class="h-auto max-w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2h-CGmtWTL5iK0QXJx1mzX_yWJ3lk098T_A&usqp=CAU" alt="truck"/>
        </div>
      </div>
    </div>

    
  );
}

export default Home;
