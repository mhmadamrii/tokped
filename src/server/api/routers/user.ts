import { z } from 'zod';
import { compare, hash } from 'bcryptjs';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc';

export const userRouter = createTRPCRouter({
  loginUser: publicProcedure
    .input(
      z.object({
        email: z.string().min(1),
        password: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (
        !user ||
        !(await compare(input.password, user.password!))
      ) {
        return null;
      }

      return {};
    }),

  createUser: publicProcedure
    .input(
      z.object({
        username: z.string().min(1),
        email: z.string().min(1),
        password: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await hash(input.password, 12);
      return ctx.db.user.create({
        data: {
          username: input.username,
          email: input.email,
          password: hashedPassword,
        },
      });
    }),
});
