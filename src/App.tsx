import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EbookTopics from './components/EbookTopics';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

// Componente principal da aplicação
function App() {
  // Referência para o formulário para scroll suave
  const formRef = useRef<HTMLElement>(null);

  // Função para rolar suavemente até o formulário
  const scrollToForm = () => {
    const element = document.getElementById('lead-form');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho com informações da médica */}
      <Header />
      
      {/* Seção principal com destaque para o ebook */}
      <Hero onScrollToForm={scrollToForm} />
      
      {/* Formulário de captura de leads - MOVIDO para o topo */}
      <LeadForm id="lead-form" />
      
      {/* Seção com os tópicos do ebook */}
      <EbookTopics />
      
      {/* Seção de depoimentos para credibilidade */}
      <Testimonials />
      
      {/* Rodapé com informações adicionais */}
      <Footer />
    </div>
  );
}

export default App;