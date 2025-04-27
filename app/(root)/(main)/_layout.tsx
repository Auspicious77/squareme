
import { Stack } from 'expo-router';

export default function Layout() {

  return (
    <Stack screenOptions={{
      animation: 'ios_from_right'
    }}>
        <Stack.Screen name="(payment)/send-money" options={{ headerShown: false }} />
        <Stack.Screen name="(payment)/send-money-main" options={{ headerShown: false }} />
        <Stack.Screen name="(payment)/confirm-transaction" options={{ headerShown: false }} />
        <Stack.Screen name="(payment)/confirm-pin" options={{ headerShown: false }} />
        <Stack.Screen name="(payment)/request-money" options={{ headerShown: false }} />
        <Stack.Screen name="(payment)/request-money-main" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/badge-screen" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/rewards-screen" options={{ headerShown: false }} />


      </Stack>
 
  );
}
