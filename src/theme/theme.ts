import { DefaultTheme } from 'styled-components';
import { SPACING } from './metrics';

const numbericToPx = (value: number) => `${value}px`;

export const FONT_SIZES = {
  label: 12,
  small: 14,
  normal: 16,
  large: 24,
};

export const FONT_WEIGHTS = {
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
    large: numbericToPx(SPACING.large),
    extraLarge: numbericToPx(SPACING.extraLarge),
    big: numbericToPx(SPACING.big),
  },
  fontSize: {
    label: numbericToPx(FONT_SIZES.label),
    small: numbericToPx(FONT_SIZES.small),
    normal: numbericToPx(FONT_SIZES.normal),
    large: numbericToPx(FONT_SIZES.large),
  },
  fontWeight: FONT_WEIGHTS,
  borderRadius: {
    normal: '28px',
    large: '32px',
  },
  colors: COLORS,
};
