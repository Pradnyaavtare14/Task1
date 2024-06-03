// import React from 'react';

const Home = () => {
  return (
    <div className="bg-customGray flex justify-center items-center main min-h-[450px] sm:min-h-[450px] relative">
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-20">
          Exclusive Offers
        </h1>
        <p className="text-l mt-7">
          Discover our amazing exclusive deals and get
          <br /> the very best for less.
        </p>
        <button className="btn mt-7 bg-blue-500 text-white py-2 px-4 rounded">
          <span className="text-sm">BOOK NOW</span>
        </button>
        <div className="mt-7">
          <div className="w-0.5 h-28 bg-white mx-auto"></div>
        </div>
      </div>

      {/* Circles in the bottom right corner */}
      <div className="absolute bottom-5 right-5 flex flex-col space-y-2 mr-28">
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-0.5 h-16 bg-white mx-auto"></div>
      </div>
      {/* Circles in the bottom-left corner */}
      <div className="absolute bottom-5 left-5 flex space-x-4 ml-28 mb-10">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Home;
