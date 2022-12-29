import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => `0 ${props.theme.spacing.large}`};
`;

export default Container;
