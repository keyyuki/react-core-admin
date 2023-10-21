import {
  FC,
  createContext,
  useContext,
  useMemo,
  PropsWithChildren,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  createLogInUsecase,
  createLogoutUsecase,
} from './usecase/createAuthUsecase';

export const AuthContext = createContext({
  user: null,
  login: (data: unknown) => {
    // do nothing
  },
  logout: () => {
    // do nothing
  },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();
  const location = useLocation();

  // call this function when you want to authenticate the user
  const login = createLogInUsecase({ setUser, navigate, location });

  // call this function to sign out logged in user
  const logout = createLogoutUsecase({ setUser, navigate });

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
