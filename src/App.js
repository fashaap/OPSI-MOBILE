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
import ListTeacherScreen from './screens/List/ListTeacherScreen';
import ListTeacherBKScreen from './screens/List/ListTeacherBKScreen';
import ListTeacherPiketScreen from './screens/List/ListTeacherPiketScreen';
import ListSecurityScreen from './screens/List/ListSecurityScreen';
import HistoryDetailScreen from './screens/History/HistoryDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ListGuruMapel" component={ListTeacherScreen} />
      <Stack.Screen name="ListGuruBK" component={ListTeacherBKScreen} />
      <Stack.Screen name="ListGuruPiket" component={ListTeacherPiketScreen} />
      <Stack.Screen name="ListSecurity" component={ListSecurityScreen} />
    </Stack.Navigator>
  );
}

function HistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HistoryMain" options={{headerLeft: null}} component={HistoryScreen} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetailScreen} />
    </Stack.Navigator>
  );
}

function FormStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FormMain" component={FormScreen} options={{ headerShown: false }} />
      {/* Add other detail screens here if needed */}
    </Stack.Navigator>
  );
}

function NotificationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotificationMain" component={NotificationScreen} options={{ headerShown: false }} />
      {/* Add other detail screens here if needed */}
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingMain" component={SettingScreen} options={{ headerShown: false }} />
      {/* Add other detail screens here if needed */}
    </Stack.Navigator>
  );
}

function TabNavigatorStudent() {
  return (
    <Tab.Navigator tabBar={props => <ButtonBottom {...props} />}>
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeStack} />
      <Tab.Screen name="History" options={{ headerShown: false }} component={HistoryStack} />
      <Tab.Screen name="Form" component={FormStack} />
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Student" component={TabNavigatorStudent} />
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
