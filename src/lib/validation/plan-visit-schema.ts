import { z } from "zod";

export const planVisitSchema = z.object({
  visitDate: z.date({
    required_error: "Por favor, selecione uma data para sua visita",
  }),
  visitTime: z.enum(["morning", "afternoon"], {
    required_error: "Por favor, selecione um horário",
  }),
  fullName: z
    .string()
    .trim()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Telefone inválido" })
    .max(20, { message: "Telefone muito longo" }),
  numberOfPeople: z.enum(["1-2", "3-4", "5+"], {
    required_error: "Por favor, selecione o número de pessoas",
  }),
});

export type PlanVisitFormData = z.infer<typeof planVisitSchema>;
