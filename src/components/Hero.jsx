import React from 'react';
import SampleImage from '../assets/AmpleImage.jpg'

function Hero() {
  return (
    <section className="bg-black text-white py-20 px-4">
      {/* Painter tags
      <div className="flex justify-end space-x-4 text-xs uppercase text-amber-600 font-semibold mb-6 pr-6">
      <div className='w-[260px] bg-green-600 py-3'>
        <span className='bg-green-600 text-black ml-4'>Rapper</span> <span className='text-black bg-green-600 ml-3'>★</span>
        <span className='bg-green-600 text-black ml-4'>Lyricist</span> <span className='text-black bg-green-600 ml-3'>★</span>
        <span className='bg-green-600 text-black ml-4'>Artist</span>
        
       
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Left images */}
        <div className='ml-6'>
        <div className="flex flex-col space-y-4 items-start">
          <img
            src={SampleImage}
            alt="Artist painting"
            className="w-40 rotate-[10deg] shadow-2xs pb-4"
          />
          <div className="flex space-x-4">
            <img src={SampleImage} alt="Art 1" className="w-20 h-20 object-cover border-2" />
            <img src={SampleImage} alt="Art 2" className="w-20 h-20 object-cover border-2" />
          </div>
          <p className="text-xs mt-4 max-w-[200px] uppercase tracking-wide leading-tight text-right">
            The excellence of my art shown to people. Every art for every soul.
          </p>
        </div>
</div>
        {/* Center Heading */}
        <div className="text-center">
          <h1 className="text-[100px] lg:text-[150px] leading-none font-extrabold uppercase font-boldonse text-green-600">
            Austin
            <br />
            <span className="text-amber-600">Made</span>
          </h1>
          {/* <div className="flex justify-center mt-4 space-x-2 text-amber-600 text-xl">
            <span>★</span><span>★</span><span>★</span>
          </div> */}
        </div>

        {/* Right image */}
        <div className="w-64 h-auto">
          <img
            src={SampleImage}
            alt="Portrait eating leaves"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </section>

// Amber-600
// Green-600
  );
}

export default Hero;
