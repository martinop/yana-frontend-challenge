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
      mediumPlus: string;
      large: string;
      extraLarge: string;
      big: string;
      huge: string;
    };
    colors: {
      primary: IPalette;
      red: IPalette;
      cyan: IPalette;
      lightBlue: IPalette;
      background: string;
      gray: string;
      lightGray: string;
      black: string;
      white: string;
    };
    borderRadius: {
      normal: string;
      large: string;
      extraLarge: string;
    };
    fontSize: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
    };
    fontWeight: {
      bold: number;
      regular: number;
    };
  }
}
