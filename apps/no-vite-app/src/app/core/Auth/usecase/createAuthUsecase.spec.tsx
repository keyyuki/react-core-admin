import { createLogInUsecase, createLogoutUsecase } from "./createAuthUsecase";

describe("createLogInUsecase", () => {
  it("should be defined", () => {
    
    expect(createLogInUsecase).toBeDefined();
  });


  it("should call setUser", async () => {
    const setUser = jest.fn();
    const navigate = jest.fn();
    const usecase = createLogInUsecase({setUser, navigate, location: {state: {from: "/"}}});
    await usecase({username:"user"});
    expect(setUser).toHaveBeenCalledWith({username:"user"});
  });

  it("should navigate to dashboard", async () => {
    const setUser = jest.fn();
    const navigate = jest.fn();
    const usecase = createLogInUsecase({setUser, navigate, location: {state: {from: "/"}}});
    await usecase({username:"user"});
    expect(navigate).toHaveBeenCalledWith("/");
  });

  it("should navigate to the from location", async () => {
    const setUser = jest.fn();
    const navigate = jest.fn();
    const usecase = createLogInUsecase({setUser, navigate, location:{state: {from: "/some-path"}}} );
    await usecase({username:"user"});
    expect(navigate).toHaveBeenCalledWith("/some-path");
  });
})