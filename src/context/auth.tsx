import { createContext, useContext, PropsWithChildren, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import type { User } from '../model/user';

interface AuthContextType {
  user: User | null;
  signIn: (name: string, callback?: VoidFunction) => void;
  signOut: (callback?: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  const value = {
    user,
    signIn: (name: string, callback?: VoidFunction) => {
      setUser({ name });
      callback?.();
    },
    signOut: (callback?: VoidFunction) => {
      setUser(null);
      callback?.();
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

function RequireAuth({ children }: { children: React.ReactElement }) {
  const { user } = useAuth();
  const location = useLocation();

  if (user === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export { AuthProvider, useAuth, RequireAuth };
