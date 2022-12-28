import { type FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

type SignedInParams = {
  Chat: undefined;
  Account: undefined;
};

const Tab = createMaterialTopTabNavigator<SignedInParams>();

const SignedInNavigation: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={() => (
          <View>
            <Text
              style={{
                fontSize: 30,
              }}
            >
              Chat Tab
            </Text>
          </View>
        )}
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
