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
    };
    colors: {
      primary: IPalette;
      background: string;
      red: IPalette;
      cyan: IPalette;
      lightBlue: IPalette;
      gray: string;
      lightGray: string;
    };
    borderRadius: {
      normal: string;
      large: string;
      extraLarge: string;
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
