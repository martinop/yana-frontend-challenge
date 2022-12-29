import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import ChatBubble from './ChatBubble';

const DotsContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.spacing.small} 0;
`;

const Dot = styled(Animated.View)`
  width: ${(props) => props.theme.spacing.small};
  height: ${(props) => props.theme.spacing.small};
  background-color: ${(props) => props.theme.colors.lightBlue.text};
  border-radius: 100%;
  margin: 0 ${(props) => props.theme.spacing.tiny};
`;

const DURATION = 200;

const DURATION_2_3 = (DURATION * 2) / 3;
const DURATION_1_3 = DURATION / 3;

const INTERPOLATE_OPTS = {
  inputRange: [0, 1],
  outputRange: [4, -8],
};

const DotsAnimation = () => {
  const [dot1YPosition] = useState(new Animated.Value(0));
  const [dot2YPosition] = useState(new Animated.Value(0));
  const [dot3YPosition] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dot1YPosition, {
          toValue: 1,
          duration: DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(dot1YPosition, {
          toValue: 0,
          duration: DURATION + DURATION_2_3,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(dot2YPosition, {
          toValue: 1,
          duration: DURATION + DURATION_1_3,
          useNativeDriver: true,
        }),
        Animated.timing(dot2YPosition, {
          toValue: 0,
          duration: DURATION + DURATION_1_3,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(dot3YPosition, {
          toValue: 1,
          duration: DURATION + DURATION_2_3,
          useNativeDriver: true,
        }),
        Animated.timing(dot3YPosition, {
          toValue: 0,
          duration: DURATION,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const translateY1 = dot1YPosition.interpolate(INTERPOLATE_OPTS);
  const translateY2 = dot2YPosition.interpolate(INTERPOLATE_OPTS);
  const translateY3 = dot3YPosition.interpolate(INTERPOLATE_OPTS);

  return (
    <ChatBubble sender="yana">
      <DotsContainer>
        <Dot style={{ transform: [{ translateY: translateY1 }] }} />
        <Dot style={{ transform: [{ translateY: translateY2 }] }} />
        <Dot style={{ transform: [{ translateY: translateY3 }] }} />
      </DotsContainer>
    </ChatBubble>
  );
};

export default DotsAnimation;
