// themes.ts
export interface Theme {
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
}

export const lightTheme: Theme = {
  backgroundColor: '#FFFFFF',
  textColor: '#2C2929',
  buttonColor: '#00A5E3',
};

export const darkTheme: Theme = {
  backgroundColor: '#0A0933',
  textColor: '#FFFFFF',
  buttonColor: '#EB6958',
};
