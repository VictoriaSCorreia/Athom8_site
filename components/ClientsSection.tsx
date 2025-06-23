
import React from 'react';

const clients = [
  { name: 'prezunic', logoText: 'prezunic', subText: 'cencosud', color: 'text-green-400' },
  { name: 'SiDi', logoText: 'SiDi', color: 'text-teal-400' },
  { name: 'Leiaute', logoText: 'Leiaute', color: 'text-amber-400' },
  { name: 'foreiner.', logoText: 'foreiner.', color: 'text-red-400' },
];

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-indigo-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">NOSSOS CLIENTES</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {clients.map((client) => (
            <div key={client.name} className="text-center">
              <span className={`text-4xl md:text-5xl font-bold tracking-tight ${client.color}`}>
                {client.logoText}
              </span>
              {client.subText && <span className="block text-sm text-gray-400">{client.subText}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
