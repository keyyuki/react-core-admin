import { CoreProvider } from './core/CoreProvider';
import { PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <CoreProvider>{children}</CoreProvider>;
};
