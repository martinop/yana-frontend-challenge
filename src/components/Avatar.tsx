import styled from 'styled-components/native';
import { SPACING } from '~/theme';

const Avatar = styled.Image`
  width: ${SPACING.huge * 2}px;
  height: ${SPACING.huge * 2}px;
  border-radius: 100px;
  margin: ${(props) => `${props.theme.spacing.huge} auto 0 auto`};
`;

export default Avatar;
