import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '~/theme';

type ButtonProps = {
  variant?: 'primary' | 'danger';
  children: React.ReactNode;
} & TouchableOpacityProps;

const variantsBg = {
  primary: theme.colors.primary.default,
  danger: theme.colors.red.default,
};

const variantsText = {
  primary: theme.colors.primary.text,
  danger: theme.colors.red.text,
};

const BaseButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.lightGray : variantsBg[props.variant]};
  border-radius: ${(props) => props.theme.borderRadius.extraLarge};
  padding: ${(props) => props.theme.spacing.extraLarge};
`;

const BaseText = styled.Text<ButtonProps>`
  color: ${(props) =>
    props.disabled ? props.theme.colors.white : variantsText[props.variant]};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-align: center;
`;

const Button = (props: ButtonProps) => {
  const { children, variant, disabled, ...restProps } = props;
  return (
    <BaseButton
      variant={variant}
      disabled={disabled}
      activeOpacity={0.7}
      {...restProps}
    >
      <BaseText disabled={disabled} variant={variant}>
        {children}
      </BaseText>
    </BaseButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
