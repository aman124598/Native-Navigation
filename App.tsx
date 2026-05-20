import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DynamicTabNavigator from './src/navigators/tabs/DynamicTabNavigator';
import StaticNavigator from './src/navigators/stack/StaticNavigator';
import StaticDrawerNavigator from './src/navigators/drawer/StaticDrawerNavigator';
import DynamicDrawerNavigator from './src/navigators/drawer/DynamicDrawerNavigator';

function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,

  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <StaticDrawerNavigator />
    </>
  );

}

// 1. navigate() Go to a screen by name,
// 2.goBack() Go back to the previous screen in the stack,
// 3.push() Go to a screen by name, even if you're already on that screen,
// 4.popToTop() Go back to the first screen in the stack,
// 5.replace() Replace the current screen with another one,
// 6.reset() Replace the navigation state with a new one,
// 7.setParams() Change the props of the current route,
// 8.isFocused() Determine if the screen is currently focused.