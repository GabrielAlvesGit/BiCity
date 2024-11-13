import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center bg-blue-500'>
      <Text className='text-3xl' > index </Text>
      <Link href='/profile' > Go to profile</Link>
    </View>
  )
}