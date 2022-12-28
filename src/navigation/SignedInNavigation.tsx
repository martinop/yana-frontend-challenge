import { type FC } from 'react';
import { View, Text } from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { COLORS, FONT_SIZES } from '~/theme';
import ChatScreen from '~/screens/ChatScreen';
import AccountScreen from '~/screens/AccountScreen';

type SignedInParams = {
  Chat: undefined;
  Account: undefined;
};

const Tab = createMaterialTopTabNavigator<SignedInParams>();

const SignedInNavigation: FC = () => {
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarLabelStyle: {
      fontSize: FONT_SIZES.medium,
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
        component={AccountScreen}
        options={{ title: 'Cuenta' }}
      />
    </Tab.Navigator>
  );
};

export default SignedInNavigation;
