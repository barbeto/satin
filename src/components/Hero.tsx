import React from 'react';
import { Download, Baby, Heart, Shield } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

// Componente da seção principal com destaque para o ebook
const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                <Baby className="h-4 w-4" />
                <span>Guia Essencial para Mães</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Kit de Sobrevivência da
                <span className="text-primary-600 block">Mãe de 1ª Viagem</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Um guia completo com as respostas para as principais dúvidas que surgem 
                nos primeiros meses do seu bebê. Desenvolvido por uma pediatra experiente 
                para te dar segurança e tranquilidade.
              </p>
            </div>

            {/* Benefícios principais */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-primary-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Baseado em Evidências</h3>
                  <p className="text-sm text-gray-600">Informações científicas atualizadas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Segurança Total</h3>
                  <p className="text-sm text-gray-600">Orientações seguras e confiáveis</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Download className="h-8 w-8 text-primary-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Acesso Imediato</h3>
                  <p className="text-sm text-gray-600">Download instantâneo</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="space-y-4">
              <button
                onClick={onScrollToForm}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Preencher Dados e Baixar Grátis
              </button>
              
              <p className="text-sm text-gray-500">
                ✅ 100% Gratuito • ✅ Download Imediato • ✅ Sem Spam
              </p>
            </div>
          </div>

          {/* Imagem ilustrativa */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 shadow-2xl transform rotate-3">
              <div className="bg-white rounded-2xl p-6 shadow-lg transform -rotate-3">
                <img
                  src="https://drajulianasatin.com.br/wp-content/uploads/2024/09/foto-2-dra-juliana-satin-medicina-humanizada-e-acolhedora-1-768x621.webp"
                  alt="Dra. Juliana Satin - Pediatra"
                  className="w-full h-64 object-cover rounded-xl"
                />
                
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Kit de Sobrevivência da Mãe de 1ª Viagem
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Por Dra. Juliana Satin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;