
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    alert('Mensagem enviada! (simulação)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          <div className="lg:w-2/5">
            <img 
              src="https://picsum.photos/seed/contactperson/600/700" 
              alt="Contact Person" 
              className="rounded-lg shadow-2xl w-full h-full object-cover min-h-[400px] lg:min-h-full"
            />
          </div>
          <div className="lg:w-3/5 bg-indigo-900 text-white p-8 md:p-12 rounded-lg shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Entre em contato</h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Entre em contato com os nossos especialistas e agende uma conversa para saber como podemos fazer da tecnologia um diferencial competitivo para o seu negócio.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome:</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-indigo-800 border border-indigo-700 rounded-md focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-indigo-800 border border-indigo-700 rounded-md focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Assunto:</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-indigo-800 border border-indigo-700 rounded-md focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem:</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-indigo-800 border border-indigo-700 rounded-md focus:ring-sky-500 focus:border-sky-500 placeholder-gray-400"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
