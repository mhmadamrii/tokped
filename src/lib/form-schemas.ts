import { z } from 'zod';

export const RegisterSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  // .refine(
  //   (e) => e === 'abcd@fg.com',
  //   'This email is not in our database',
  // ),
});

export const LoginSchema = z.object({
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
});

export const ProductSchema = z.object({
  name: z.string(),
  price: z.string(), // Assuming price comes as a string and needs conversion
  stock: z.string(), // Assuming stock comes as a string and needs conversion
  description: z.string(),
  isDiscount: z.boolean().optional().default(false),
  userId: z.string(), // userId should be included
});

export const CategorySchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});
