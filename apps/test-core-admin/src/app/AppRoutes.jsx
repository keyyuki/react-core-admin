import { Routes, Route, createRoutesFromElements } from "react-router-dom";
import { DashboardPage, NotFoundPage, ProductAddPage, ProductDetailPage, LoginPage } from "./pages";
import { Layout } from "./components/Layout";
import { AppProvider } from "./AppProvider";

export function AppRoutes() {
  return (
    <Routes>
    <Route element={<AppProvider />}>      
      <Route path="/" element={<Layout/>}>
        <Route path="/" title="dashboard" element={<DashboardPage />}/>
        <Route path="/add" title="add product" element={<ProductAddPage />}/>
        <Route path="/detail/:id" title="detail product" element={<ProductDetailPage />}/>
      </Route>
      <Route path="/login" title="login" element={<LoginPage />}/>
      <Route path="/*" title="not found" element={<NotFoundPage />}/> 
    </Route>
  </Routes>
    
  );
}