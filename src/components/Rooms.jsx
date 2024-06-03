// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
const Rooms = () => {
  return (
    <div className="flex justify-evenly mt-48 mx-4 mb-20">
      <div className="flex flex-col justify-center bg-white h-80 w-80 text-black p-4 relative">
        <h1 className='text-3xl font-bold'>Book Your <span className="jancolor">Beautiful Rooms.</span></h1>
        <p className='mt-5'>
          Jannata Resort & Spa is a boutique property<br />
          with tranquil valley views. 
        </p>
        <div className="flex flex-col space-y-10">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-2">
              <label className="text-xs text-gray-500 mt-7" htmlFor="input1">ARRIVAL DATE</label>
              <label className="relative inline-flex items-center">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 fill-current text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="6" />
                  </svg>
                </span>
                <input id="input1" type="text" className="border-b border-gray-300 px-4 py-2 pl-12" placeholder=" 24th June 2020" />
              </label>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs text-gray-500 mt-7" htmlFor="input2"> DEPARTURE DATE</label>
              <label className="relative inline-flex items-center">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 fill-current text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="6" />
                  </svg>
                </span>
                <input id="input2" type="text" className="border-b border-gray-300 px-4 py-2 pl-12" placeholder=" 28th June 2020" />
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <div className="flex flex-col space-y-2">
              <label className="text-xs text-gray-500 mt-4" htmlFor="input3"> GUESTS</label>
              <label className="relative inline-flex items-center">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 fill-current text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="6" />
                  </svg>
                </span>
                <input id="input3" type="text" className="border-b border-gray-300 px-4 py-2 pl-12" placeholder=" Number of Guests" />
              </label>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs text-gray-500 mt-4" htmlFor="input4"> YOUR ROOMS </label>
              <label className="relative inline-flex items-center">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 fill-current text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="6" />
                  </svg>
                </span>
                <input id="input4" type="text" className="border-b border-gray-300 px-4 py-2 pl-12" placeholder=" Type Rooms" />
              </label>
            </div>
          </div>
        </div>
        <button className="btn   ml-10 mt-10 text-white py-2 px-4 rounded">
          <span className="text-sm">Check Availability  <i className="fas fa-arrow-right"></i></span>
        </button>
      </div>
      <div className="relative">
        {/* Yellow rectangle */}
        <div className="absolute bottom-[-20px] left-0 ml-6 w-80 h-20 " style={{ backgroundColor: '#dad1c1' }}></div>
        {/* Gray box */}
        <div className="relative z-10 bg-gray-200 h-80 w-80 text-white p-4">
        </div>
      </div>
    </div>
  );
}

export default Rooms;
