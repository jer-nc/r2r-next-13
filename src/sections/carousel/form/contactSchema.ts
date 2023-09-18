"use client";

import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: 'Mínimo 2 letras'
  }),
  email: z.string().email({
    message: 'El formato de correo electrónico no es válido'
  }),
  phone: z.string().min(9, {
    message: 'Mínimo 9 numeros'
  }),
  city: z.string().min(2, {
    message: 'Mínimo 2 letras'
  }),
  zone: z.string().min(2, {
    message: 'Mínimo 2 letras'
  }),
  details: z.string().optional(),
});
