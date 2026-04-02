import { z } from 'zod'

// Schema untuk satu titik posisi catur (Node)
export const OpeningNodeSchema = z.object({
  id: z.string().uuid(),
  courseId: z.string().uuid(),
  parentId: z.string().uuid().nullable(),
  fen: z.string(), // Format posisi papan catur standar
  san: z.string(), // Format langkah (contoh: "e4", "Nf3")
  explanation: z.string().nullable(), // Penjelasan bahasa Indonesia
  moveOrder: z.number().int().nonnegative(),
})

// Schema untuk satu kursus utuh
export const CourseSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  titleId: z.string().min(1), // Judul lokal: "Pertahanan Sisilia"
  description: z.string().nullable(),
  difficulty: z.enum(['pemula', 'menengah', 'lanjut']),
  isPremium: z.boolean().default(false),
  totalNodes: z.number().int().nonnegative().default(0),
  authorName: z.string().optional(),
  thumbnail: z.string().url().optional(),
})

// Ekstrak TypeScript type secara otomatis dari Zod Schema
export type OpeningNode = z.infer<typeof OpeningNodeSchema>
export type Course = z.infer<typeof CourseSchema>