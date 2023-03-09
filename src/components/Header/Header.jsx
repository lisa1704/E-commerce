import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserTie, faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Utshab</h1>
      </div>
      <nav className="flex items-center">
        <ul className="flex">
            <li className="ml-6 ">
            <NavLink to='home' activeClassName="font-bold"><FontAwesomeIcon icon={faHome} className="text-2xl text-white" /></NavLink>
            </li>

          <li className="ml-6">
            <NavLink to='shop' activeClassName="font-bold"><FontAwesomeIcon icon={faBagShopping} className="text-2xl text-white" /></NavLink>
          </li>
          <li className="ml-6">
            <NavLink to='cart' activeClassName="font-bold"><FontAwesomeIcon icon={faCartShopping} className="text-2xl text-white" /></NavLink>
          </li>
          <li className="ml-6">
            <NavLink to='admin' activeClassName="font-bold"><FontAwesomeIcon icon={faUserTie} className="text-2xl text-white" /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;