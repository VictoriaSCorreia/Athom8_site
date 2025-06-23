
import React from 'react';

const ScenarioSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 text-indigo-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-2/5">
            <img 
              src="https://picsum.photos/seed/teamcollab/600/700" 
              alt="Team Collaboration" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-3/5 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-indigo-900">O cenário</h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              A tecnologia está transformando o mercado a uma velocidade sem precedentes. Em 2025, a Inteligência Artificial (IA) continuará evoluindo em um ritmo acelerado, superando a capacidade de aprendizado e implementação da maioria das empresas.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Acompanhar essa revolução tecnológica é um desafio para gestores e empresários. Nesse cenário, surge a Athom8, uma empresa especializada em inovação, IA e automação.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Com um time de especialistas altamente qualificados, traduzimos o potencial da tecnologia em soluções práticas e acessíveis, independentemente do porte ou setor de atuação da sua empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
