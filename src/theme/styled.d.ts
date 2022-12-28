import 'styled-components';

interface IPalette {
  default: string;
  text: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      big: string;
    };
    colors: {
      primary: IPalette;
      background: string;
      red: IPalette;
      cyan: IPalette;
      lightBlue: IPalette;
    };
    borderRadius: {
      large: string;
      normal: string;
    };
    fontSize: {
      label: string;
      small: string;
      normal: string;
      large: string;
    };
    fontWeight: {
      bold: number;
    };
  }
}
