// themes.ts
export interface Theme {
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
}

export const lightTheme: Theme = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  buttonColor: '#00A5E3',
};

export const darkTheme: Theme = {
  backgroundColor: '#000000',
  textColor: '#ffffff',
  buttonColor: '#ff0000',
};
