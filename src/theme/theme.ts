import { DefaultTheme } from 'styled-components';

const numbericToPx = (value: number) => `${value}px`;

export const SPACING = {
  tiny: 4,
  small: 8,
  medium: 12,
  mediumPlus: 14,
  large: 16,
  extraLarge: 24,
  big: 32,
  huge: 48,
};

export const FONT_SIZES = {
  tiny: 12,
  small: 14,
  medium: 16,
  large: 24,
};

export const FONT_WEIGHTS = {
  regular: 400,
  bold: 700,
};

export const COLORS = {
  primary: {
    default: '#FF8755',
    text: '#672A11',
  },
  background: '#ffffff',
  red: {
    default: '#FFC5C5',
    text: '#671111',
  },
  cyan: {
    default: '#3B9391',
    text: '#ffffff',
  },
  lightBlue: {
    default: '#F0F6FA',
    text: '#4B5959',
  },
  gray: '#808080',
  lightGray: '#C4C4C4',
  black: '#000000',
};

export const theme: DefaultTheme = {
  // spacing: Object.keys(SPACING).reduce(
  //   (prev, current) => ({
  //     ...prev,
  //     [current]: `${SPACING[current]}px`,
  //   }),
  //   {} as Pick<DefaultTheme, 'spacing'>
  // ),
  spacing: {
    tiny: numbericToPx(SPACING.tiny),
    small: numbericToPx(SPACING.small),
    medium: numbericToPx(SPACING.medium),
    mediumPlus: numbericToPx(SPACING.mediumPlus),
    large: numbericToPx(SPACING.large),
    extraLarge: numbericToPx(SPACING.extraLarge),
    big: numbericToPx(SPACING.big),
    huge: numbericToPx(SPACING.huge),
  },
  fontSize: {
    tiny: numbericToPx(FONT_SIZES.tiny),
    small: numbericToPx(FONT_SIZES.small),
    medium: numbericToPx(FONT_SIZES.medium),
    large: numbericToPx(FONT_SIZES.large),
  },
  fontWeight: FONT_WEIGHTS,
  borderRadius: {
    normal: '20px',
    large: '28px',
    extraLarge: '32px',
  },
  colors: COLORS,
};
