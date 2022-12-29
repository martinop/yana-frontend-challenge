import styled, { DefaultTheme } from 'styled-components/native';
import { FONT_SIZES, FONT_WEIGHTS } from '~/theme';

type TextColor = keyof Pick<DefaultTheme, 'colors'>['colors'];

type TextSize = keyof typeof FONT_SIZES;
type TextWeight = keyof typeof FONT_WEIGHTS;

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
}

const Text = styled.Text<TextProps>`
  font-size: ${(props) => props.theme.fontSize[props.size]};
  line-height: ${(props) => props.theme.fontSize.large};
  color: ${(props) => {
    const color = props.theme.colors[props.color];
    if (typeof color === 'string') return color;
    return color.text;
  }};
  font-weight: ${(props) => FONT_WEIGHTS[props.weight]};
  text-align: center;
`;

Text.defaultProps = {
  color: 'black',
  size: 'medium',
  weight: 'regular',
};

export default Text;
