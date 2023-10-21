import { Routes, Route } from 'react-router-dom';
import {
  DashboardPage,
  NotFoundPage,
  ProductAddPage,
  ProductDetailPage,
  LoginPage,
} from '../pages';
import { Layout } from '../components/Layout';
import { AppProvider } from '../AppProvider';

export function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/add" element={<ProductAddPage />} />
          <Route path="/detail/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
