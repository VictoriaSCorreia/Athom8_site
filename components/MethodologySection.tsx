
import React from 'react';
import { BriefcaseIcon, AcademicCapIcon, CogIcon, PresentationChartBarIcon, TargetIcon } from './icons'; // Placeholder, replace with actual icons
import { MethodologyItem } from '../types';


const methodologyItems: MethodologyItem[] = [
  {
    title: 'Consultoria Analítica',
    description: 'Mapeamos os processos da sua empresa para identificar necessidades de capacitação, oportunidades de integração com IA e automação, e elaboramos um planejamento estratégico de tecnologia.',
    Icon: BriefcaseIcon,
  },
  {
    title: 'Capacitação e Treinamento',
    description: 'Através de workshops e treinamentos práticos, e de farto material didático, preparamos a sua equipe para a transformação digital.',
    Icon: AcademicCapIcon,
  },
  {
    title: 'Implementação de Soluções Personalizadas',
    description: 'Criamos e implementamos soluções sob medida de automação e IA.',
    Icon: CogIcon,
  },
  {
    title: 'Suporte e Evolução Contínua',
    description: 'Acompanhamos a performance das soluções implantadas, a efetiva adoção por parte dos colaboradores e fazemos os ajustes necessários.',
    Icon: PresentationChartBarIcon,
  },
  {
    title: 'Eficiência, Inovação e Competitividade',
    description: 'Nosso objetivo é proporcionar eficiência, produtividade e inovação, permitindo que sua empresa alcance novos patamares de competitividade no mercado.',
    Icon: TargetIcon,
  },
];

const MethodologyCard: React.FC<MethodologyItem> = ({ title, description, Icon }) => {
  return (
    <div className="bg-white text-indigo-900 p-8 rounded-xl shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      <div className="bg-indigo-900 text-white p-4 rounded-full mb-6 inline-block">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-md leading-relaxed">{description}</p>
    </div>
  );
};

const MethodologySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-indigo-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Nossa Metodologia</h2>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
          Na Athom8, acreditamos que a tecnologia deve ser acessível e funcional. Nosso propósito é simplificar e acelerar a jornada de empresas rumo à digitalização, à automação e à integração da Inteligência Artificial. Sabemos que muitas organizações enfrentam desafios para iniciar essa transformação, seja por falta de conhecimento técnico ou pela dificuldade de acompanhar a evolução do mercado. Estamos aqui para mudar isso. Nosso processo é estruturado para ser simples, eficiente e altamente estratégico e funciona da seguinte forma:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {methodologyItems.slice(0, 4).map((item, index) => (
            <MethodologyCard key={index} {...item} />
          ))}
          <div className="md:col-span-2 lg:col-span-1 lg:col-start-2"> {/* Center the last item if 5 items in a 3-col grid */}
             {methodologyItems.length === 5 && <MethodologyCard {...methodologyItems[4]} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
