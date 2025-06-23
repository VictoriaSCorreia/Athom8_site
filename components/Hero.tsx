
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/techfuture/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Tecnologia com um <br className="sm:hidden"/> diferencial competitivo
        </h2>
      </div>
    </section>
  );
};

export default Hero;
