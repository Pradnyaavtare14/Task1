// import React from 'react';

const Navbar = () => {
  return (
    <div className="shadow-md bg-customGray dark:text-white">
      <div className='container py-3 sm:py-0'>
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-xs sm:text-lg flex gap-2 ml-20 top-20">
              CASTELYZE AGENCY
            </a>
          </div>
          <div className="flex space-x-6 mr-28 items-center mt-2">
            <a href="#" className="text-xs sm:text-lg top-20">Accommodation</a>
            <a href="#" className="text-xs sm:text-lg top-20">Wedding</a>
            <a href="#" className="t text-xs sm:text-lg top-20">Our Story</a>
            <a href="#" className="text-xs sm:text-lg top-20">Contact</a>
            <button style={{ backgroundColor: '#737661' }} className="text-xs sm:text-lg py-1 px-2 rounded top-20">
              <span>BOOK NOW</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
