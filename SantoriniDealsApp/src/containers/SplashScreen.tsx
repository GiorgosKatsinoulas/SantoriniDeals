import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native-ui-lib';
import {StackNavigationConstants} from '../navigation/navigationConstants';
import useStore from '../store/store';

const SplashScreen: FC = () => {
  const colors = useStore(state => state.colors);
  const navigation = useNavigation();
  //Mock
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const navigateToScreen = isAuthenticated
        ? StackNavigationConstants.TABS
        : StackNavigationConstants.AUTH_SCREEN;
      //@ts-ignore
      navigation.navigate(navigateToScreen);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation, isAuthenticated]);

  return (
    <>
      <View flex center backgroundColor={colors.backgroundColor}>
        <Text>Splash screen</Text>
      </View>
    </>
  );
};

export default SplashScreen;
