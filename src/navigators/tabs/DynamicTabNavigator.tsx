import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Dashboard", tabBarLabel: "Home", tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color={color} />, tabBarActiveTintColor: 'tomato' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile", tabBarLabel: "Profile", tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />, tabBarActiveTintColor: 'tomato' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings", tabBarLabel: "Settings", tabBarIcon: ({ color }) => <Ionicons name="settings" size={20} color={color} />, tabBarActiveTintColor: 'tomato' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}