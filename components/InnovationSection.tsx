
import React from 'react';

const InnovationItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <p className="text-2xl md:text-3xl font-bold uppercase text-gray-100 mb-4">{children}</p>
    <hr className="border-sky-500 border-t-2 w-1/4 mb-8" />
  </>
);

const InnovationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-indigo-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-left">
            <InnovationItem>Adote a cultura de inovação.</InnovationItem>
            <InnovationItem>Integre a inteligência artificial.</InnovationItem>
            <InnovationItem>Implemente sistemas de automação.</InnovationItem>
            <InnovationItem>Potencialize a o máximo o seu negócio.</InnovationItem>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/businessmeeting/600/400" 
              alt="Business Innovation Meeting" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
