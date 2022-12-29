import { type User, signUp as signUpAction } from '~/redux/slices/authSlice';
import { UserSubmitForm } from '~/screens/AuthScreen';
import { useAppDispatch, useAppSelector } from './redux';

interface UseAuth {
  user: User | null;
  signUp: (values: UserSubmitForm) => void;
}

const useAuth = (): UseAuth => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const signUp = (values: UserSubmitForm) => dispatch(signUpAction(values));

  return { user, signUp };
};

export default useAuth;
