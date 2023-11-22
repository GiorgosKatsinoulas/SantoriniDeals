import {Colors} from 'react-native-ui-lib';
import {darkTheme, lightTheme} from '../../styles/themes';
import {extractStringProperties} from './extractStringProperties';

export function initializeColor(
  isDarkMode: boolean,
  colors: {
    [key: string]: any;
  },
): void {
  Colors.loadSchemes({
    light: extractStringProperties(lightTheme),
    dark: extractStringProperties(darkTheme),
  });
  Colors.setScheme(isDarkMode ? 'dark' : 'light');
  Colors.loadColors(extractStringProperties(colors));
}
