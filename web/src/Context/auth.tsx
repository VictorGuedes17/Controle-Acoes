import React, { createContext, useContext, useState } from 'react';
import { getData } from '../Common/storage';

interface AuthContextData {
  children: any;
}

export const AuthContext = createContext<any>([]);

export const AuthProvider = (props: AuthContextData) => {

  const [user, setUser] = useState<any>();
  const [refresh, setRefresh] = useState<boolean>(true);
  const [isLoginPage, setIsLoginPage] = useState<boolean>(false);
  return (
    <AuthContext.Provider 
      value={{ 
        user: user,
        setUser: setUser,
        refresh: refresh,
        setRefresh: setRefresh,
        isLoginPage: isLoginPage,
        setIsLoginPage: setIsLoginPage
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useDataUser = () => {

  const { user, setUser } = useContext(AuthContext);

  return { user, setUser };
}

export function useRefreshTable() {
  const { refresh, setRefresh } = useContext(AuthContext);

  return { refresh, setRefresh };
}

export function useVerifyLogin() {
  const { isLoginPage, setIsLoginPage } = useContext(AuthContext);

  return { isLoginPage, setIsLoginPage };
}