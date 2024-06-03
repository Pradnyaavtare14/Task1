// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Campaka = () => {
  return (
    <div className="flex justify-evenly mt-16 mx-4">
      <div className="relative">
        {/* Yellow rectangle */}
        <div className="absolute bottom-[-20px] left-0 ml-6 w-80 h-20 " style={{ backgroundColor: '#dad1c1' }}></div>
        {/* Gray box */}
        <div className="relative z-10 bg-gray-200 h-80 w-80 text-white p-4">
         </div>
      </div>
      <div className="flex flex-col justify-center bg-white h-80 w-80 text-black p-4">
        <h1 className='text-3xl font-bold'>Campaka Spa.</h1>
        <p className='mt-5'>
          Jannata Resort & Spa is a boutique property<br />
          with tranquil valley views in the rural village of<br />
          Sebali, just outside of Ubud.
        </p>
        <a href="#" className='jancolor mt-5'>See Another Spa <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  );
}

export default Campaka;
