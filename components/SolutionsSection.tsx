
import React from 'react';
import { SolutionItem } from '../types';
import { 
  MagnifyingGlassCircleIcon, ChartPieIcon, LightBulbIcon, TableCellsIcon, CpuChipIcon, ChatBubbleLeftRightIcon, PresentationChartLineIcon, CircleStackIcon, CameraIcon, MicrophoneIcon, FilmIcon, CodeBracketSquareIcon 
} from './icons';


const solutionItems: SolutionItem[] = [
  { title: 'Consultoria de Mapeamento de Oportunidades', Icon: MagnifyingGlassCircleIcon },
  { title: 'Workshops Práticos e Formação Contínua', Icon: ChartPieIcon }, // Replaced GraduationCap with ChartPie for variety
  { title: 'Implementação da Cultura da Inovação', Icon: LightBulbIcon },
  { title: 'Automação de Planilhas e Tarefas de Back-Office', Icon: TableCellsIcon },
  { title: 'Integração de Inteligência Artificial nas Operações', Icon: CpuChipIcon },
  { title: 'Desenvolvimento de Agentes de IA e Chatbots', Icon: ChatBubbleLeftRightIcon },
  { title: 'BI, Dashboards & Análise de Dados', Icon: PresentationChartLineIcon },
  { title: 'Implementação da DeepSeek em seu servidor', Icon: CircleStackIcon }, // Using CircleStack for "DeepSeek" as a generic data/server icon
  { title: 'Monitoramento Digital 24h/7 com IA', Icon: CameraIcon },
  { title: 'Call-Center e Customer Service com agentes de IA', Icon: MicrophoneIcon },
  { title: 'IA Generativa de Conteúdo, Imagens e Vídeos', Icon: FilmIcon },
  { title: 'Desenvolvimento de Software Customizado', Icon: CodeBracketSquareIcon },
];

interface SolutionCardProps extends SolutionItem {
  isDark: boolean;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, Icon, isDark }) => {
  const bgColor = isDark ? 'bg-indigo-900' : 'bg-white';
  const textColor = isDark ? 'text-gray-100' : 'text-indigo-900';
  const iconColor = isDark ? 'text-sky-400' : 'text-indigo-700';

  return (
    <div className={`p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center aspect-square transform hover:scale-105 transition-transform duration-300 ${bgColor} ${textColor}`}>
      <Icon className={`w-12 h-12 md:w-16 md:h-16 mb-4 ${iconColor}`} />
      <h3 className="text-md md:text-lg font-semibold">{title}</h3>
    </div>
  );
};

const SolutionsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-900">Nossas Soluções</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {solutionItems.map((item, index) => (
            <SolutionCard key={index} {...item} isDark={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
