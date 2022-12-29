import styled from 'styled-components/native';
import { SPACING } from '~/theme';

const Avatar = styled.Image`
  width: ${SPACING.huge * 2}px;
  height: ${SPACING.huge * 2}px;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 100%;
  margin: ${(props) => `${props.theme.spacing.huge} auto 0 auto`};
  margin-bottom: ${(props) => props.theme.spacing.extraLarge};
`;

export default Avatar;
