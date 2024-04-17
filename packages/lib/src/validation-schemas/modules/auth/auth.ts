import z from 'zod';

export const signInValidationSchema = z.object({
  email: z.string().email({ message: 'Please enter correct email.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' })
    .regex(/^(?=.*[a-z])+$/, {
      message: 'Password must contains at least one lowercase letter.',
    })
    .regex(/^(?=.*[A-Z])+$/, {
      message: 'Password must contains at least one uppercase letter.',
    })
    .regex(/^(?=.*\d)$/, {
      message: 'Password must contains at least one digit.',
    }),
});
