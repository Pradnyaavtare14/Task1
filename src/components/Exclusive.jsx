// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Exclusive = () => {
  return (
    <div className="items-center relative">
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-28 ml-52">
          Exclusive <span className="jancolor">Offer.</span>
        </h1>
        <p className="text-sm mt-7 ml-96">
          Stylish accommodation option at Jannata Resort & Spa
          <br />incorporates a choice of 16 Deluxe Suites, 2 Deluxe  <br />
          Family Suite and 2 Pool Villas to anticipate all of your <br />
          holiday needs.
        </p>
        <div className="flex justify-center mt-7">
          <div className="bg-gray-500 h-80 w-80 mx-2 relative">
            <div className="absolute bottom-0 left-0 text-white text-xs p-2">
              <hr className="border-t border-white my-4 w-20" />
              Deluxe Suite Room <br />
              <a href="#">  <i className="fas fa-arrow-right"></i> See Details </a>
            </div>
          </div>
          <div className="bg-gray-500 h-80 w-80 mx-2 relative">
            <div className="absolute bottom-0 left-0 text-white text-xs p-2">
              <hr className="border-t border-white my-4 w-20" />
              Superior Room <br />
              <a href="#">  <i className="fas fa-arrow-right"></i> See Details </a>
            </div>
          </div>
          <div className="bg-gray-500 h-80 w-80 mx-2 relative">
            <div className="absolute bottom-0 left-0 text-white text-xs p-2">
              <hr className="border-t border-white my-4 w-20" />
              Private Pool Villa <br />
              <a href="#">  <i className="fas fa-arrow-right"></i> See Details </a>
            </div>
          </div>
        </div>
        {/* traingle video rectangle */}
        <div className="relative mt-16 mx-auto w-240 h-80 mr-52 ml-52">
      {/* Rectangle */}
      <div className="absolute inset-0 bg-gray-200"></div>

      {/* Triangle */}
      {/* traingle video rectangle */}
      {/* <div className="flex justify-center items-center mt-16 "> */}
      {/* <div className="relative w-240 h-80 bg-gray-200"> */}
        {/* Triangle */}
        <div
          className=" jancolor absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90"
          style={{
            width: '50px', // Adjust triangle width
            height: '50px', // Adjust triangle height
            borderTop: 'none',
            borderBottom: '50px solid', // Change color here
            borderLeft: '25px solid transparent',
            borderRight: '25px solid transparent',
            rotate:"inherit"
          }}
        ></div>
      {/* </div> */}
    {/* </div> */}
    </div>
            </div>
    </div>
  );
};

export default Exclusive;
