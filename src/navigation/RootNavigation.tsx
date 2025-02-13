import { type FC } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignedInNavigation from './SignedInNavigation';
import AuthScreen from '~/screens/AuthScreen';
import useAuth from '~/hooks/useAuth';

type RootStackParams = {
  Auth: undefined;
  SignedIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigation: FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => <SafeAreaView /> }}>
        {user ? (
          <Stack.Screen name="SignedIn" component={SignedInNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
