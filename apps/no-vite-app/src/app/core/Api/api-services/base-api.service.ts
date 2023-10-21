export class BaseApiService {
  protected headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  protected url = process.env.NX_API || 'http://localhost:3333/api';

  protected setToken = (token: string) => {
    if (!token) {
      delete this.headers['Authorization'];
      return;
    }
    this.headers['Authorization'] = `Bearer ${token}`;
  };

  protected post = async (body: unknown) => {
    const response = await fetch(this.url + '/excute', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    return response.json();
  };
}
