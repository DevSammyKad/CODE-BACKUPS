import { z } from 'zod';

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const hospitalSchema = z.object({
  hospitalName: z.string().min(3, 'Hospital name is required'),
  hospitalLocation: z.string().min(5, 'Location is required'),
  hospitalDescription: z.string().optional(),
  totalRooms: z.number().min(1, 'Total number of rooms must be at least 1'),
  roomsCategory: z.string().optional(),
  managerName: z.string().min(3, 'Manager name is required'),
  contactDetails: z.string().min(10, 'Invalid contact number'),
  cancellationPolicy: z.string().optional(),
  termsAndConditions: z.string().optional(),
});

export const settingsSchema = z.object({
  hospitalName: z.string().min(2, {
    message: 'Hospital name must be at least 2 characters.',
  }),
  hospitalLocation: z.string().min(2, {
    message: 'Location must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  description: z.string().optional(),
});
