import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    partnerId: v.optional(v.id("users")),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_partner", ["partnerId"]),

  goals: defineTable({
    userId: v.id("users"),
    partnerId: v.id("users"),
    title: v.string(),
    description: v.optional(v.string()),
    category: v.string(), // e.g., "travel", "fitness", "finance", "learning"
    targetDate: v.optional(v.number()), // timestamp
    completedAt: v.optional(v.number()),
    isShared: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_partner", ["partnerId"])
    .index("by_category", ["category"]),

  milestones: defineTable({
    goalId: v.id("goals"),
    title: v.string(),
    description: v.optional(v.string()),
    completedAt: v.optional(v.number()),
    createdAt: v.number(),
  }).index("by_goal", ["goalId"]),

  checkIns: defineTable({
    userId: v.id("users"),
    partnerId: v.id("users"),
    mood: v.optional(v.number()), // 1-10 scale
    note: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_partner", ["partnerId"]),
});
