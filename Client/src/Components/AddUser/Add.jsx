import Add from './AddApi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUserForm = ()=>{

  const Navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    githubUsername: '',
    YourQuote: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userData);
    Add(userData)
    setTimeout(()=>{
      Navigate("/Read")

    },1000)

    setUserData({
      name: '',
      githubUsername: '',
      YourQuote: '',
  
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
     
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            GitHub Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Github"
            type="text"
            placeholder="GitHub Username"
            name="githubUsername"
            value={userData.githubUsername}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your Quote
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quote"
            type="text"
            placeholder="Your Quote"
            name="YourQuote"
            value={userData.YourQuote}
            onChange={handleChange}
            required
          />
        </div>
    
      
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" 
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUserForm;
