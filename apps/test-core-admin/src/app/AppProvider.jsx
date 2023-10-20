import {Outlet} from 'react-router-dom'
import { AuthProvider } from "./components/Auth";
import {  } from "module";

export function AppProvider() {
  return (
    <AuthProvider>
      <Outlet/>
    </AuthProvider>
  )
}