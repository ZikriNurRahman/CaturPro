import { z } from 'zod'

export const UserProfileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  displayName: z.string().min(2),
  avatarUrl: z.string().url().optional(),
  isPremium: z.boolean().default(false),
  premiumUntil: z.coerce.date().optional(),
})

export type UserProfile = z.infer<typeof UserProfileSchema>