import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthScreen from '../containers/AuthScreen';
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
          initialRouteName={StackNavigationConstants.AUTH_SCREEN}
          screenOptions={defaultScreenOptions}>
          <Stack.Screen
            name={StackNavigationConstants.AUTH_SCREEN}
            component={AuthScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default StackNavigator;
