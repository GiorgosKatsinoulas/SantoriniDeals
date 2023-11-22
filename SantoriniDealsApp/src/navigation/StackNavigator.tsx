import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthScreen from '../containers/AuthScreen';
import DashboardScreen from '../containers/DashboardScreen';
import LoginScreen from '../containers/LoginScreen';
import SignUpScreen from '../containers/SignUpScreen';
import SplashScreen from '../containers/SplashScreen';
import {StackNavigationConstants} from './navigationConstants';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const defaultScreenOptions = {
    headerShown: false,
  };
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
            name={StackNavigationConstants.DASHBOARD_SCREEN}
            component={DashboardScreen}
            options={{gestureEnabled: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackNavigator;
