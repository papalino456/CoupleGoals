import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "./utils";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];

    const user = await ctx.db.get(userId);
    if (!user?.partnerId) return [];

    return await ctx.db
      .query("goals")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    category: v.string(),
    targetDate: v.optional(v.number()),
    isShared: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const user = await ctx.db.get(userId);
    if (!user?.partnerId) throw new Error("No partner connected");

    return await ctx.db.insert("goals", {
      userId,
      partnerId: user.partnerId,
      title: args.title,
      description: args.description,
      category: args.category,
      targetDate: args.targetDate,
      isShared: args.isShared,
      completedAt: undefined,
      createdAt: Date.now(),
    });
  },
});

export const complete = mutation({
  args: { goalId: v.id("goals") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const goal = await ctx.db.get(args.goalId);
    if (!goal) throw new Error("Goal not found");
    if (goal.userId !== userId && goal.partnerId !== userId) {
      throw new Error("Not authorized");
    }

    await ctx.db.patch(args.goalId, { completedAt: Date.now() });
  },
});
