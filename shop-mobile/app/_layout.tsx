import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="index"/>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
