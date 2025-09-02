import type { LeadFormData, FormErrors } from '../types';

// Utilitários para validação do formulário de leads
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  // Aceita telefones com 10 ou 11 dígitos (com ou sem DDD)
  return cleanPhone.length >= 10 && cleanPhone.length <= 11;
};

export const validateForm = (formData: LeadFormData): FormErrors => {
  const errors: FormErrors = {};

  // Validação do nome
  if (!formData.name.trim()) {
    errors.name = 'Nome é obrigatório';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Nome deve ter pelo menos 2 caracteres';
  }

  // Validação do email
  if (!formData.email.trim()) {
    errors.email = 'Email é obrigatório';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Email inválido';
  }

  // Validação do telefone (opcional, mas se preenchido deve ser válido)
  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = 'Telefone é obrigatório';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Telefone inválido';
  }

  return errors;
};

export const formatPhone = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Aplica máscara baseada no tamanho
  if (cleanPhone.length <= 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
};