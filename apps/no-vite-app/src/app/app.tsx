// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppProvider } from './AppProvider';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
