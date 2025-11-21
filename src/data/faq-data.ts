import { Users, ArrowRightLeft, Zap, DollarSign, CreditCard, BadgePercent, Banknote, FileText, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface FAQData {
  id: string;
  category: 'cobertura' | 'activacion' | 'pago' | 'contratacion';
  categoryLabel: string;
  categoryColor: 'cyan' | 'orange';
  icon: LucideIcon;
  question: string;
  answer: string;
  actionButton?: {
    label: string;
    action: 'scroll-pricing' | 'whatsapp';
    href?: string;
  };
}

/**
 * FAQ Data Structure with icons and action buttons
 * Organized by category for better UX
 */
export const faqData: FAQData[] = [
  // COBERTURA Y BENEFICIOS
  {
    id: 'item-1',
    category: 'cobertura',
    categoryLabel: 'Cobertura y Beneficios',
    categoryColor: 'cyan',
    icon: Users,
    question: '¿Quiénes están cubiertos en la membresía?',
    answer: 'Titular + padres + cónyuge + todos los hijos menores de 18 años. Puedes agregar suegros por USD 250 cada uno + USD 20/mes.',
    actionButton: {
      label: 'Ver planes detallados',
      action: 'scroll-pricing'
    }
  },
  {
    id: 'item-2',
    category: 'cobertura',
    categoryLabel: 'Cobertura y Beneficios',
    categoryColor: 'cyan',
    icon: ArrowRightLeft,
    question: '¿Puedo transferir o heredar mi membresía?',
    answer: 'Sí, ambas membresías son transferibles a herederos o terceros.'
  },
  
  // ACTIVACIÓN Y USO
  {
    id: 'item-3',
    category: 'activacion',
    categoryLabel: 'Activación y Uso',
    categoryColor: 'orange',
    icon: Zap,
    question: '¿Cuándo puedo comenzar a usar el parque?',
    answer: 'Tras pagar el 50% de la membresía, recibes tu carnet y acceso inmediato.'
  },
  
  // OPCIONES DE PAGO
  {
    id: 'item-4',
    category: 'pago',
    categoryLabel: 'Opciones de Pago',
    categoryColor: 'cyan',
    icon: DollarSign,
    question: '¿Cuáles son las opciones de pago para la Membresía Familiar?',
    answer: 'Puedes pagar en contado (USD 1.350 con 10% de descuento) o parcelado (USD 300 de entrada + 12 cuotas de USD 100). El precio total es USD 1.500.',
    actionButton: {
      label: 'Ver planes familiares',
      action: 'scroll-pricing'
    }
  },
  {
    id: 'item-5',
    category: 'pago',
    categoryLabel: 'Opciones de Pago',
    categoryColor: 'cyan',
    icon: DollarSign,
    question: '¿Cuáles son las opciones de pago para la Membresía VIP?',
    answer: 'Puedes pagar en contado (USD 4.500 en pago único) o parcelado (USD 1.000 de entrada + 10 cuotas de USD 400).',
    actionButton: {
      label: 'Ver planes VIP',
      action: 'scroll-pricing'
    }
  },
  {
    id: 'item-6',
    category: 'pago',
    categoryLabel: 'Opciones de Pago',
    categoryColor: 'cyan',
    icon: CreditCard,
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito (Visa, Mastercard, Amex), transferencia bancaria, billeteras digitales (QR Bancard, Tigo Money, Personal Pay) y cheques diferidos. La conversión de USD a Guaraníes se realiza según la cotización del BCP del día.'
  },
  {
    id: 'item-7',
    category: 'pago',
    categoryLabel: 'Opciones de Pago',
    categoryColor: 'cyan',
    icon: BadgePercent,
    question: '¿Hay descuento por pago en contado?',
    answer: 'Sí, la Membresía Familiar ofrece un 10% de descuento en pago contado (USD 1.350 en lugar de USD 1.500), ahorrando USD 150. La Membresía VIP mantiene el mismo precio de USD 4.500.'
  },
  {
    id: 'item-8',
    category: 'pago',
    categoryLabel: 'Opciones de Pago',
    categoryColor: 'cyan',
    icon: Banknote,
    question: '¿Puedo pagar en Guaraníes?',
    answer: 'Sí, todos los precios en dólares pueden pagarse en Guaraníes según la cotización del BCP del día del pago.'
  },
  
  // PROCESO DE CONTRATACIÓN
  {
    id: 'item-9',
    category: 'contratacion',
    categoryLabel: 'Proceso de Contratación',
    categoryColor: 'orange',
    icon: FileText,
    question: '¿Cómo funciona el proceso de contratación?',
    answer: 'El proceso tiene 4 pasos simples: 1) Elegir tu membresía (Familiar o VIP), 2) Completar el registro online en nuestro sistema externo para generar tu recibo digital, 3) Realizar el pago presencialmente en YCC Water Park (Ruta 1 Km 13.5, Ypané), y 4) Activación inmediata tras pagar el 50% - recibes tu carnet y acceso al parque.'
  },
  {
    id: 'item-10',
    category: 'contratacion',
    categoryLabel: 'Proceso de Contratación',
    categoryColor: 'orange',
    icon: MapPin,
    question: '¿Dónde realizo el pago presencial?',
    answer: 'El pago se realiza en YCC Water Park, ubicado en Ruta 1 Km 13.5, Ypané, Paraguay. Lleva tu recibo digital generado en el registro online.',
    actionButton: {
      label: 'Ver ubicación en mapa',
      action: 'scroll-pricing' // Could be changed to open Google Maps
    }
  }
];
