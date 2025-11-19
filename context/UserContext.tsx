import React, { createContext, useContext } from 'react';

interface UserContextType {
  email: string;
  setEmail: (email: string) => void;
}

const UserContext = createContext<UserContextType>({
  email: '',
  setEmail: () => {},
});

export const useUser = () => useContext(UserContext);

export { UserContext };

