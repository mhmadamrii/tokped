import { z } from 'zod';
import { ProductSchema } from '~/lib/form-schemas';
import type { Product } from '@prisma/client';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc';

export const productRouter = createTRPCRouter({
  getProducts: protectedProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }),

  createProduct: protectedProcedure
    .input(ProductSchema)
    .mutation(async ({ ctx, input }) => {
      await new Promise((res) =>
        setTimeout(() => res(true), 0),
      );
      return ctx.db.product.create({
        data: {
          name: input.name,
          price: parseFloat(input.price), // Ensure this is a float
          stock: parseInt(input.stock), // Ensure this is an integer
          description: input.description,
          isDiscount: input.isDiscount,
          userId: input.userId, // Add userId to the data
        },
      });
    }),
});
