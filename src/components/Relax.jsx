// import React from 'react'

const Relax = () => {
    return (
      <div className="mt-32 ml-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="mb-10 lg:mb-0 lg:mr-10">
            <h1 className='text-3xl font-bold'>Relaxing With</h1>
            <span className="jancolor text-3xl font-bold">Jannata.</span>
            <p className="mt-5">
              Jannata Resort & Spa is a boutique property<br />
              with tranquil valley views in the rural village of<br />
              Sebali, just outside of Ubud.
            </p>
            <div className="mt-5">
              <a href="#" className='jancolor'>See Another Spa <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          
          {/* Flex container for boxes */}
          <div className="flex flex-wrap justify-center lg:ml-10 space-x-6">
            <div className="bg-gray-200 h-60 w-60 text-white p-4 flex items-center justify-center">
             
            </div>
            <div className="bg-gray-200 h-60 w-60 text-white p-4 flex items-center justify-center">
              
            </div>
            <div className="bg-gray-200 h-60 w-60 text-white p-4 flex items-center justify-center">
            
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Relax
  