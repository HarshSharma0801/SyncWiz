import React from 'react';

const HomePage = () => {


  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome, People to Our CRUD Operation</h1>
        <p className="text-lg mb-8">Explore and discover amazing content.</p>

        <a
          href="/Read"
          className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HomePage;
