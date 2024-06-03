// import React from 'react';

const Footer = () => {
    return (
      <div className="relative " style={{ backgroundColor:"#c5977d", height:"40px"}}>
        {/* Circles on the right */}
        <div className="absolute top-0 right-0 flex items-center h-full pr-4 mr-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="h-2 w-2 rounded-full bg-white mx-2"></div>
          ))}
        </div>
        
        {/* Paragraph on the left */}
        <div className="absolute top-0 left-0 h-full flex items-center pl-4 ml-10 text-sm">
          <p className="text-white">CASTELYZE AGENCY @2020 Copyright</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
  