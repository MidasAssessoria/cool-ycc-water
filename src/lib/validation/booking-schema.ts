import { z } from "zod";
import { addDays } from "date-fns";

export const bookingSchema = z.object({
  visitDate: z.date({
    required_error: "La fecha de visita es obligatoria",
  })
    .refine((date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, {
      message: "La fecha debe ser hoy o futura"
    })
    .refine((date) => {
      const maxDate = addDays(new Date(), 90);
      return date <= maxDate;
    }, {
      message: "La fecha debe estar dentro de 90 días"
    }),

  numberOfPeople: z.string({
    required_error: "Número de personas es obligatorio",
  }).min(1, {
    message: "Seleccione el número de personas"
  }),

  fullName: z.string({
    required_error: "Nombre completo es obligatorio",
  })
    .trim()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres"
    })
    .max(100, {
      message: "El nombre debe tener máximo 100 caracteres"
    }),

  phone: z.string({
    required_error: "Teléfono es obligatorio",
  })
    .regex(/^\+595\s\d{3}\s\d{3}\s\d{3}$/, {
      message: "Formato: +595 XXX XXX XXX (9 dígitos)"
    }),

  acceptTerms: z.boolean({
    required_error: "Debe aceptar los términos",
  }).refine((val) => val === true, {
    message: "Debe aceptar los términos para continuar"
  }),

  email: z.string()
    .email({
      message: "Email inválido"
    })
    .optional()
    .or(z.literal("")),

  message: z.string()
    .max(500, {
      message: "El mensaje debe tener máximo 500 caracteres"
    })
    .optional()
    .or(z.literal("")),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
