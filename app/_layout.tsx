import { Stack } from 'expo-router';
import { useState } from 'react';
import { UserContext } from '../context/UserContext';

export default function RootLayout() {
  const [email, setEmail] = useState<string>('');

  return (
    <UserContext.Provider value={{ email, setEmail }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </UserContext.Provider>
  );
}

