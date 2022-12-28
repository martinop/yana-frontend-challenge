import { DefaultTheme } from 'styled-components';
import { SPACING as spacing } from './metrics';

export const theme: DefaultTheme = {
  spacing,
  fontSize: {
    label: '12px',
    small: '14px',
    normal: '16px',
    large: '24px',
  },
  fontWeight: {
    bold: 700,
  },
  borderRadius: {
    normal: '28px',
    large: '32px',
  },
  colors: {
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
  },
};
