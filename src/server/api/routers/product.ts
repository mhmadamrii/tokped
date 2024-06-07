import { z } from 'zod';
import { ProductSchema } from '~/lib/form-schemas';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc';

export const productRouter = createTRPCRouter({
  createProduct: protectedProcedure
    .input(ProductSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
          stock: input.stock,
          category: input.category,
          images: input.images,
          isDiscount: input.isDiscount,
        },
      });
    }),
});
