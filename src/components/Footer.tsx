import React from 'react';
import { Heart, Stethoscope } from 'lucide-react';

// Componente do rodapé da página
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Informações da médica */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 p-2 rounded-full">
                <Stethoscope className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">Dra. Juliana Satin</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Médica Pediatra dedicada a orientar famílias com informações baseadas em evidências científicas, 
              promovendo o desenvolvimento saudável das crianças.
            </p>
          </div>

          {/* Sobre o ebook */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sobre o Ebook</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 13 tópicos essenciais</li>
              <li>• Mais de 20 páginas de conteúdo</li>
              <li>• Baseado em evidências científicas</li>
              <li>• Linguagem acessível</li>
              <li>• Download imediato</li>
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h3 className="text-lg font-bold mb-4">Especialidades</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Pediatria Geral</li>
              <li>• Puericultura</li>
              <li>• Desenvolvimento Infantil</li>
              <li>• Amamentação</li>
              <li>• Vacinas</li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Dra. Juliana Satin. Todos os direitos reservados.
            </p>

            {/* Mensagem inspiracional */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>para mães e bebês</span>
            </div>
          </div>

          {/* Disclaimer médico */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs text-center">
              <strong>Disclaimer:</strong> Este material é exclusivamente informativo e educacional. 
              Não substitui consulta médica. Sempre consulte seu pediatra para orientações específicas sobre seu bebê.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;