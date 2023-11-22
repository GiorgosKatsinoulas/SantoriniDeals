/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {I18nextProvider} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './src/navigation/StackNavigator';
import useStore from './src/store/store';
import {extractStringProperties} from './src/utils/functions/extractStringProperties';
import i18n from './src/utils/functions/i18n';
import {initializeColor} from './src/utils/functions/initializeColors';

function App(): JSX.Element {
  const isDarkMode = useStore(state => state.isDarkMode);
  const colors = useStore(state => state.colors);
  const initializeTheme = useStore(state => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    initializeColor(isDarkMode, extractStringProperties(colors));
  }, [isDarkMode, colors]);

  return (
    //TODO: Fix this
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <I18nextProvider i18n={i18n}>
          <StackNavigator />
        </I18nextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
