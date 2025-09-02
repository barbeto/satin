import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

// Componente de depoimentos para aumentar credibilidade
const Testimonials: React.FC = () => {
  // Lista de depoimentos fictícios mas realistas
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Marina Silva',
      role: 'Mãe de primeira viagem',
      content: 'Este ebook me salvou! As orientações sobre o choro do bebê me deram muito mais segurança nos primeiros meses.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Ana Carolina',
      role: 'Mãe de gêmeos',
      content: 'Informações claras e objetivas. A parte sobre amamentação foi fundamental para minha jornada.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Juliana Rocha',
      role: 'Enfermeira e mãe',
      content: 'Mesmo sendo da área da saúde, aprendi muito com este material. Recomendo para todas as mães!',
      rating: 5,
    },
  ];

  // Função para renderizar estrelas
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que as mães estão falando
          </h2>
          <p className="text-xl text-gray-600">
            Centenas de mães já baixaram e aprovaram nosso ebook
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Ícone de aspas */}
              <Quote className="h-8 w-8 text-primary-500 mb-4" />
              
              {/* Conteúdo do depoimento */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Informações da pessoa */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  
                  {/* Avaliação em estrelas */}
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-gray-600">Mães orientadas</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <p className="text-gray-600">Satisfação</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">24h</div>
            <p className="text-gray-600">Suporte</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;