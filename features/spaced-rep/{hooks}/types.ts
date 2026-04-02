import { z } from 'zod'

// Schema untuk mencatat progress hafalan tiap user per posisi catur
export const UserProgressSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  nodeId: z.string().uuid(),
  repetitions: z.number().int().nonnegative().default(0),
  easeFactor: z.number().min(1.3).default(2.5), // Nilai bawaan algoritma SM-2
  intervalDays: z.number().int().nonnegative().default(1),
  nextReviewAt: z.coerce.date(), // Zod akan otomatis mengubah string tanggal jadi object Date
  lastReviewedAt: z.coerce.date().optional(),
})

export type UserProgress = z.infer<typeof UserProgressSchema>