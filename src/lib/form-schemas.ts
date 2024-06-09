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
  price: z.number(),
  isDiscount: z.boolean(),
  stock: z.number(),
  description: z.string(),
  category: z.string(),
  images: z.string(),
});

export const CategorySchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});
