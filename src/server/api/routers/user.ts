import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc';

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        username: z.string().min(1),
        email: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          username: input.username,
          email: input.email,
        },
      });
    }),
});
