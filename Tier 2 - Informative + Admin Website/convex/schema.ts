import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    casNumber: v.string(), // Format: XXXXXXX-XX-X
    unNumber: v.optional(v.string()), // Format: UN####
    category: v.union(
      v.literal("acids"),
      v.literal("solvents"),
      v.literal("reagents"),
      v.literal("salts"),
      v.literal("glass-chemicals"),
      v.literal("other")
    ),
    grade: v.union(
      v.literal("technical"),
      v.literal("commercial"),
      v.literal("lab"),
      v.literal("pharma")
    ),
    description: v.string(),
    purityMin: v.optional(v.number()),
    purityMax: v.optional(v.number()),
    packagingOptions: v.array(
      v.object({
        size: v.string(),
        unit: v.union(
          v.literal("KG"),
          v.literal("L"),
          v.literal("ML"),
          v.literal("G"),
          v.literal("MT")
        ),
      })
    ),
    ghsSignalWord: v.optional(
      v.union(v.literal("DANGER"), v.literal("WARNING"))
    ),
    ghsPictograms: v.array(v.string()), // ["GHS01", "GHS05"]
    images: v.optional(
      v.array(
        v.object({
          fileId: v.id("_storage"),
          isPrimary: v.boolean(),
        })
      )
    ), // Product images with one marked as primary
    sdsFileId: v.optional(v.id("_storage")),
    sdsVersion: v.optional(v.string()),
    sdsIssuedAt: v.optional(v.number()),
    applications: v.array(v.string()),
    isPublished: v.boolean(),
    isDraft: v.boolean(), // true = draft (unpublished), false = published
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_published", ["isPublished"])
    .index("by_draft", ["isDraft"]),

  inquiries: defineTable({
    productId: v.optional(v.id("products")),
    productName: v.optional(v.string()), // Denormalised for display in inbox
    name: v.string(),
    company: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    quantity: v.optional(v.string()),
    destination: v.optional(v.string()),
    message: v.string(),
    type: v.union(
      v.literal("rfq"),
      v.literal("coa"),
      v.literal("tds"),
      v.literal("general")
    ),
    status: v.union(
      v.literal("new"),
      v.literal("contacted"),
      v.literal("quoted"),
      v.literal("closed")
    ),
    adminNotes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_product", ["productId"])
    .index("by_created", ["createdAt"]),

  certifications: defineTable({
    name: v.string(),
    issuingBody: v.string(),
    certNumber: v.optional(v.string()),
    issuedAt: v.number(),
    expiresAt: v.optional(v.number()),
    fileId: v.optional(v.id("_storage")),
    isActive: v.boolean(),
  }),

  // Import history tracking
  importHistory: defineTable({
    fileName: v.string(),
    fileType: v.union(v.literal("csv"), v.literal("json")),
    totalRecords: v.number(),
    successCount: v.number(),
    failedCount: v.number(),
    updatedCount: v.number(),
    errors: v.array(v.string()),
    importedBy: v.string(), // admin email or user ID
    createdAt: v.number(),
  }).index("by_created", ["createdAt"]),
});
