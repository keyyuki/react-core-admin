import { NavigateFunction } from "react-router-dom";


export function createLogInUsecase(params:{
  navigate: NavigateFunction;
  location: {state: {from: string}};
  setUser: (user: unknown) => void;
}) {
  const {navigate, location, setUser} = params;
  
  return async (data: unknown) => {
    setUser(data);
    if(location.state && location.state.from){
      navigate(location.state.from);
      return;
    }
    navigate("/");
  }
}

export function createLogoutUsecase(params:{
  navigate:NavigateFunction;
  setUser: (user: unknown) => void;
}) {
  const {navigate, setUser} = params;
  return async () => {
    setUser(null);
    navigate("/login", {replace: true});
  }
}