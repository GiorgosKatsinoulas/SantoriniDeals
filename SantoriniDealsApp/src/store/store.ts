import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {ThemeSlice, createThemeSlice} from '../slices/themeSlice';

const useStore = create<ThemeSlice>()(
  persist(
    (...a) => ({
      ...createThemeSlice(...a),
    }),
    {
      name: 'appSettings',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({isDarkMode: state.isDarkMode, lang: state.lang}),
    },
  ),
);

export default useStore;
