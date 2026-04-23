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
      .query("checkIns")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .take(30);
  },
});

export const create = mutation({
  args: {
    mood: v.optional(v.number()),
    note: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Not authenticated");

    const user = await ctx.db.get(userId);
    if (!user?.partnerId) throw new Error("No partner connected");

    return await ctx.db.insert("checkIns", {
      userId,
      partnerId: user.partnerId,
      mood: args.mood,
      note: args.note,
      createdAt: Date.now(),
    });
  },
});
