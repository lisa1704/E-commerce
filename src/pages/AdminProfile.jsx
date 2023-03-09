import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminProfile() {
  return (
    <div className='mb-60 mt-10 px-4 py-2'>
    <div className="flex p-4 py-10 px-4 border-2 items-center">
      <div className="flex-shrink-0">
        <img
          className="h-24 w-24 rounded-full"
          src="https://source.unsplash.com/random"
          alt="Admin Profile"
        />
      </div>
      <div className="flex flex-col justify-center ml-8">
        <h2 className="text-2xl font-bold text-gray-800">Mr. Admin</h2>
        <p className="text-gray-500 mt-2">Seller</p>
        <div className="flex mt-4">
          <div className="mr-4">
            <p className="text-gray-500">Total Users</p>
            <p className="font-bold text-gray-800 mt-1">100</p>
          </div>
          <div>
            <p className="text-gray-500">Total Sales  </p>
            <p className="font-bold text-gray-800 mt-1">$10,000</p>
          </div>
        </div>
        <div className= "space-y-2">
        <p className="text-gray-500">Check the List of Customers here</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <NavLink  to='admin_customer_list' activeClassName="font-bold">List of Customers</NavLink>
        </button>
        </div>
        
         
      </div>
    </div>
    </div>
  );
}

export default AdminProfile;
