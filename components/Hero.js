// components/Hero.js

import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col flex-1">
      <div className="grow flex flex-col justify-center mb-28">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-8xl">
          Facundo Venturi
        </h1>
        <p className="mt-5 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
          Software, Web FullStack & Native App Developer.
        </p>
      </div>
    </div>
  );
};

export default Hero;

/*text-center items-center object-center justify-center content-center 
place-self-center place-items-center justify-self-center place-content-center 
justify-items-center bg-center*/
