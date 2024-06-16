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

  getProductById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.product.findUnique({
        where: {
          id: input.id,
        },
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
          price: parseFloat(input.price),
          stock: parseInt(input.stock),
          description: input.description,
          isDiscount: input.isDiscount,
          userId: input.userId,
        },
      });
    }),
});
