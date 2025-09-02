import React, { useState } from 'react';
import { Download, Mail, User, Phone, CheckCircle, Lock } from 'lucide-react';
import type { LeadFormData, FormErrors } from '../types';
import { validateForm, formatPhone } from '../utils/formValidation';

interface LeadFormProps {
  id?: string;
}

// Componente do formulário de captura de leads - MODIFICADO para aparecer primeiro
const LeadForm: React.FC<LeadFormProps> = ({ id = 'lead-form' }) => {
  // Estados do formulário
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para verificar se o formulário está válido para habilitar o botão
  const isFormValid = () => {
    const validationErrors = validateForm(formData);
    return Object.keys(validationErrors).length === 0 && 
           formData.name.trim() !== '' && 
           formData.email.trim() !== '';
  };

  // Função para atualizar dados do formulário
  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Remove erro do campo quando usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Função para formatar telefone em tempo real
  const handlePhoneChange = (value: string) => {
    const formattedPhone = formatPhone(value);
    handleInputChange('phone', formattedPhone);
  };

  // Função para fazer download do ebook - NOVA FUNCIONALIDADE
  const handleDownload = async () => {
    // Validação final antes do download
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulação de envio dos dados (aqui você integraria com sua API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Abre o link do Google Drive em nova aba
      window.open('https://drive.google.com/file/d/12BZintfZw0OapufmJf7Ne8IUi0zfcoKM/view?usp=sharing', '_blank');
      
      // Redireciona para a página de atendimento após um breve delay
      setTimeout(() => {
        window.location.href = 'https://drajulianasatin.com.br/atendimento/';
      }, 2000);
      
      // Marca como enviado com sucesso
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Erro ao processar download:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Renderização do estado de sucesso
  if (isSubmitted) {
    return (
      <div id={id} className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">
          Download Iniciado com Sucesso!
        </h3>
        <p className="text-green-700 mb-4">
          O ebook foi aberto em uma nova aba. Se não abriu automaticamente, 
          <a 
            href="https://drive.google.com/file/d/12BZintfZw0OapufmJf7Ne8IUi0zfcoKM/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-800 underline font-semibold ml-1"
          >
            clique aqui para baixar
          </a>. Você será redirecionada para nossa página de atendimento em instantes.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '' });
          }}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Baixar novamente
        </button>
      </div>
    );
  }

  return (
    <section id={id} className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Cabeçalho do formulário - MODIFICADO para ser mais direto */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Preencha seus dados para baixar o ebook
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Acesso imediato ao "Kit de Sobrevivência da Mãe de 1ª Viagem"
          </p>
          
          {/* Indicador de segurança */}
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
            <Lock className="h-4 w-4" />
            <span>Seus dados estão seguros conosco</span>
          </div>
        </div>

        {/* Formulário - MODIFICADO para ser o foco principal */}
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              
              {/* Campo Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome completo"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Campo Telefone - MODIFICADO para obrigatório */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(11) 99999-9999"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Botão de download - MODIFICADO para só habilitar quando válido */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={!isFormValid() || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isFormValid() && !isSubmitting
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 text-white shadow-lg hover:shadow-xl cursor-pointer' 
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Processando...</span>
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5" />
                    <span>Baixar Ebook Gratuito</span>
                  </>
                )}
              </button>

              {/* Disclaimer - MODIFICADO */}
              <p className="text-xs text-gray-500 text-center">
                Ao baixar o ebook, você concorda em receber emails informativos sobre pediatria. 
                Seus dados estão seguros e você pode cancelar a qualquer momento.
              </p>
            </form>
          </div>
        </div>

        {/* Garantias - ADICIONADO para aumentar confiança */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Conteúdo Exclusivo</h4>
            <p className="text-sm text-gray-600">Informações que você não encontra em outros lugares</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Zero Spam</h4>
            <p className="text-sm text-gray-600">Apenas conteúdo de qualidade quando relevante</p>
          </div>
          
          <div className="text-center">
            <div className="bg-secondary-100 text-secondary-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Suporte Contínuo</h4>
            <p className="text-sm text-gray-600">Acesso a conteúdos atualizados sobre pediatria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;