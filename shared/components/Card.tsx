import React from 'react'
import { View, ViewProps } from 'react-native'

interface CardProps extends ViewProps {
  children: React.ReactNode
  noPadding?: boolean
}

export function Card({ children, noPadding = false, className, ...props }: CardProps) {
  return (
    <View
      className={`
        bg-white rounded-2xl border border-gray-100 shadow-sm
        ${noPadding ? '' : 'p-4'} 
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </View>
  )
}