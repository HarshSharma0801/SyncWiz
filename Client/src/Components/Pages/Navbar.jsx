import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">SyncWiz</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/Read" className="text-white hover:text-gray-300">
                All Users
              </a>
            </li>
            <li>
              <a href="/AddUser" className="text-white hover:text-gray-300">
                Add User
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
