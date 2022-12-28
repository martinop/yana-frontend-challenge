import { type FC } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignedInNavigation from './SignedInNavigation';
import AuthScreen from '~/screens/AuthScreen';

type RootStackParams = {
  Auth: undefined;
  SignedIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigation: FC = () => {
  const hasSession = false;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => <SafeAreaView /> }}>
        {hasSession ? (
          <Stack.Screen name="SignedIn" component={SignedInNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
