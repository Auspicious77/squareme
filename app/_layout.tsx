import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'ClashGrotesk-Bold': require('../assets/fonts/ClashGrotesk-Bold.otf'),
    'ClashGrotesk-ExtraLight': require('../assets/fonts/ClashGrotesk-Extralight.otf'),
    'ClashGrotesk-Light': require('../assets/fonts/ClashGrotesk-Light.otf'),
    'ClashGrotesk-Medium': require('../assets/fonts/ClashGrotesk-Medium.otf'),
    'ClashGrotesk-Regular': require('../assets/fonts/ClashGrotesk-Regular.otf'),
    'ClashGrotesk-SemiBold': require('../assets/fonts/ClashGrotesk-Semibold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack 
      // initialRouteName='(auth)'
      >
         <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
