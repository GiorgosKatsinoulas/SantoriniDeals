import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthScreen from '../containers/AuthScreen';
import ChatScreen from '../containers/ChatScreen';
import DashboardScreen from '../containers/DashboardScreen';
import LoginScreen from '../containers/LoginScreen';
import ProfileSettingsScreen from '../containers/ProfileSettingsScreen';
import SignUpScreen from '../containers/SignUpScreen';
import SplashScreen from '../containers/SplashScreen';
import useStore from '../store/store';
import {StackNavigationConstants} from './navigationConstants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const defaultScreenOptions = {
  headerShown: false,
};

const DashboardTabs = () => {
  const colors = useStore(state => state.colors);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: defaultScreenOptions.headerShown,
        tabBarActiveTintColor: colors.buttonColor,
        tabBarInactiveTintColor: colors.textColor,
        tabBarStyle: {backgroundColor: colors.backgroundColor},
        tabBarLabelStyle: {fontSize: 14},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={StackNavigationConstants.DASHBOARD_SCREEN}
        component={DashboardScreen}
      />
      <Tab.Screen
        name={StackNavigationConstants.CHAT_SCREEN}
        component={ChatScreen}
      />
      <Tab.Screen
        name={StackNavigationConstants.PROFILE_SCREEN}
        component={ProfileSettingsScreen}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={StackNavigationConstants.SPLASH_SCREEN}
          screenOptions={defaultScreenOptions}>
          <Stack.Screen
            name={StackNavigationConstants.SPLASH_SCREEN}
            component={SplashScreen}
          />
          <Stack.Screen
            name={StackNavigationConstants.AUTH_SCREEN}
            component={AuthScreen}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen
            name={StackNavigationConstants.LOGIN_SCREEN}
            component={LoginScreen}
          />
          <Stack.Screen
            name={StackNavigationConstants.SIGNUP_SCREEN}
            component={SignUpScreen}
          />
          <Stack.Screen
            name={StackNavigationConstants.TABS}
            component={DashboardTabs}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackNavigator;
