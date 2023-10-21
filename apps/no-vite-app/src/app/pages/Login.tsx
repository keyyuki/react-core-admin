import { useAuth } from '../core/Auth';

export function LoginPage() {
  const { login } = useAuth();

  const onLogin = () => {
    login({ name: 'admin' });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
