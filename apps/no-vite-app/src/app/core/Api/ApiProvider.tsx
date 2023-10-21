import { createContext, useState, PropsWithChildren, useContext } from 'react';
import { AuthenticationApiService } from './api-services/authentication-api.service';
import { BaseApiService } from './api-services/base-api.service';

export const ApiContext = createContext({
  apies: new Map(),
  updateToken: (token: string) => {
    // do nothing
  },
});

export const ApiProvider = ({ children }: PropsWithChildren) => {
  const authApiService = new AuthenticationApiService();
  const value = new Map();
  value.set(authApiService.constructor.name, authApiService);
  const [apies, setApies] = useState(value);

  const updateToken = (token: string) => {
    apies.forEach((api) => {
      api.setToken(token);
    });
    setApies(apies);
  };

  return (
    <ApiContext.Provider
      value={{
        apies: apies,
        updateToken: updateToken,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

// userApi take class as parameter, find in AuthContext and return it
export const useApi = <T extends BaseApiService>(api: new () => T): T => {
  const { apies } = useContext(ApiContext);
  return apies.get(api.name);
};
