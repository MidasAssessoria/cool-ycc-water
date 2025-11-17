import { z } from "zod";
import { addDays } from "date-fns";

export const bookingSchema = z.object({
  visitDate: z.date({
    required_error: "A data da visita é obrigatória",
  })
    .refine((date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, {
      message: "A data deve ser hoje ou futura"
    })
    .refine((date) => {
      const maxDate = addDays(new Date(), 90);
      return date <= maxDate;
    }, {
      message: "A data deve estar dentro de 90 dias"
    }),

  numberOfPeople: z.string({
    required_error: "Número de pessoas é obrigatório",
  }).min(1, {
    message: "Selecione o número de pessoas"
  }),

  fullName: z.string({
    required_error: "Nome completo é obrigatório",
  })
    .trim()
    .min(3, {
      message: "Nome deve ter pelo menos 3 caracteres"
    })
    .max(100, {
      message: "Nome deve ter no máximo 100 caracteres"
    }),

  phone: z.string({
    required_error: "Telefone é obrigatório",
  })
    .regex(/^\+595\s\d{3}\s\d{3}\s\d{3}$/, {
      message: "Formato: +595 XXX XXX XXX (9 dígitos)"
    }),

  acceptTerms: z.boolean({
    required_error: "Você deve aceitar os termos",
  }).refine((val) => val === true, {
    message: "Você deve aceitar os termos para continuar"
  }),

  email: z.string()
    .email({
      message: "Email inválido"
    })
    .optional()
    .or(z.literal("")),

  message: z.string()
    .max(500, {
      message: "Mensagem deve ter no máximo 500 caracteres"
    })
    .optional()
    .or(z.literal("")),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
