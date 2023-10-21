import { AuthProvider, useAuth } from './Auth';
import { ApiProvider, ApiContext } from './Api';
import { PropsWithChildren, useContext, useEffect } from 'react';

const ProviderConnector = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const { updateToken } = useContext(ApiContext);

  useEffect(() => {
    updateToken(user ? (user['token'] as string) : '');
  }, [user]);

  return children;
};

export const CoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <ApiProvider>
        <ProviderConnector>{children}</ProviderConnector>
      </ApiProvider>
    </AuthProvider>
  );
};
