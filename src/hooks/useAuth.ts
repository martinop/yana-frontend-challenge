import {
  type User,
  signUp as signUpAction,
  logOut as logOutAction,
} from '~/redux/slices/authSlice';
import { UserSubmitForm } from '~/screens/AuthScreen';
import { useAppDispatch, useAppSelector } from './redux';

interface UseAuth {
  user: User | null;
  logOut: () => void;
  signUp: (values: UserSubmitForm) => void;
}

const useAuth = (): UseAuth => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const signUp = (values: UserSubmitForm) => dispatch(signUpAction(values));
  const logOut = () => dispatch(logOutAction());

  return { user, logOut, signUp };
};

export default useAuth;
