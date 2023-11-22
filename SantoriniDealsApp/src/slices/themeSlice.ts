import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from 'react-native-ui-lib';
import {StateCreator} from 'zustand';
import {Theme, darkTheme, lightTheme} from '../styles/themes';
import {extractStringProperties} from '../utils/functions/extractStringProperties';
import {initializeColor} from '../utils/functions/initializeColors';
import {lang} from '../utils/langString';

export interface ThemeSlice {
  isDarkMode: boolean;
  lang: string;
  changeLang: (lang: string) => void;
  colors: Theme;
  toggleTheme: () => void;
  initializeTheme: () => void;
}

export const createThemeSlice: StateCreator<ThemeSlice, [], []> = (
  set,
  get,
) => ({
  isDarkMode: false,
  lang: lang.none,
  changeLang: async newLang => {
    set({lang: newLang});
  },
  colors: lightTheme,
  toggleTheme: async () => {
    set(() => {
      const isDarkMode = !get().isDarkMode;
      const colors = isDarkMode ? darkTheme : lightTheme;
      Colors.loadColors(extractStringProperties(colors));
      return {isDarkMode, colors}; // Return new state
    });
  },
  initializeTheme: async () => {
    try {
      // Retrieve the stored theme preference
      const temp = await AsyncStorage.getItem('appSettings').then(res => {
        //@ts-ignore
        return JSON.parse(res);
      });
      const storedIsDarkMode = temp?.state?.isDarkMode;
      if (storedIsDarkMode) {
        const colors = storedIsDarkMode ? darkTheme : lightTheme;
        initializeColor(storedIsDarkMode, extractStringProperties(colors));
        set({isDarkMode: storedIsDarkMode, colors});
      }
    } catch (error) {
      console.error('Error initializing theme:', error);
    }
  },
});
