import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home/HomeScreen';
import HistoryScreen from './screens/History/HistoryScreen';
import FormScreen from './screens/Form/FormScreen';
import NotificationScreen from './screens/Notification/NotificationScreen';
import SettingScreen from './screens/Setting/SettingScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import ButtonBottom from './components/ButtonBottom';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigatorStudent() {
  return (
    <Tab.Navigator tabBar={props => <ButtonBottom {...props} />}>
      <Tab.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
      <Tab.Screen name='History' component={HistoryScreen} />
      <Tab.Screen name='Form' component={FormScreen} />
      <Tab.Screen name='Notification' component={NotificationScreen} />
      <Tab.Screen name='Setting' component={SettingScreen} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Student' component={TabNavigatorStudent} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
