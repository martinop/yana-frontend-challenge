import type { FC } from 'react';
import styled from 'styled-components/native';
import { theme } from '~/theme';

type ButtonProps = {
  variant?: 'primary' | 'danger';
  children: React.ReactNode;
};

const variantsBg = {
  primary: theme.colors.primary.default,
  danger: theme.colors.red.default,
};

const variantsText = {
  primary: theme.colors.primary.text,
  danger: theme.colors.red.text,
};

const BaseButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => variantsBg[props.variant]};
  border-radius: ${(props) => props.theme.borderRadius.extraLarge};
  padding: ${(props) => props.theme.spacing.extraLarge};
`;

const BaseText = styled.Text<ButtonProps>`
  color: ${(props) => variantsText[props.variant]};
  font-size: ${(props) => props.theme.fontSize.normal};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-align: center;
`;

const Button: FC<ButtonProps> = (props) => {
  const { children, variant } = props;
  return (
    <BaseButton variant={variant} activeOpacity={0.85}>
      <BaseText variant={variant}>{children}</BaseText>
    </BaseButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
