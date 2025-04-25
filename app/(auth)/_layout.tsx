
import { Stack } from 'expo-router';

export default function Layout() {

  return (
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="verify-phone" options={{ headerShown: false }} />
        <Stack.Screen name="success-message" options={{ headerShown: false }} />
        <Stack.Screen name="security-pin" options={{ headerShown: false }} />
        <Stack.Screen name="bvn-verification" options={{ headerShown: false }} />
        <Stack.Screen name="email-verification" options={{ headerShown: false }} />
        <Stack.Screen name="otp-verification" options={{ headerShown: false }} />

      </Stack>
 
  );
}
