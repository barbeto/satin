import React from 'react';
import { CheckCircle, Baby, Moon, Thermometer, Droplets, Pill } from 'lucide-react';
import type { EbookTopic } from '../types';

// Componente para exibir os tópicos do ebook
const EbookTopics: React.FC = () => {
  // Lista dos tópicos do ebook com ícones apropriados
  const topics: EbookTopic[] = [
    {
      id: '1',
      title: 'Como saber se o choro é fome, sono ou cólica?',
    },
    {
      id: '2',
      title: 'Amamentação: muito mais do que só ofertar o seio!',
    },
    {
      id: '3',
      title: 'Vou voltar a trabalhar, e a amamentação?',
    },
    {
      id: '4',
      title: 'Quando é grave bater a cabeça?',
    },
    {
      id: '5',
      title: 'Fórmula + água: pode ou não pode?',
    },
    {
      id: '6',
      title: 'Quando o bebê vai dormir a noite toda?',
    },
    {
      id: '7',
      title: 'Febre sem motivo: e agora?',
    },
    {
      id: '8',
      title: 'Doença mão-pé-boca: é perigoso?',
    },
    {
      id: '9',
      title: 'Cocô de bebê: quanto tempo é normal ficar sem evacuar?',
    },
    {
      id: '10',
      title: 'Adenovírus: o que você precisa saber',
    },
    {
      id: '11',
      title: 'Bronquiolite: quando a tosse do bebê preocupa?',
    },
    {
      id: '12',
      title: 'Vacinas salvam vidas!',
    },
    {
      id: '13',
      title: 'Vitaminas e recém-nascidos: suplementar é obrigatório?',
    },
  ];

  // Função para obter ícone baseado no conteúdo do tópico
  const getTopicIcon = (title: string) => {
    if (title.includes('choro') || title.includes('bebê')) return <Baby className="h-5 w-5" />;
    if (title.includes('sono') || title.includes('dormir')) return <Moon className="h-5 w-5" />;
    if (title.includes('febre')) return <Thermometer className="h-5 w-5" />;
    if (title.includes('água') || title.includes('amamentação')) return <Droplets className="h-5 w-5" />;
    if (title.includes('vacina') || title.includes('vitamina')) return <Pill className="h-5 w-5" />;
    return <CheckCircle className="h-5 w-5" />;
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Conheça os 13 tópicos do ebook
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tópicos essenciais que toda mãe de primeira viagem precisa conhecer, 
            desenvolvidos com base na experiência clínica e nas dúvidas mais frequentes no consultório.
          </p>
        </div>

        {/* Grid de tópicos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                {/* Ícone */}
                <div className="bg-pink-100 text-pink-600 p-2 rounded-lg flex-shrink-0">
                  {getTopicIcon(topic.title)}
                </div>
                
                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Tópico {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 leading-tight">
                    {topic.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action adicional */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Mais de 20 páginas de conteúdo especializado
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Cada tópico é explicado de forma didática, com linguagem acessível e 
              orientações práticas que você pode aplicar imediatamente.
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Linguagem simples</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Casos práticos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Dicas exclusivas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookTopics;