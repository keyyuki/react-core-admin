import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

export function Layout() {
  const { logout, user } = useAuth();

  const location = useLocation()

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" state={{from: location}}/>;
  }

  return (
    <div className="container">
      <div className="nav">
        <a href="/">Home</a>
        <a href="/product/add">Add</a>
        <button  onClick={() => logout()}>Logout</button>
      </div>
      <div className="content">
      <Outlet/> 
      </div>
    </div>
  );
  
}