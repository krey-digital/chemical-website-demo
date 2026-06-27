import { action, mutation } from "./_generated/server";
import { v } from "convex/values";

// Admin mutation: generate upload URL for SDS file
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    // In a real app, you'd verify admin auth here
    return await ctx.storage.generateUploadUrl();
  },
});

// Public action: get signed download URL for SDS file
export const getDownloadUrl = action({
  args: { fileId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.fileId);
  },
});

// Admin mutation: delete SDS file
export const deleteFile = mutation({
  args: { fileId: v.id("_storage") },
  handler: async (ctx, args) => {
    await ctx.storage.delete(args.fileId);
    return args.fileId;
  },
});
