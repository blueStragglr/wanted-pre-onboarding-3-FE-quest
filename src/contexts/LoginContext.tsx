import { createContext, Dispatch, useReducer } from "react";

type LoginState = {
  isLogin: boolean;
};
type Action = { type: 'LOGIN' } | { type: 'LOGOUT' };
type LoginDispatch = Dispatch<Action>;

function loginReducer(state: LoginState, action: Action): LoginState {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLogin: true,
      };
    case 'LOGOUT': 
      return {
        isLogin: false,
      };
    default:
      throw new Error('reducer error');
  }
}

export const LoginStateContext = createContext<LoginState | undefined>(undefined);

export const LoginDispatchContext = createContext<LoginDispatch | undefined>(undefined);

export function LoginContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, dispatch] = useReducer(loginReducer, { isLogin: false });

  return (
    <LoginDispatchContext.Provider value={dispatch}>
      <LoginStateContext.Provider value={isLogin}>
        {children}
      </LoginStateContext.Provider>
    </LoginDispatchContext.Provider>
  );
}
