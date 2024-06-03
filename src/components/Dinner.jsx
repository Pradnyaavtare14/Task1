// import React from 'react'

import '@fortawesome/fontawesome-free/css/all.css';

const Dinner = () => {
  return (
    <div className=" items-center relative">
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-16">
        Dinner With <br/> <span  className="jancolor">Janata.</span>
      </h1>
      <p className="text-l mt-7">
      The restaurant is located next to the lobby and extends out onto 
        <br />an open terrace for an alfresco dining experience. It is elevated <br />
        over the main swimming pool with tropical views of lush valley <br />
        greenery in the distance.
      </p>
      <div className='mt-5'>
            <a href="#" className="jancolor">
               See Another Lunch <i className="fas fa-arrow-right"></i>
            </a>

          </div>
          <div className="flex justify-center mt-7">
        <div className="bg-gray-300 h-60 w-80 mx-2"></div>
        <div className="bg-gray-300 h-60 w-60 mx-2"></div>
        <div className="bg-gray-300 h-60 w-60 mx-2"></div>
      </div>
      </div>
      /</div>
  )
}

export default Dinner