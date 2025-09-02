// Definição de tipos para a aplicação
export interface EbookTopic {
  id: string;
  title: string;
  description?: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}