import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function RootLayout() {


  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden"); 
    NavigationBar.setBehaviorAsync("overlay-swipe"); 
  }, []);

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
