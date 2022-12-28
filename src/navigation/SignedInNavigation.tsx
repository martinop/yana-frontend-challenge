import { type FC } from 'react';
import { View, Text } from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { COLORS, FONT_SIZES } from '~/theme';
import ChatScreen from '~/screens/ChatScreen';

type SignedInParams = {
  Chat: undefined;
  Account: undefined;
};

const Tab = createMaterialTopTabNavigator<SignedInParams>();

const SignedInNavigation: FC = () => {
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarLabelStyle: {
      fontSize: FONT_SIZES.normal,
      fontWeight: 'bold',
      textTransform: 'none',
    },
    tabBarActiveTintColor: COLORS.primary.default,
    tabBarInactiveTintColor: COLORS.gray,
    tabBarIndicatorStyle: {
      height: 5,
      backgroundColor: COLORS.primary.default,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: 'Chat' }}
      />
      <Tab.Screen
        name="Account"
        component={() => (
          <View>
            <Text
              style={{
                fontSize: 30,
              }}
            >
              Account Tab
            </Text>
          </View>
        )}
        options={{ title: 'Cuenta' }}
      />
    </Tab.Navigator>
  );
};

export default SignedInNavigation;
