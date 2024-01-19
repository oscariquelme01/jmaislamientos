import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="w-screen relative">
      <Image
        src="/images/workers.png"
        alt="Workers"
        layout="responsive"
        width={1920}
        height={1080}
        className="object-cover"
      />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center">
        <span className="font-outline-2 text-transparent">JM</span> AISLAMIENTOS Y REVESTIMIENTOS
      </h1>
    </div>
  );
}

export default Hero;
