import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d', headerShown: false
    }}>
      <Tabs.Screen name="home" options={{
        title: 'Home', tabBarIcon: ({ color }) => (
          <Ionicons name='home-sharp' color={color} size={24} />
        )
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile', tabBarIcon: ({ color }) => (
          <AntDesign name='user' size={24} color={color} />
        )
      }} />
      <Tabs.Screen name="cart" options={{
        title: 'Shoppingcart', tabBarIcon: ({ color }) => (
          <AntDesign name='shoppingcart' size={24} color={color} />
        )
      }} />
    </Tabs>
  );
}
