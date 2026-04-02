import React from 'react'
import { View, Text } from 'react-native'

type BadgeVariant = 'purple' | 'teal' | 'amber' | 'coral' | 'blue' | 'green'

interface BadgeProps {
  title: string
  variant?: BadgeVariant
}

export function Badge({ title, variant = 'blue' }: BadgeProps) {
  const variantStyles: Record<BadgeVariant, { bg: string; text: string }> = {
    purple: { bg: 'bg-[#EEEDFE]', text: 'text-[#3C3489]' },
    teal:   { bg: 'bg-[#E1F5EE]', text: 'text-[#0F6E56]' },
    amber:  { bg: 'bg-[#FAEEDA]', text: 'text-[#633806]' },
    coral:  { bg: 'bg-[#FAECE7]', text: 'text-[#712B13]' },
    blue:   { bg: 'bg-[#E6F1FB]', text: 'text-[#0C447C]' },
    green:  { bg: 'bg-[#EAF3DE]', text: 'text-[#27500A]' },
  }

  const { bg, text } = variantStyles[variant]

  return (
    <View className={`${bg} self-start px-2.5 py-1 rounded-full`}>
      <Text className={`${text} text-xs font-bold`}>{title}</Text>
    </View>
  )
}