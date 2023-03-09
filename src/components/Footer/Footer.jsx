import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 mt-auto">
      <div className="flex items-center justify-between">
        <div className="text-sm">&copy; Since 2023</div>
        <nav className="text-sm">
          <ul className="flex">
            <li className="ml-4">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="ml-4">
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
