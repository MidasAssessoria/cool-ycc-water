import { z } from "zod";

export const planVisitSchema = z.object({
  visitDate: z.date({
    required_error: "Por favor, seleccione una fecha para su visita",
  }),
  visitTime: z.enum(["morning", "afternoon"], {
    required_error: "Por favor, seleccione un horario",
  }),
  fullName: z
    .string()
    .trim()
    .min(3, { message: "El nombre debe tener mínimo 3 caracteres" })
    .max(100, { message: "El nombre debe tener máximo 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Teléfono inválido" })
    .max(20, { message: "Teléfono muy largo" }),
  numberOfPeople: z.enum(["1-2", "3-4", "5+"], {
    required_error: "Por favor, seleccione el número de personas",
  }),
});

export type PlanVisitFormData = z.infer<typeof planVisitSchema>;
