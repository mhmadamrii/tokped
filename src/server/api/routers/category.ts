import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc';

export const productCategory = createTRPCRouter({
  createCategory: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.category.create({
        data: {
          name: input.name,
          description: input.description,
        },
      });
    }),

  getCategory: protectedProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }),
});
