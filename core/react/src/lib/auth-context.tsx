import { createContext } from "react";

export const AuthContext = createContext({
  accessToken: null,
  refreshToken: null,
  expiredAt: null,    
});

