
import React from 'react';
import { FacebookIcon, LinkedInIcon, InstagramIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Tagline */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-2">Athom8</h3>
            <p className="text-xs uppercase tracking-wider">
              Powered by <span className="font-semibold text-sky-500">Automation</span> | Driven by <span className="font-semibold text-sky-500">Imagination</span>
            </p>
          </div>

          {/* Column 2: Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase">Contato</h4>
            <p className="mb-1">Avenida Tancredo Neves,</p>
            <p className="mb-1">Edifício Simonsen</p>
            <p className="mb-1">Salvador - BA</p>
            <p className="mb-1">41.800-000</p>
            <a href="mailto:athomeight@gmail.com" className="hover:text-sky-400 transition-colors">athomeight@gmail.com</a>
          </div>

          {/* Column 3: Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Termos e Condições</a></li>
            </ul>
          </div>

          {/* Column 4: Siga */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase">Siga</h4>
            <p className="mb-4">Assine a nossa newsletter e acompanhe as principais novidades</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-sky-400 transition-colors"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-sky-400 transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-sky-400 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-sky-400 transition-colors"><YoutubeIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Athom8. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
