import React from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  label: string
  error?: string
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <View className={`w-full mb-4 ${className || ''}`}>
      <Text className="text-gray-700 font-medium mb-1.5 text-sm">
        {label}
      </Text>
      <TextInput
        className={`
          w-full bg-gray-50 border rounded-xl px-4 py-3 text-base text-gray-900
          focus:border-brand-primary focus:bg-white
          ${error ? 'border-brand-danger' : 'border-gray-200'}
        `}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && (
        <Text className="text-brand-danger text-xs mt-1.5">
          {error}
        </Text>
      )}
    </View>
  )
}