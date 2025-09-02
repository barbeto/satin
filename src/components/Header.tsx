import React from 'react';
import { Stethoscope, Star } from 'lucide-react';

// Componente do cabeçalho com informações da médica
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo e nome da médica */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary-600 p-2 rounded-full">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Dra. Juliana Satin
              </h1>
              <p className="text-sm text-gray-600">
                Médica Pediatra • CRM 52-92179-3
              </p>
            </div>
          </div>

          {/* Credenciais */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
           
            <span> Especialista em Pediatria</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
          <span>CRM: 52-92179-3</span>