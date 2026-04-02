import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

// Definisikan tipe variasi tombol
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'

// Definisikan props (data) yang diterima komponen ini
interface ButtonProps {
  title: string
  onPress: () => void
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
}

export function Button({ 
  title, 
  onPress, 
  variant = 'primary',
  loading = false, 
  disabled = false, 
  fullWidth = false 
}: ButtonProps) {
  
  // Mapping warna background berdasarkan variasi
  const getBgColor = () => {
    switch (variant) {
      case 'primary': return 'bg-brand-primary'
      case 'secondary': return 'bg-gray-200'
      case 'danger': return 'bg-brand-danger'
      case 'ghost': return 'bg-transparent'
    }
  }

  const getTextColor = () => {
    return variant === 'secondary' || variant === 'ghost' ? 'text-brand-primary' : 'text-white'
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`
        ${getBgColor()} 
        rounded-xl py-3 px-6 items-center justify-center
        ${fullWidth ? 'w-full' : 'self-start'}
        ${disabled ? 'opacity-50' : 'opacity-100'}
      `}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' || variant === 'danger' ? 'white' : '#1B4F72'} />
      ) : (
        <Text className={`${getTextColor()} font-bold text-base`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}