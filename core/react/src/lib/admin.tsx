
import { createContext, ReactPropTypes, ReactNode } from "react";

import styles from './admin.module.css';
import { AuthContext } from "./auth-context";

/* eslint-disable-next-line */
export interface AdminProps extends ReactPropTypes {
  authProvider: {
    login: (param: {username: string, password: string}) => Promise<{accessToken: string, refreshToken: string}>,
    logout: () => Promise<void>,
    refresh: (param: {refreshToken: string}) => Promise<{accessToken: string, refreshToken: string}>,
  };
  children: ReactNode;
}

export function Admin(props: AdminProps) {
  const authContextValues = {
    accessToken: null,
    refreshToken: null,
    expiredAt: null,    
  }
  
  return (
    <AuthContext.Provider value={authContextValues}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Admin;
